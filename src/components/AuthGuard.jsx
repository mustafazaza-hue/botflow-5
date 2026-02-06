// src/components/AuthGuard.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';
import { authApi } from '../api/auth';

export default function AuthGuard({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('🔍 AuthGuard: Checking authentication...');
        
        // تحقق من التوكن
        const tokenCheck = authApi.checkToken();
        console.log('🔍 AuthGuard: Token check:', tokenCheck);
        
        if (!tokenCheck.isValid) {
          console.log('❌ AuthGuard: No valid token found, redirecting to login');
          
          // نظف localStorage إذا كان التوكن غير صالح
          if (tokenCheck.exists) {
            console.log('🧹 AuthGuard: Clearing invalid token...');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_data');
          }
          
          const message = searchParams.get('message');
          router.push(`/customer-login${message ? `?message=${message}` : ''}`);
          return;
        }
        
        console.log('✅ AuthGuard: Valid token found');
        setIsAuthenticated(true);
        setIsLoading(false);
        
      } catch (error) {
        console.error('❌ AuthGuard: Error checking authentication:', error);
        
        // نظف التخزين المحلي في حالة الخطأ
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_data');
        
        // أعد التوجيه لصفحة تسجيل الدخول
        router.push('/customer-login?message=session_expired');
      }
    };

    checkAuth();
  }, [router, searchParams]);

  if (isLoading) {
    return <LoadingSpinner message="Verifying your session..." />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
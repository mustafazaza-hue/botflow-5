// src/api/auth.js
import axiosInstance from "./client";

export const authApi = {
  // تسجيل الدخول العادي (معدل مع تشخيص)
  login: async (credentials) => {
    try {
      console.log("🔐 Login request:", {
        email: credentials.email,
        hasPassword: !!credentials.password
      });

      const response = await axiosInstance.post("/Auth/login", credentials);
      
      console.log("🔍 Raw login response analysis:", {
        status: response.status,
        statusText: response.statusText,
        hasData: !!response.data,
        dataKeys: Object.keys(response.data || {}),
        fullData: response.data
      });
      
      // 🔴 البحث الشامل عن التوكن في الاستجابة
      let token = null;
      let refreshToken = null;
      let userData = null;
      
      // استراتيجيات البحث عن التوكن
      const tokenCandidates = [
        // المستوى المباشر
        response.data?.token,
        response.data?.accessToken,
        response.data?.jwtToken,
        response.data?.access_token,
        response.data?.jwt,
        
        // داخل data.data
        response.data?.data?.token,
        response.data?.data?.accessToken,
        response.data?.data?.jwtToken,
        
        // داخل result
        response.data?.result?.token,
        response.data?.result?.accessToken,
        
        // أسماء أخرى محتملة
        response.data?.authToken,
        response.data?.sessionToken,
        response.data?.bearerToken
      ];
      
      // ابحث عن أول توكن صالح
      for (const candidate of tokenCandidates) {
        if (candidate && typeof candidate === 'string' && candidate.length > 10) {
          token = candidate;
          console.log(`✅ Found token in response: ${candidate.substring(0, 30)}...`);
          break;
        }
      }
      
      // ابحث عن refresh token
      const refreshTokenCandidates = [
        response.data?.refreshToken,
        response.data?.refresh_token,
        response.data?.data?.refreshToken
      ];
      
      for (const candidate of refreshTokenCandidates) {
        if (candidate && typeof candidate === 'string') {
          refreshToken = candidate;
          break;
        }
      }
      
      // احصل على بيانات المستخدم
      userData = response.data?.data || response.data;
      
      // 🔴 تخزين في localStorage
      if (token) {
        console.log("✅ Saving token to localStorage...");
        localStorage.setItem("auth_token", token);
        
        if (refreshToken) {
          localStorage.setItem("refresh_token", refreshToken);
        }
        
        if (userData) {
          localStorage.setItem("user_data", JSON.stringify(userData));
        }
        
        // تحديث axios instance
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("✅ Token saved and axios headers updated");
        
        // التحقق النهائي
        console.log("🔍 Final localStorage check after login:", {
          tokenInStorage: !!localStorage.getItem("auth_token"),
          tokenLength: localStorage.getItem("auth_token")?.length,
          storageKeys: Object.keys(localStorage)
        });
      } else {
        console.warn("⚠️ No token found in response!");
        console.log("📋 Response structure for debugging:", response.data);
      }
      
      return response.data;
    } catch (error) {
      console.error("❌ Login API error:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
        fullError: error
      });
      
      // إعادة الخطأ بالهيكل المناسب
      const apiError = {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        detail: error.response?.data?.detail,
        data: error.response?.data,
        originalError: error
      };
      throw apiError;
    }
  },

  // التسجيل
  register: async (userData) => {
    try {
      const response = await axiosInstance.post("/Auth/register", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // تسجيل الدخول للأدمن
  adminLogin: async (credentials) => {
    try {
      console.log("📤 Admin login request data:", {
        email: credentials.email,
        hasPassword: !!credentials.password,
        has2FA: !!credentials.twoFactorCode,
        rememberDevice: credentials.rememberDevice,
      });

      const response = await axiosInstance.post("/Auth/admin/login", {
        email: credentials.email,
        password: credentials.password,
        twoFactorCode: credentials.twoFactorCode || "",
        rememberDevice: credentials.rememberDevice || true,
      });

      console.log("✅ Admin login response received:", {
        success: response.data?.success,
        message: response.data?.message,
        hasToken: !!response.data?.data?.token,
        role: response.data?.data?.role,
        email: response.data?.data?.email,
      });

      if (response.data?.data?.token) {
        localStorage.setItem("auth_token", response.data.data.token);
        localStorage.setItem("refresh_token", response.data.data.refreshToken);
        localStorage.setItem("user_data", JSON.stringify(response.data.data));
        console.log("✅ Admin token saved to localStorage");

        axiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${response.data.data.token}`;
        axiosInstance.defaults.headers.common["Content-Type"] =
          "application/json";
        axiosInstance.defaults.headers.common["accept"] = "application/json";
      }

      return response.data.data || response.data;
    } catch (error) {
      console.error("❌ Admin login API error:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
      });

      throw {
        response: {
          status: error.response?.status,
          data: error.response?.data,
        },
        message: error.message,
      };
    }
  },

  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await axiosInstance.post("/Auth/refresh-token", null, {
        headers: {
          "Refresh-Token": refreshToken,
        },
      });

      if (response.data.token) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("refresh_token", response.data.refreshToken);
      }
      return response.data;
    } catch (error) {
      console.error("Refresh token API error:", error);
      throw error.response?.data || error.message;
    }
  },

  verifyEmail: async (token) => {
    try {
      const response = await axiosInstance.post("/Auth/verify-email", null, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await axiosInstance.post("/Auth/forgot-password", {
        email,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  resetPassword: async (data) => {
    try {
      const response = await axiosInstance.post("/Auth/reset-password", data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  resendVerification: async (email) => {
    try {
      const response = await axiosInstance.post(
        "/Auth/resend-verification",
        null,
        {
          params: { email },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  validateToken: async () => {
    try {
      const response = await axiosInstance.post("/Auth/validate-token");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  logout: async () => {
    try {
      const token = localStorage.getItem("auth_token");

      if (token) {
        const response = await axiosInstance.post("/Auth/logout");
        console.log("✅ Logout successful:", response.data);
      } else {
        console.log("ℹ️ No token found, skipping server logout");
      }
    } catch (error) {
      console.error("❌ Logout API error:", {
        status: error.response?.status,
        message: error.message,
      });

      if (error.response?.status !== 401) {
        console.error("Non-401 logout error, re-throwing");
        throw error.response?.data || error.message;
      }
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_data");
      console.log("🧹 LocalStorage cleared");
    }
  },

  getCurrentUser: () => {
    const userData = localStorage.getItem("user_data");
    return userData ? JSON.parse(userData) : null;
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("auth_token");
    const isAuth = !!token && token.length > 10;
    console.log("🔍 isAuthenticated check:", {
      hasToken: !!token,
      tokenLength: token?.length,
      result: isAuth
    });
    return isAuth;
  },
  
  // دالة جديدة: التحقق من التوكن
  checkToken: () => {
    const token = localStorage.getItem("auth_token");
    return {
      exists: !!token,
      length: token?.length,
      sample: token ? token.substring(0, 30) + '...' : null,
      isValid: token && token.length > 10
    };
  }

  
};
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

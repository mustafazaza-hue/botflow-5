// src/context/SuperAdminContext.js
'use client'

import React, { createContext, useContext, useState, useCallback } from 'react';
import { useSuperAdmin } from '@/hooks/useSuperAdmin';

const SuperAdminContext = createContext();

export const useSuperAdminContext = () => {
  const context = useContext(SuperAdminContext);
  if (!context) {
    throw new Error('useSuperAdminContext must be used within SuperAdminProvider');
  }
  return context;
};

export const SuperAdminProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDataSource, setSelectedDataSource] = useState(null);
  const [filterParams, setFilterParams] = useState({});
  
  const superAdminApi = useSuperAdmin();

  const handleUserSelect = useCallback((user) => {
    setSelectedUser(user);
    setCurrentView('user-details');
  }, []);

  const handleDataSourceSelect = useCallback((dataSource) => {
    setSelectedDataSource(dataSource);
    setCurrentView('data-source-details');
  }, []);

  const updateFilters = useCallback((newFilters) => {
    setFilterParams(prev => ({
      ...prev,
      ...newFilters
    }));
  }, []);

  const value = {
    currentView,
    setCurrentView,
    selectedUser,
    setSelectedUser,
    selectedDataSource,
    setSelectedDataSource,
    filterParams,
    updateFilters,
    handleUserSelect,
    handleDataSourceSelect,
    ...superAdminApi
  };

  return (
    <SuperAdminContext.Provider value={value}>
      {children}
    </SuperAdminContext.Provider>
  );
};
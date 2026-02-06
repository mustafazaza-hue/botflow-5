import { useState, useCallback } from 'react';
import { usersApi } from '../api/users';
import { showAlert } from '../utils/sweetAlert';

export const useUsersStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await usersApi.getUsersStats();
      setStats(data);
    } catch (err) {
      setError(err.message || 'Failed to load users statistics');
    } finally {
      setLoading(false);
    }
  }, []);

  return { stats, loading, error, refetch: fetchStats };
};

export const useUsers = (initialParams = {}) => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialParams);

  const fetchUsers = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const newFilters = { ...filters, ...params };
      setFilters(newFilters);
      
      const data = await usersApi.getUsers(newFilters);
      setUsers(data.items || data.users || []);
      setPagination({
        page: data.page || 1,
        pageSize: data.pageSize || 10,
        total: data.total || 0,
        totalPages: data.totalPages || Math.ceil((data.total || 0) / (data.pageSize || 10))
      });
    } catch (err) {
      setError(err.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const updateUser = async (id, userData) => {
    try {
      const updatedUser = await usersApi.updateUser(id, userData);
      
      // Update the user in the local state
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );
      
      showAlert.success('User updated successfully');
      return updatedUser;
    } catch (err) {
      showAlert.error('Failed to update user');
      throw err;
    }
  };

  const suspendUser = async (id, reason = '') => {
    try {
      await usersApi.suspendUser(id, reason);
      
      // Update user status in local state
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === id ? { ...user, status: 'Suspended' } : user
        )
      );
      
      showAlert.success('User suspended successfully');
    } catch (err) {
      showAlert.error('Failed to suspend user');
      throw err;
    }
  };

  const activateUser = async (id) => {
    try {
      await usersApi.activateUser(id);
      
      // Update user status in local state
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === id ? { ...user, status: 'Active' } : user
        )
      );
      
      showAlert.success('User activated successfully');
    } catch (err) {
      showAlert.error('Failed to activate user');
      throw err;
    }
  };

  return {
    users,
    pagination,
    loading,
    error,
    filters,
    fetchUsers,
    updateUser,
    suspendUser,
    activateUser,
    setFilters
  };
};

export const useUser = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await usersApi.getUserById(id);
      setUser(data);
    } catch (err) {
      setError(err.message || 'Failed to load user');
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { user, loading, error, refetch: fetchUser };
};

export const useRecentUsers = (page = 1, pageSize = 10) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecentUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await usersApi.getRecentUsers(page, pageSize);
      setUsers(data.items || data.users || []);
    } catch (err) {
      setError(err.message || 'Failed to load recent users');
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  return { users, loading, error, refetch: fetchRecentUsers };
};

export const useSystemPerformance = () => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPerformance = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await usersApi.getSystemPerformance();
      setPerformance(data);
    } catch (err) {
      setError(err.message || 'Failed to load system performance');
    } finally {
      setLoading(false);
    }
  }, []);

  return { performance, loading, error, refetch: fetchPerformance };
};
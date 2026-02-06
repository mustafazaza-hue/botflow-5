'use client'

import { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCrown,
  faChartLine,
  faUsers,
  faCreditCard,
  faRobot,
  faComments,
  faChartPie,
  faCog,
  faShieldHalved,
  faPlug,
  faBell,
  faEllipsisVertical,
  faLanguage,
  faChevronDown,
  faQuestionCircle,
  faSearch,
  faDownload,
  faFilter,
  faCheckCircle,
  faClock,
  faBan,
  faEye,
  faDollarSign,
  faComments as faCommentsSolid,
  faRotate,
  faPauseCircle,
  faEnvelope,
  faXmark,
  faSpinner,
  faExclamationCircle,
  faTrash,
  faEdit
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Import our API services
import { userApi, USER_STATUS,SUBSCRIPTION_PLANS} from '../../../api/users';
import { formatNumber, formatCurrency, formatDate } from '../../../utils/formatters';

// Validation schema for user update
const UserUpdateSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  role: Yup.string().required('Required'),
  subscriptionPlan: Yup.string().required('Required'),
  isActive: Yup.boolean().required('Required')
});

export default function UserManagementPage() {
  // State for users data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    trialUsers: 0,
    suspendedUsers: 0
  });
  
  // State for filters and pagination
  const [filters, setFilters] = useState({
    search: '',
    role: '',
    status: '',
    subscriptionPlan: ''
  });
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    totalPages: 1,
    totalCount: 0
  });
  
  // State for selected user and modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  
  // State for user statistics in modal
  const [userStats, setUserStats] = useState(null);
  
  // State for bulk actions
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isBulkAction, setIsBulkAction] = useState(false);

  // Fetch users with current filters
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const params = {
        ...filters,
        page: pagination.page,
        pageSize: pagination.pageSize
      };
      
      const response = await userApi.getUsers(params);
      
      // Assuming API returns data in a standard format
      // Adjust based on your actual API response structure
      if (response) {
        // Check different response structures
        if (response.data && Array.isArray(response.data)) {
          setUsers(response.data);
        } else if (Array.isArray(response)) {
          setUsers(response);
        } else if (response.users) {
          setUsers(response.users);
        } else {
          setUsers([]);
        }
        
        // Handle pagination data
        if (response.pagination) {
          setPagination(prev => ({
            ...prev,
            totalPages: response.pagination.totalPages || 1,
            totalCount: response.pagination.totalCount || 0
          }));
        } else if (response.totalCount !== undefined) {
          setPagination(prev => ({
            ...prev,
            totalPages: Math.ceil(response.totalCount / pagination.pageSize),
            totalCount: response.totalCount
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [filters, pagination.page, pagination.pageSize]);

  // Fetch statistics
  const fetchStatistics = useCallback(async () => {
    try {
      setLoadingStats(true);
      const response = await userApi.getUserStatistics();
      
      // Adjust based on your actual API response structure
      if (response) {
        setStats({
          totalUsers: response.totalUsers || response.total || 0,
          activeUsers: response.activeUsers || response.active || 0,
          trialUsers: response.trialUsers || response.trial || 0,
          suspendedUsers: response.suspendedUsers || response.suspended || 0
        });
      }
    } catch (error) {
      console.error('Error fetching statistics:', error);
      // Set default values if API fails
      setStats({
        totalUsers: 0,
        activeUsers: 0,
        trialUsers: 0,
        suspendedUsers: 0
      });
    } finally {
      setLoadingStats(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchUsers();
    fetchStatistics();
  }, [fetchUsers, fetchStatistics]);

  // Refetch when filters or pagination changes
  useEffect(() => {
    fetchUsers();
  }, [pagination.page, pagination.pageSize, fetchUsers]);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Apply filters
  const handleApplyFilters = () => {
    setPagination(prev => ({ ...prev, page: 1 })); // Reset to first page
    fetchUsers();
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      search: '',
      role: '',
      status: '',
      subscriptionPlan: ''
    });
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    handleApplyFilters();
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }));
    }
  };

  // Handle user selection for modal
  const handleUserSelect = async (user) => {
    try {
      setSelectedUser(user);
      setIsModalOpen(true);
      
      // Fetch user details
      const userDetails = await userApi.getUserById(user.id);
      setSelectedUser(userDetails);
      
      // Try to fetch user statistics
      try {
        const stats = await userApi.getUserSpecificStatistics(user.id);
        setUserStats(stats);
      } catch (statsError) {
        console.log('User statistics not available:', statsError);
        setUserStats(null);
      }
    } catch (error) {
      console.error('Error loading user details:', error);
      // Keep modal open with basic user info
    }
  };

  // Formik for user update form
  const updateForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      role: '',
      subscriptionPlan: '',
      isActive: false
    },
    validationSchema: UserUpdateSchema,
    onSubmit: async (values) => {
      try {
        setIsUpdating(true);
        await userApi.updateUser(selectedUser.id, values);
        
        // Refresh users list
        fetchUsers();
        // Refresh statistics
        fetchStatistics();
        
        // Close modal after successful update
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error updating user:', error);
      } finally {
        setIsUpdating(false);
      }
    }
  });

  // Update form values when selected user changes
  useEffect(() => {
    if (selectedUser) {
      updateForm.setValues({
        firstName: selectedUser.firstName || '',
        lastName: selectedUser.lastName || '',
        role: selectedUser.role || '',
        subscriptionPlan: selectedUser.subscriptionPlan || '',
        isActive: selectedUser.isActive || selectedUser.status === USER_STATUS.ACTIVE
      });
    }
  }, [selectedUser]);

  // Handle user actions
  const handleSuspendUser = async (userId, reason = 'Suspended by admin') => {
    if (window.confirm('Are you sure you want to suspend this user?')) {
      try {
        await userApi.suspendUser(userId, reason);
        fetchUsers();
        fetchStatistics();
      } catch (error) {
        console.error('Error suspending user:', error);
      }
    }
  };

  const handleActivateUser = async (userId) => {
    if (window.confirm('Are you sure you want to activate this user?')) {
      try {
        await userApi.activateUser(userId);
        fetchUsers();
        fetchStatistics();
      } catch (error) {
        console.error('Error activating user:', error);
      }
    }
  };

  // Handle bulk actions
  const handleBulkSelect = (userId) => {
    setSelectedUsers(prev => {
      if (prev.includes(userId)) {
        return prev.filter(id => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };

  const handleBulkSuspend = async () => {
    if (selectedUsers.length === 0) return;
    
    if (window.confirm(`Are you sure you want to suspend ${selectedUsers.length} users?`)) {
      setIsBulkAction(true);
      try {
        const promises = selectedUsers.map(userId => 
          userApi.suspendUser(userId, 'Bulk suspension')
        );
        await Promise.all(promises);
        setSelectedUsers([]);
        fetchUsers();
        fetchStatistics();
      } catch (error) {
        console.error('Error in bulk suspend:', error);
      } finally {
        setIsBulkAction(false);
      }
    }
  };

  const handleBulkActivate = async () => {
    if (selectedUsers.length === 0) return;
    
    if (window.confirm(`Are you sure you want to activate ${selectedUsers.length} users?`)) {
      setIsBulkAction(true);
      try {
        const promises = selectedUsers.map(userId => 
          userApi.activateUser(userId)
        );
        await Promise.all(promises);
        setSelectedUsers([]);
        fetchUsers();
        fetchStatistics();
      } catch (error) {
        console.error('Error in bulk activate:', error);
      } finally {
        setIsBulkAction(false);
      }
    }
  };

  // Handle export
  const handleExport = async () => {
    try {
      await userApi.exportUsers(filters);
    } catch (error) {
      console.error('Error exporting users:', error);
    }
  };

  // Get status badge class
  const getStatusClass = (status) => {
    switch (status) {
      case USER_STATUS.ACTIVE:
        return 'text-green-700 bg-green-100';
      case USER_STATUS.TRIAL:
        return 'text-yellow-700 bg-yellow-100';
      case USER_STATUS.SUSPENDED:
        return 'text-red-700 bg-red-100';
      case USER_STATUS.EXPIRED:
        return 'text-gray-700 bg-gray-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  // Get plan badge class
  const getPlanClass = (plan) => {
    switch (plan) {
      case SUBSCRIPTION_PLANS.BUSINESS:
        return 'text-purple-700 bg-purple-100';
      case SUBSCRIPTION_PLANS.PRO:
        return 'text-blue-700 bg-blue-100';
      case SUBSCRIPTION_PLANS.STARTER:
        return 'text-gray-700 bg-gray-100';
      case SUBSCRIPTION_PLANS.TRIAL:
        return 'text-orange-700 bg-orange-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  // Statistics Cards Component
  const StatCard = ({ title, value, icon, color, isLoading }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <FontAwesomeIcon icon={icon} className="text-2xl" />
        </div>
        {!isLoading && value > 0 && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">+12.5%</span>
        )}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">
        {isLoading ? (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
            <span>Loading...</span>
          </div>
        ) : (
          formatNumber(value)
        )}
      </h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );

  // Loading skeleton for table rows
  const TableSkeleton = () => (
    <>
      {[...Array(8)].map((_, index) => (
        <tr key={index} className="hover:bg-gray-50 animate-pulse">
          <td className="px-6 py-4">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-12"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-8"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-12"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-8 bg-gray-200 rounded w-16"></div>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Keep as is */}
      <aside className="w-64 bg-gradient-to-b from-[#1e293b] to-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faCrown} className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Super Admin</h1>
              <p className="text-xs text-gray-400">System Control</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            <a href="/super-dashboard" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              <span>Overview</span>
            </a>
            <a href="/user-management" className="flex items-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white shadow-lg">
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              <span className="font-medium">All Subscribers</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
              <span>Billing & Revenue</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faRobot} className="mr-3" />
              <span>System Bots</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faComments} className="mr-3" />
              <span>All Conversations</span>
            </a>
            <a href="/kpi" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faChartPie} className="mr-3" />
              <span>Analytics</span>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">System Management</p>
            <div className="space-y-1">
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                <span>System Settings</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-3" />
                <span>Security & Logs</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faPlug} className="mr-3" />
                <span>Integrations</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="mr-3" />
                <span>Notifications</span>
              </a>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 px-4 py-3 bg-gray-800 rounded-lg">
            <img 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" 
              alt="Admin" 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium text-sm">John Mitchell</p>
              <p className="text-xs text-gray-400">System Admin</p>
            </div>
            <button className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <p className="text-sm text-gray-500 mt-1">Manage all subscribers, accounts, and subscription status</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2">
                  <FontAwesomeIcon icon={faLanguage} />
                  <span>EN</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </button>
              </div>
              <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Users"
              value={stats.totalUsers}
              icon={faUsers}
              color="bg-[#6366f1] bg-opacity-10 text-[#6366f1]"
              isLoading={loadingStats}
            />
            <StatCard
              title="Active Accounts"
              value={stats.activeUsers}
              icon={faCheckCircle}
              color="bg-green-100 text-green-600"
              isLoading={loadingStats}
            />
            <StatCard
              title="Trial Users"
              value={stats.trialUsers}
              icon={faClock}
              color="bg-yellow-100 text-yellow-600"
              isLoading={loadingStats}
            />
            <StatCard
              title="Suspended"
              value={stats.suspendedUsers}
              icon={faBan}
              color="bg-red-100 text-red-600"
              isLoading={loadingStats}
            />
          </div>

          {/* Bulk Actions Bar */}
          {selectedUsers.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-blue-800">
                    {selectedUsers.length} user(s) selected
                  </span>
                  <button
                    onClick={handleBulkActivate}
                    disabled={isBulkAction}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isBulkAction ? 'Processing...' : 'Activate Selected'}
                  </button>
                  <button
                    onClick={handleBulkSuspend}
                    disabled={isBulkAction}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isBulkAction ? 'Processing...' : 'Suspend Selected'}
                  </button>
                </div>
                <button
                  onClick={() => setSelectedUsers([])}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Clear selection
                </button>
              </div>
            </div>
          )}

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by name, email, or company..." 
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <select 
                  value={filters.subscriptionPlan}
                  onChange={(e) => handleFilterChange('subscriptionPlan', e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                >
                  <option value="">All Plans</option>
                  <option value="Business">Business</option>
                  <option value="Pro">Pro</option>
                  <option value="Starter">Starter</option>
                  <option value="Trial">Trial</option>
                </select>
                <select 
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                >
                  <option value="">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Trial">Trial</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Expired">Expired</option>
                </select>
                <button 
                  type="submit"
                  className="px-4 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#8b5cf6] transition text-sm font-medium flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search</span>
                </button>
                <button 
                  type="button"
                  onClick={handleClearFilters}
                  className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
                >
                  Clear
                </button>
                <button 
                  type="button"
                  onClick={handleExport}
                  className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm font-medium flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Export</span>
                </button>
              </div>
            </form>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input 
                        type="checkbox" 
                        checked={users.length > 0 && selectedUsers.length === users.length}
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" 
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Plan</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Pages</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Bots</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Messages</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Revenue</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Renewal</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <TableSkeleton />
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan="10" className="px-6 py-12 text-center">
                        <FontAwesomeIcon icon={faExclamationCircle} className="text-gray-400 text-4xl mb-4" />
                        <p className="text-gray-500">No users found</p>
                        <button 
                          onClick={handleClearFilters}
                          className="mt-2 text-[#6366f1] hover:underline"
                        >
                          Clear filters
                        </button>
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input 
                            type="checkbox" 
                            checked={selectedUsers.includes(user.id)}
                            onChange={() => handleBulkSelect(user.id)}
                            className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" 
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img 
                              src={user.avatarUrl || `https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${Math.floor(Math.random() * 9) + 1}.jpg`}
                              alt={user.firstName} 
                              className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                              <p className="font-medium text-gray-900">
                                {user.firstName} {user.lastName}
                              </p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                              {user.company && (
                                <p className="text-xs text-gray-400">{user.company}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPlanClass(user.subscriptionPlan)}`}>
                            {user.subscriptionPlan || 'N/A'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center text-sm">
                            <span className={`w-2 h-2 rounded-full mr-2 ${
                              user.status === USER_STATUS.ACTIVE ? 'bg-green-500' :
                              user.status === USER_STATUS.TRIAL ? 'bg-yellow-500' :
                              user.status === USER_STATUS.SUSPENDED ? 'bg-red-500' : 'bg-gray-500'
                            }`}></span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}>
                              {user.status || 'Unknown'}
                            </span>
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {user.facebookPages > 0 && (
                              <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                            )}
                            {user.instagramPages > 0 && (
                              <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                            )}
                            <span className="text-sm text-gray-600 font-medium">
                              {user.totalPages || user.pagesCount || 0}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {user.botsCount || user.bots || 0}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {formatNumber(user.totalMessages || user.messages || 0)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {formatCurrency(user.monthlyRevenue || user.revenue || 0)}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {user.renewalDate ? (
                            formatDate(user.renewalDate)
                          ) : user.status === USER_STATUS.TRIAL ? (
                            <span className="text-orange-600 font-medium">
                              {user.trialDaysLeft ? `${user.trialDaysLeft} days left` : 'Trial'}
                            </span>
                          ) : user.status === USER_STATUS.SUSPENDED ? (
                            <span className="text-red-600 font-medium">Payment Failed</span>
                          ) : (
                            'N/A'
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => handleUserSelect(user)}
                              className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition"
                              title="View Details"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button 
                              onClick={() => {
                                if (user.status === USER_STATUS.SUSPENDED) {
                                  handleActivateUser(user.id);
                                } else {
                                  handleSuspendUser(user.id);
                                }
                              }}
                              className={`p-2 rounded-lg transition ${
                                user.status === USER_STATUS.SUSPENDED
                                  ? 'text-green-600 hover:bg-green-100'
                                  : 'text-orange-600 hover:bg-orange-100'
                              }`}
                              title={user.status === USER_STATUS.SUSPENDED ? 'Activate' : 'Suspend'}
                            >
                              {user.status === USER_STATUS.SUSPENDED ? (
                                <FontAwesomeIcon icon={faCheckCircle} />
                              ) : (
                                <FontAwesomeIcon icon={faPauseCircle} />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-500">
                  Showing {((pagination.page - 1) * pagination.pageSize) + 1} to {Math.min(pagination.page * pagination.pageSize, pagination.totalCount)} of {pagination.totalCount} users
                </p>
                <select 
                  value={pagination.pageSize}
                  onChange={(e) => setPagination(prev => ({ ...prev, pageSize: parseInt(e.target.value), page: 1 }))}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                >
                  <option value="8">8 per page</option>
                  <option value="20">20 per page</option>
                  <option value="50">50 per page</option>
                  <option value="100">100 per page</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FontAwesomeIcon icon={faChevronDown} className="mr-1 rotate-90" />
                  Previous
                </button>
                
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  let pageNum;
                  if (pagination.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (pagination.page <= 3) {
                    pageNum = i + 1;
                  } else if (pagination.page >= pagination.totalPages - 2) {
                    pageNum = pagination.totalPages - 4 + i;
                  } else {
                    pageNum = pagination.page - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1 border rounded-lg text-sm font-medium ${
                        pagination.page === pageNum
                          ? 'bg-[#6366f1] text-white border-[#6366f1]'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                {pagination.totalPages > 5 && pagination.page < pagination.totalPages - 2 && (
                  <>
                    <span className="px-3 py-1 text-sm text-gray-500">...</span>
                    <button
                      onClick={() => handlePageChange(pagination.totalPages)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {pagination.totalPages}
                    </button>
                  </>
                )}
                
                <button 
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1 -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* User Details Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedUser.avatarUrl || `https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${Math.floor(Math.random() * 9) + 1}.jpg`}
                  alt={selectedUser.firstName} 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedUser.firstName} {selectedUser.lastName}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  {selectedUser.company && (
                    <p className="text-xs text-gray-400 mt-1">{selectedUser.company}</p>
                  )}
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="p-6">
                {/* Form for editing user */}
                <form onSubmit={updateForm.handleSubmit} className="space-y-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={updateForm.values.firstName}
                        onChange={updateForm.handleChange}
                        onBlur={updateForm.handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${
                          updateForm.errors.firstName && updateForm.touched.firstName
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                      />
                      {updateForm.errors.firstName && updateForm.touched.firstName && (
                        <p className="mt-1 text-sm text-red-600">{updateForm.errors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={updateForm.values.lastName}
                        onChange={updateForm.handleChange}
                        onBlur={updateForm.handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${
                          updateForm.errors.lastName && updateForm.touched.lastName
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                      />
                      {updateForm.errors.lastName && updateForm.touched.lastName && (
                        <p className="mt-1 text-sm text-red-600">{updateForm.errors.lastName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role
                      </label>
                      <select
                        name="role"
                        value={updateForm.values.role}
                        onChange={updateForm.handleChange}
                        onBlur={updateForm.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                      >
                        <option value="">Select Role</option>
                        <option value="SuperAdmin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Guest">Guest</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subscription Plan
                      </label>
                      <select
                        name="subscriptionPlan"
                        value={updateForm.values.subscriptionPlan}
                        onChange={updateForm.handleChange}
                        onBlur={updateForm.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                      >
                        <option value="">Select Plan</option>
                        <option value="Business">Business</option>
                        <option value="Pro">Pro</option>
                        <option value="Starter">Starter</option>
                        <option value="Trial">Trial</option>
                        <option value="Free">Free</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={updateForm.values.isActive}
                        onChange={updateForm.handleChange}
                        className="w-5 h-5 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]"
                      />
                      <label className="ml-3 text-sm font-medium text-gray-700">
                        Active Account
                      </label>
                    </div>
                  </div>
                </form>

                {/* User Statistics */}
                {userStats && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">User Statistics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-[#6366f1] mb-1">
                          {formatNumber(userStats.totalPages || 0)}
                        </div>
                        <div className="text-xs text-gray-500">Pages</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {formatNumber(userStats.activeBots || 0)}
                        </div>
                        <div className="text-xs text-gray-500">Active Bots</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-[#ec4899] mb-1">
                          {formatNumber(userStats.totalMessages || 0)}
                        </div>
                        <div className="text-xs text-gray-500">Messages</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-[#8b5cf6] mb-1">
                          {formatCurrency(userStats.totalRevenue || 0)}
                        </div>
                        <div className="text-xs text-gray-500">Total Revenue</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <button
                      onClick={() => handleActivateUser(selectedUser.id)}
                      disabled={selectedUser.status === USER_STATUS.ACTIVE}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition ${
                        selectedUser.status === USER_STATUS.ACTIVE
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : 'bg-green-50 text-green-700 hover:bg-green-100'
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className="text-sm font-medium">Activate</span>
                    </button>
                    
                    <button
                      onClick={() => handleSuspendUser(selectedUser.id)}
                      disabled={selectedUser.status === USER_STATUS.SUSPENDED}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition ${
                        selectedUser.status === USER_STATUS.SUSPENDED
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                      }`}
                    >
                      <FontAwesomeIcon icon={faPauseCircle} />
                      <span className="text-sm font-medium">Suspend</span>
                    </button>
                    
                    <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span className="text-sm font-medium">Email User</span>
                    </button>
                    
                    <button
                      onClick={updateForm.handleSubmit}
                      disabled={isUpdating || !updateForm.dirty}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition ${
                        isUpdating || !updateForm.dirty
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:opacity-90'
                      }`}
                    >
                      {isUpdating ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                          <span className="text-sm font-medium">Saving...</span>
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span className="text-sm font-medium">Save Changes</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                User ID: <span className="font-mono">{selectedUser.id}</span>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faDollarSign,
  faRobot,
  faComments as faCommentsSolid,
  faCheckCircle,
  faRotate,
  faPauseCircle,
  faEnvelope,
  faEdit,
  faSave,
  faTimes,
  faFacebook,
  faInstagram
} from '@fortawesome/free-solid-svg-icons'
import { formatCurrency, formatDate } from '@/utils/formatters'
import { showAlert } from '@/utils/sweetAlert'
import { faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

export default function UserModal({ 
  isOpen, 
  onClose, 
  user, 
  loading, 
  onUpdate, 
  onSuspend, 
  onActivate 
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        companyName: user.companyName || '',
        subscriptionPlan: user.subscriptionPlan || '',
        role: user.role || '',
        status: user.status || '',
        renewalDate: user.renewalDate || ''
      })
    }
  }, [user])

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    if (!user) return
    
    setSaving(true)
    try {
      await onUpdate(user.id, formData)
      setIsEditing(false)
      showAlert.success('User updated successfully')
    } catch (error) {
      showAlert.error('Failed to update user')
    } finally {
      setSaving(false)
    }
  }

  const handleSuspend = async () => {
    if (!user) return
    
    try {
      await onSuspend(user.id, 'Manual suspension by admin')
      showAlert.success('User suspended successfully')
      onClose()
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const handleActivate = async () => {
    if (!user) return
    
    try {
      await onActivate(user.id)
      showAlert.success('User activated successfully')
      onClose()
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'green'
      case 'trial': return 'yellow'
      case 'suspended': return 'red'
      case 'expired': return 'gray'
      default: return 'gray'
    }
  }

  const getPlanColor = (plan) => {
    switch (plan?.toLowerCase()) {
      case 'business': return 'purple'
      case 'pro': return 'blue'
      case 'starter': return 'gray'
      case 'trial': return 'yellow'
      default: return 'gray'
    }
  }

  const statusColor = getStatusColor(user?.status)
  const planColor = getPlanColor(user?.subscriptionPlan)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <img 
              src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.firstName || user?.email || '')}&background=6366f1&color=fff`}
              alt="" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              {isEditing ? (
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-3 py-1 border border-gray-300 rounded text-sm w-full"
                    placeholder="Email"
                  />
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                  <p className="text-xs text-gray-400 mt-1">{user?.companyName}</p>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                  disabled={saving}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition disabled:opacity-50"
                >
                  <FontAwesomeIcon icon={faSave} className="mr-2" />
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition"
                  title="Edit User"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-6">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-[#6366f1] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p className="text-sm text-gray-500">Loading user details...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className={`rounded-lg p-6 text-white ${
                    planColor === 'purple' ? 'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]' :
                    planColor === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    planColor === 'yellow' ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                    'bg-gradient-to-br from-gray-500 to-gray-600'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <FontAwesomeIcon icon={faDollarSign} className="text-3xl opacity-80" />
                      <span className={`text-xs px-2 py-1 rounded ${
                        statusColor === 'green' ? 'bg-green-500 text-white' :
                        statusColor === 'yellow' ? 'bg-yellow-500 text-white' :
                        statusColor === 'red' ? 'bg-red-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {user?.status || '--'}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-1">
                      {formatCurrency(user?.monthlyRevenue || 0)}
                    </h4>
                    {isEditing ? (
                      <select
                        name="subscriptionPlan"
                        value={formData.subscriptionPlan}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-3 py-1 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-sm"
                      >
                        <option value="">Select Plan</option>
                        <option value="Business">Business</option>
                        <option value="Pro">Pro</option>
                        <option value="Starter">Starter</option>
                        <option value="Trial">Trial</option>
                      </select>
                    ) : (
                      <p className="text-sm opacity-80">{user?.subscriptionPlan || '--'}</p>
                    )}
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <FontAwesomeIcon icon={faRobot} className="text-3xl text-[#6366f1]" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {user?.activeBots || 0}
                    </h4>
                    <p className="text-sm text-gray-500">Active Bots</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <FontAwesomeIcon icon={faCommentsSolid} className="text-3xl text-[#ec4899]" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {user?.totalMessages ? user.totalMessages.toLocaleString() : '0'}
                    </h4>
                    <p className="text-sm text-gray-500">Total Messages</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">User ID</span>
                        <span className="text-sm font-medium text-gray-900">
                          {user?.id ? `#${user.id.substring(0, 8)}` : '--'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Joined</span>
                        <span className="text-sm font-medium text-gray-900">
                          {user?.createdAt ? formatDate(user.createdAt) : '--'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Last Active</span>
                        <span className="text-sm font-medium text-gray-900">
                          {user?.lastActive ? formatDate(user.lastActive) : '--'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Renewal Date</span>
                        {isEditing ? (
                          <input
                            type="date"
                            name="renewalDate"
                            value={formData.renewalDate}
                            onChange={handleInputChange}
                            className="px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        ) : (
                          <span className="text-sm font-medium text-gray-900">
                            {user?.renewalDate ? formatDate(user.renewalDate) : '--'}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Status</span>
                        {isEditing ? (
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="px-2 py-1 border border-gray-300 rounded text-sm"
                          >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Trial">Trial</option>
                            <option value="Suspended">Suspended</option>
                            <option value="Expired">Expired</option>
                          </select>
                        ) : (
                          <span className="text-sm font-medium text-gray-900">{user?.status || '--'}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Connected Pages</h4>
                    <div className="space-y-3">
                      {user?.connectedPages && user.connectedPages > 0 ? (
                        <>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-xl" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Facebook Page</p>
                                <p className="text-xs text-gray-500">Connected</p>
                              </div>
                            </div>
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FontAwesomeIcon icon={faInstagramSquare} className="text-pink-600 text-xl" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Instagram</p>
                                <p className="text-xs text-gray-500">Connected</p>
                              </div>
                            </div>
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          </div>
                        </>
                      ) : (
                        <p className="text-sm text-gray-500 text-center py-4">No connected pages</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {user?.status === 'Suspended' ? (
                      <button
                        onClick={handleActivate}
                        className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition"
                      >
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className="text-sm font-medium">Activate</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleSuspend}
                        className="flex items-center justify-center space-x-2 px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition"
                      >
                        <FontAwesomeIcon icon={faPauseCircle} />
                        <span className="text-sm font-medium">Suspend</span>
                      </button>
                    )}
                    <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition">
                      <FontAwesomeIcon icon={faRotate} />
                      <span className="text-sm font-medium">Renew</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span className="text-sm font-medium">Email User</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition">
                      <FontAwesomeIcon icon={faTimes} />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Close
          </button>
          <div className="flex space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-6 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </>
            ) : (
              <button className="px-6 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg hover:opacity-90 transition font-medium">
                View Full Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
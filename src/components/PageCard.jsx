import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSync,
  faGear,
  faTrash,
  faShieldHalved,
  faLink,
  faClock,
  faEllipsisVertical,
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import  showAlert  from '@/utils/sweetAlert'

const PageCard = ({ page, onUpdate, onDelete, onSync, onReconnect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getStatusConfig = (status) => {
    switch (status) {
      case 'active':
        return {
          color: 'bg-green-100',
          textColor: 'text-green-700',
          dotColor: 'bg-green-500',
          label: 'Active',
        };
      case 'warning':
        return {
          color: 'bg-yellow-100',
          textColor: 'text-yellow-700',
          dotColor: 'bg-yellow-500',
          label: 'Warning',
        };
      case 'error':
        return {
          color: 'bg-red-100',
          textColor: 'text-red-700',
          dotColor: 'bg-red-500',
          label: 'Error',
        };
      default:
        return {
          color: 'bg-gray-100',
          textColor: 'text-gray-700',
          dotColor: 'bg-gray-500',
          label: 'Unknown',
        };
    }
  };

  const getPlatformConfig = (platform) => {
    switch (platform) {
      case 'facebook':
        return {
          icon: faFacebook,
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-100',
          name: 'Facebook Page',
          buttonColor: 'bg-[#6366F1] hover:bg-indigo-700',
        };
      case 'instagram':
        return {
          icon: faInstagram,
          iconColor: 'text-pink-600',
          iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
          name: 'Instagram Business',
          buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
        };
      default:
        return {
          icon: faGlobe,
          iconColor: 'text-gray-600',
          iconBg: 'bg-gray-100',
          name: 'Social Page',
          buttonColor: 'bg-gray-600 hover:bg-gray-700',
        };
    }
  };

  const status = getStatusConfig(page.status);
  const platform = getPlatformConfig(page.platform);

  const handleSync = async () => {
    try {
      await onSync(page.id, { pageId: page.id, forceSync: true });
    } catch (error) {
      console.error('Sync failed:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(page.id);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  const handleReconnect = async () => {
    try {
      await onReconnect(page.id);
    } catch (error) {
      console.error('Reconnect failed:', error);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-14 h-14 ${platform.iconBg} rounded-lg flex items-center justify-center mr-4`}>
            <FontAwesomeIcon icon={platform.icon} className={`${platform.iconColor} text-2xl`} />
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A]">{page.name}</h3>
            <p className="text-sm text-gray-500">{platform.name}</p>
          </div>
        </div>
        <span className={`px-3 py-1 ${status.color} ${status.textColor} text-xs font-semibold rounded-full flex items-center`}>
          <span className={`w-2 h-2 ${status.dotColor} rounded-full mr-2`}></span>
          {status.label}
        </span>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
        <div>
          <div className="text-xs text-gray-500 mb-1">Followers</div>
          <div className="font-bold text-[#0F172A]">
            {page.followers?.toLocaleString() || '--'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Messages</div>
          <div className="font-bold text-[#0F172A]">
            {page.messages?.toLocaleString() || '--'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">
            {page.metricLabel || 'Metric'}
          </div>
          <div className="font-bold text-[#0F172A]">
            {page.metric || '--'}
          </div>
        </div>
      </div>

      {/* Status Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 flex items-center">
            <i className="fas fa-signal text-gray-400 mr-2"></i>
            Connection Status
          </span>
          <span className={`font-semibold ${
            page.connectionStatus === 'Healthy' ? 'text-green-600' :
            page.connectionStatus === 'Disconnected' ? 'text-red-600' :
            'text-gray-700'
          }`}>
            {page.connectionStatus || 'Unknown'}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 flex items-center">
            <i className="fas fa-shield-alt text-gray-400 mr-2"></i>
            Permissions
          </span>
          <span className={`font-semibold ${
            page.permissions === 'All Granted' ? 'text-green-600' :
            page.permissions === 'Limited' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {page.permissions || 'Unknown'}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" />
            Last Synced
          </span>
          <span className="font-semibold text-gray-700">
            {page.lastSynced || 'Never'}
          </span>
        </div>
      </div>

      {/* Warning/Error Messages */}
      {page.status === 'warning' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <p className="text-xs text-yellow-800">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
            Some permissions need to be re-granted for full functionality
          </p>
        </div>
      )}

      {page.status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <p className="text-xs text-red-800">
            <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
            Connection lost. Please reconnect this account to resume automation
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {page.status === 'active' ? (
          <>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition">
              <FontAwesomeIcon icon={faGear} className="mr-2" />Settings
            </button>
            <button
              onClick={handleSync}
              className={`flex-1 ${platform.buttonColor} text-white px-4 py-2 rounded-lg font-medium transition`}
            >
              <FontAwesomeIcon icon={faSync} className="mr-2" />Refresh
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        ) : page.status === 'warning' ? (
          <>
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition">
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />Fix Permissions
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Sync Now
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Disconnect
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleReconnect}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />Reconnect
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PageCard;
'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faPen,
  faChartSimple,
  faComments,
  faClock,
  faCopy,
  faPlay,
  faPause,
  faTrash,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { showAlert } from '@/utils/sweetAlert';

const BotCard = ({ bot, onEdit, onStats, onDuplicate, onStatusChange, onDelete, isLoading = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);

  // الحماية من undefined bot
  if (!bot) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-4"></div>
        <div className="flex space-x-2">
          <div className="flex-1 h-10 bg-gray-200 rounded"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  // القيم الافتراضية للحماية من undefined properties
  const botData = {
    id: bot.id || `bot-${Date.now()}`,
    name: bot.name || 'Unnamed Bot',
    description: bot.description || 'No description available',
    status: bot.status?.toLowerCase() || 'draft',
    conversations: bot.conversations || bot.conversationCount || 0,
    updated: bot.updated || bot.updatedAt || bot.createdAt || 'Never',
    platforms: bot.platforms || bot.pageIds || [],
    icon: bot.icon || '🤖',
    iconBg: bot.iconBg || 'from-indigo-500 to-indigo-600',
  };

  const getStatusConfig = (status) => {
    const statusValue = status || 'draft';
    
    switch(statusValue) {
      case 'active':
        return {
          text: 'Active',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          dotColor: 'bg-green-600',
          icon: faPlay,
          actionText: 'Pause'
        };
      case 'draft':
        return {
          text: 'Draft',
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
          dotColor: 'bg-gray-400',
          icon: faPause,
          actionText: 'Activate'
        };
      case 'paused':
        return {
          text: 'Paused',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          dotColor: 'bg-yellow-600',
          icon: faPause,
          actionText: 'Activate'
        };
      default:
        return {
          text: 'Inactive',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          dotColor: 'bg-red-600',
          icon: faPause,
          actionText: 'Activate'
        };
    }
  };

  const getPlatformIcon = (platformId) => {
    if (!platformId) return faFacebook;
    
    const platform = String(platformId).toLowerCase();
    if (platform.includes('facebook')) return faFacebook;
    if (platform.includes('instagram')) return faInstagram;
    return faFacebook;
  };

  const getPlatformColor = (platformId) => {
    if (!platformId) return 'bg-blue-600';
    
    const platform = String(platformId).toLowerCase();
    if (platform.includes('facebook')) return 'bg-blue-600';
    if (platform.includes('instagram')) return 'bg-gradient-to-br from-purple-600 to-pink-600';
    return 'bg-gray-600';
  };

  const getIconConfig = (botName) => {
    if (!botName) return { bg: 'from-indigo-500 to-indigo-600', icon: '🤖' };
    
    const nameLower = botName.toLowerCase();
    
    if (nameLower.includes('commerce') || nameLower.includes('store') || nameLower.includes('shop')) {
      return { bg: 'from-blue-500 to-blue-600', icon: '🛒' };
    }
    if (nameLower.includes('real') || nameLower.includes('estate') || nameLower.includes('property')) {
      return { bg: 'from-purple-500 to-purple-600', icon: '🏠' };
    }
    if (nameLower.includes('appointment') || nameLower.includes('booking') || nameLower.includes('schedule')) {
      return { bg: 'from-pink-500 to-pink-600', icon: '📅' };
    }
    if (nameLower.includes('support') || nameLower.includes('help') || nameLower.includes('customer')) {
      return { bg: 'from-green-500 to-green-600', icon: '🎧' };
    }
    if (nameLower.includes('promotion') || nameLower.includes('marketing') || nameLower.includes('campaign')) {
      return { bg: 'from-orange-500 to-orange-600', icon: '💰' };
    }
    if (nameLower.includes('lead') || nameLower.includes('qualification')) {
      return { bg: 'from-teal-500 to-teal-600', icon: '👤' };
    }
    
    return { bg: 'from-indigo-500 to-indigo-600', icon: '🤖' };
  };

  const formatTimeAgo = (timestamp) => {
    if (!timestamp || timestamp === 'Never') return 'Never updated';
    
    try {
      const now = new Date();
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return 'Invalid date';
      
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins} mins ago`;
      if (diffHours < 24) return `${diffHours} hours ago`;
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Recently';
    }
  };

  const handleStatusChange = async () => {
    setLocalLoading(true);
    const newStatus = botData.status === 'active' ? 'paused' : 'active';
    try {
      await onStatusChange(botData.id, newStatus);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Status change failed:', error);
    } finally {
      setLocalLoading(false);
    }
  };

  const handleDuplicate = async () => {
    setLocalLoading(true);
    try {
      await onDuplicate(botData.id);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Duplicate failed:', error);
    } finally {
      setLocalLoading(false);
    }
  };

  const handleDelete = async () => {
    setLocalLoading(true);
    try {
      await onDelete(botData.id);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setLocalLoading(false);
    }
  };

  const iconConfig = getIconConfig(botData.name);
  const statusConfig = getStatusConfig(botData.status);

  if (isLoading || localLoading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-4"></div>
        <div className="flex space-x-2">
          <div className="flex-1 h-10 bg-gray-200 rounded"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${iconConfig.bg} rounded-lg flex items-center justify-center text-white text-xl`}>
            {iconConfig.icon}
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-xs font-semibold ${statusConfig.color} ${statusConfig.bgColor} px-2 py-1 rounded-full flex items-center`}>
              <span className={`w-1.5 h-1.5 ${statusConfig.dotColor} rounded-full mr-1.5`}></span>
              {statusConfig.text}
            </span>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
                disabled={localLoading}
              >
                {localLoading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                ) : (
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                )}
              </button>
              
              {isMenuOpen && !localLoading && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    onClick={handleStatusChange}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <FontAwesomeIcon icon={statusConfig.icon} className="mr-2" />
                    {statusConfig.actionText}
                  </button>
                  <button
                    onClick={handleDuplicate}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                    Duplicate Bot
                  </button>
                  <hr className="my-1 border-gray-200" />
                  <button
                    onClick={handleDelete}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Delete Bot
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{botData.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">{botData.description}</p>
        
        {/* Stats */}
        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComments} className="mr-1.5" />
            <span>{botData.conversations.toLocaleString()} chats</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-1.5" />
            <span>{formatTimeAgo(botData.updated)}</span>
          </div>
        </div>

        {/* Platforms */}
        <div className="flex items-center space-x-2 mb-4">
          {botData.platforms && botData.platforms.slice(0, 3).map((platformId, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-6 h-6 ${getPlatformColor(platformId)} rounded flex items-center justify-center`}>
                <FontAwesomeIcon icon={getPlatformIcon(platformId)} className="text-white text-xs" />
              </div>
            </div>
          ))}
          {botData.platforms && botData.platforms.length > 3 && (
            <span className="text-xs text-gray-500">+{botData.platforms.length - 3} more</span>
          )}
          <span className="text-xs text-gray-500">
            {botData.platforms?.length || 0} {botData.platforms?.length === 1 ? 'page' : 'pages'} connected
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onEdit(botData)}
            className="flex-1 bg-indigo-50 text-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition text-sm"
          >
            <FontAwesomeIcon icon={faPen} className="mr-2" />Edit
          </button>
          <button
            onClick={() => onStats(botData)}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition text-sm"
          >
            <FontAwesomeIcon icon={faChartSimple} className="mr-2" />Stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
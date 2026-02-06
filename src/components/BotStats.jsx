'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faCircleCheck,
  faComments,
  faGaugeHigh,
  faChartLine,
  faUserCheck,
  faClock,
  faMessage,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const BotStats = ({ stats, isLoading }) => {
  const formatNumber = (num) => {
    if (num === undefined || num === null || isNaN(num)) return '0';
    
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  // إحصائيات افتراضية في حالة عدم وجود بيانات
  const defaultStats = {
    totalBots: 0,
    activeBots: 0,
    conversationsToday: 0,
    responseRate: 0,
    avgResponseTime: 2.5,
    userSatisfaction: 0,
    messagesProcessed: 0,
    monthlyGrowth: 0
  };

  const actualStats = { ...defaultStats, ...stats };

  const statCards = [
    {
      id: 'total-bots',
      value: formatNumber(actualStats.totalBots),
      label: 'Total Bots',
      change: actualStats.monthlyGrowth > 0 ? `+${actualStats.monthlyGrowth}%` : '0%',
      changeColor: actualStats.monthlyGrowth > 0 ? 'text-green-600' : 'text-gray-600',
      bgColor: 'bg-indigo-100',
      icon: faRobot,
      iconColor: 'text-indigo-600'
    },
    {
      id: 'active-bots',
      value: formatNumber(actualStats.activeBots),
      label: 'Active Bots',
      change: actualStats.activeBots > 0 ? 'Active' : 'None',
      changeColor: actualStats.activeBots > 0 ? 'text-green-600' : 'text-gray-600',
      bgColor: 'bg-green-100',
      icon: faCircleCheck,
      iconColor: 'text-green-600'
    },
    {
      id: 'conversations',
      value: formatNumber(actualStats.conversationsToday),
      label: 'Conversations Today',
      change: actualStats.conversationsToday > 0 ? '+Active' : 'No data',
      changeColor: actualStats.conversationsToday > 0 ? 'text-blue-600' : 'text-gray-600',
      bgColor: 'bg-purple-100',
      icon: faComments,
      iconColor: 'text-purple-600'
    },
    {
      id: 'response-rate',
      value: `${Math.round(actualStats.responseRate)}%`,
      label: 'Response Rate',
      change: actualStats.responseRate > 0 ? 'Good' : 'No data',
      changeColor: actualStats.responseRate > 50 ? 'text-green-600' : 'text-yellow-600',
      bgColor: 'bg-pink-100',
      icon: faGaugeHigh,
      iconColor: 'text-pink-600'
    }
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {statCards.map((stat) => (
        <div key={stat.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <FontAwesomeIcon icon={stat.icon} className={`${stat.iconColor} text-xl`} />
            </div>
            <span className={`text-xs font-semibold ${stat.changeColor} ${stat.changeColor.replace('text', 'bg')}50 px-2 py-1 rounded-full`}>
              {stat.change}
            </span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default BotStats;
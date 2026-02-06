import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faSync,
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
  faInfoCircle,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

const ActivityLogs = ({ logs, isLoading, onRefresh }) => {
  const getLogIcon = (type) => {
    switch (type) {
      case 'success': return faCheckCircle
      case 'warning': return faExclamationTriangle
      case 'error': return faTimesCircle
      default: return faInfoCircle
    }
  }

  const getLogIconColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-500'
      case 'warning': return 'text-yellow-500'
      case 'error': return 'text-red-500'
      default: return 'text-blue-500'
    }
  }

  const getLogBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100'
      case 'warning': return 'bg-yellow-100'
      case 'error': return 'bg-red-100'
      default: return 'bg-blue-100'
    }
  }

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return 'Just now'
    
    const now = new Date()
    const last = new Date(timestamp)
    const diffMs = now - last
    const diffMins = Math.floor(diffMs / (1000 * 60))
    
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins} mins ago`
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)} hours ago`
    return `${Math.floor(diffMins / 1440)} days ago`
  }

  const getFilteredLogs = () => {
    return logs.slice(0, 10) // عرض آخر 10 سجلات فقط
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <p className="text-sm text-gray-500 mt-1">
              Real-time updates and connection events
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FontAwesomeIcon 
                icon={isLoading ? faSpinner : faSync} 
                className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} 
              />
              Refresh
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center">
              View All
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <FontAwesomeIcon icon={faSpinner} className="text-3xl text-blue-500 animate-spin mb-4" />
            <p className="text-gray-600">Loading activity logs...</p>
          </div>
        ) : getFilteredLogs().length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No activity yet</h3>
            <p className="text-gray-500">Activity logs will appear here as you connect and manage pages</p>
          </div>
        ) : (
          <div className="space-y-4">
            {getFilteredLogs().map((log) => (
              <div
                key={log.id}
                className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
              >
                <div
                  className={`w-10 h-10 ${getLogBgColor(log.type)} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}
                >
                  <FontAwesomeIcon
                    icon={getLogIcon(log.type)}
                    className={`text-lg ${getLogIconColor(log.type)}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-medium text-gray-900 truncate">{log.title}</h4>
                    <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                      {formatTimeAgo(log.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{log.description}</p>
                  
                  {log.details && (
                    <div className="mt-2">
                      {Object.entries(log.details).map(([key, value]) => (
                        <div key={key} className="text-xs text-gray-500">
                          <span className="font-medium">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivityLogs
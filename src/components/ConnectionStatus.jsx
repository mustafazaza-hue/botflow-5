import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCheckCircle, faExclamationTriangle, faTimesCircle, faSync } from '@fortawesome/free-solid-svg-icons'

const ConnectionStatus = ({ stats, lastChecked, isLoading }) => {
  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return 'Never'
    
    const now = new Date()
    const last = new Date(timestamp)
    const diffMs = now - last
    const diffMins = Math.floor(diffMs / (1000 * 60))
    
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins} mins ago`
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)} hours ago`
    return `${Math.floor(diffMins / 1440)} days ago`
  }

  const getHealthPercentage = () => {
    if (stats.total === 0) return 100
    return Math.round((stats.healthy / stats.total) * 100)
  }

  const healthPercentage = getHealthPercentage()
  
  const getHealthStatus = () => {
    if (stats.total === 0) return 'No pages connected'
    if (healthPercentage >= 90) return 'Excellent'
    if (healthPercentage >= 70) return 'Good'
    if (healthPercentage >= 50) return 'Fair'
    return 'Poor'
  }

  const getStatusColor = () => {
    if (stats.total === 0) return 'bg-gray-100 text-gray-700'
    if (healthPercentage >= 90) return 'bg-green-100 text-green-700'
    if (healthPercentage >= 70) return 'bg-blue-100 text-blue-700'
    if (healthPercentage >= 50) return 'bg-yellow-100 text-yellow-700'
    return 'bg-red-100 text-red-700'
  }

  return (
    <div className="mb-6 bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start">
          <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 text-xl mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Connection Health Status</h3>
            <p className="text-sm text-gray-500">
              Overall health: <span className={`font-semibold ${getStatusColor().split(' ')[1]}`}>
                {getHealthStatus()}
              </span>
              {lastChecked && ` • Last checked: ${formatTimeAgo(lastChecked)}`}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Healthy */}
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mx-auto mb-1">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg" />
            </div>
            <div className="text-2xl font-bold text-green-700">{stats.healthy}</div>
            <div className="text-xs text-gray-500">Healthy</div>
          </div>

          {/* Warning */}
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full mx-auto mb-1">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-600 text-lg" />
            </div>
            <div className="text-2xl font-bold text-yellow-700">{stats.warning}</div>
            <div className="text-xs text-gray-500">Needs Attention</div>
          </div>

          {/* Error */}
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full mx-auto mb-1">
              <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 text-lg" />
            </div>
            <div className="text-2xl font-bold text-red-700">{stats.error}</div>
            <div className="text-xs text-gray-500">Disconnected</div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={() => window.location.reload()}
            disabled={isLoading}
            className={`p-3 rounded-lg border transition ${
              isLoading
                ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <FontAwesomeIcon 
              icon={faSync} 
              className={`text-lg ${isLoading ? 'animate-spin' : ''}`} 
            />
          </button>
        </div>
      </div>

      {/* Health Bar */}
      {stats.total > 0 && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Health Score: {healthPercentage}%</span>
            <span>{stats.healthy} of {stats.total} pages healthy</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                healthPercentage >= 90 ? 'bg-green-500' :
                healthPercentage >= 70 ? 'bg-blue-500' :
                healthPercentage >= 50 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{ width: `${healthPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ConnectionStatus
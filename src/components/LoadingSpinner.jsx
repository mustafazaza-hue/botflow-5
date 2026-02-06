// src/components/LoadingSpinner.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = ({ message = 'Loading...', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <FontAwesomeIcon 
        icon={faSpinner} 
        className={`text-[#6366F1] ${sizeClasses[size]} animate-spin mb-4`} 
      />
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
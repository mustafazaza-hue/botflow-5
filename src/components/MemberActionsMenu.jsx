'use client'

import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEllipsisVertical, 
  faUserPen, 
  faTrash, 
  faEnvelope, 
  faEye, 
  faCheck, 
  faUserShield,
  faGear,
  faBan,
  faKey
} from '@fortawesome/free-solid-svg-icons'
import { showAlert } from '@/utils/sweetAlert'
import { ROLE_CONFIG } from '@/api/team'

const MemberActionsMenu = ({ member, roles, onUpdateRole, onDeleteMember, onResendInvite }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleUpdateRole = async (newRole) => {
    try {
      await onUpdateRole(member.id, newRole)
      setIsOpen(false)
    } catch (error) {
      console.error('Error updating role:', error)
    }
  }

  const handleDelete = async () => {
    try {
      await onDeleteMember(member.id)
      setIsOpen(false)
    } catch (error) {
      console.error('Error deleting member:', error)
    }
  }

  const handleResendInviteClick = async () => {
    if (onResendInvite) {
      try {
        await onResendInvite()
        setIsOpen(false)
      } catch (error) {
        console.error('Error resending invite:', error)
      }
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition"
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">Member Actions</p>
            <p className="text-xs text-gray-500 truncate">{member.email}</p>
          </div>
          
          {/* Role Change Section */}
          {member.status !== 'Pending' && roles.length > 0 && (
            <>
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Change Role
                </p>
                <div className="space-y-1">
                  {roles.map((role) => {
                    const roleConfig = ROLE_CONFIG[role.name];
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleUpdateRole(role.name)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition flex items-center justify-between ${
                          member.role === role.name 
                            ? 'bg-indigo-50 text-indigo-700' 
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          {roleConfig && (
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center mr-2 ${
                              member.role === role.name 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                                : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600'
                            }`}>
                              <FontAwesomeIcon icon={roleConfig.icon} className="text-xs" />
                            </span>
                          )}
                          {role.name}
                        </div>
                        {member.role === role.name && (
                          <FontAwesomeIcon icon={faCheck} className="text-indigo-600 text-sm" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="border-t border-gray-100 mx-4"></div>
            </>
          )}

          {/* Other Actions */}
          <div className="py-2">
            {member.status === 'Pending' && onResendInvite && (
              <button
                onClick={handleResendInviteClick}
                className="w-full text-left px-4 py-2 text-sm text-amber-700 hover:bg-amber-50 transition flex items-center"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-amber-500" />
                Resend Invitation
              </button>
            )}

            {member.status !== 'Pending' && (
              <>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    showAlert.info('Member Details', `${member.name} - ${member.role}`)
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center"
                >
                  <FontAwesomeIcon icon={faEye} className="mr-3 text-gray-500" />
                  View Details
                </button>
                
                <button
                  onClick={() => {
                    setIsOpen(false)
                    // يمكن إضافة منطق إدارة الصلاحيات هنا
                    showAlert.warning('Permissions', 'Coming soon: Manage specific permissions')
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center"
                >
                  <FontAwesomeIcon icon={faKey} className="mr-3 text-gray-500" />
                  Manage Permissions
                </button>
              </>
            )}

            {/* Delete Button - لا تظهر للمالك أو للعضو نفسه */}
            {member.role !== 'Owner' && (
              <button
                onClick={handleDelete}
                className="w-full text-left px-4 py-2 text-sm text-rose-700 hover:bg-rose-50 transition flex items-center"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-3 text-rose-500" />
                Remove from Team
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MemberActionsMenu
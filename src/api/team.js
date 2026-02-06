import axiosInstance from "./client";
import { showAlert } from "../utils/sweetAlert";

export const teamApi = {
  // الحصول على جميع أعضاء الفريق
  getMembers: async () => {
    try {
      const response = await axiosInstance.get("/Team/members");
      console.log("✅ Team members fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching team members:", error);
      showAlert.error("Error", "Failed to load team members");
      throw error;
    }
  },

  // الحصول على إحصائيات الفريق
  getStats: async () => {
    try {
      const response = await axiosInstance.get("/Team/stats");
      console.log("✅ Team stats fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching team stats:", error);
      throw error;
    }
  },

  // دعوة عضو جديد
  inviteMember: async (inviteData) => {
    try {
      showAlert.loading("Sending invitation...");
      const response = await axiosInstance.post("/Team/invite", inviteData);
      showAlert.close();
      showAlert.success("Success", "Invitation sent successfully");
      console.log("✅ Member invited:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("Error", error.response?.data?.message || "Failed to send invitation");
      console.error("❌ Error inviting member:", error);
      throw error;
    }
  },

  // تحديث دور العضو
  updateMemberRole: async (memberId, roleData) => {
    try {
      showAlert.loading("Updating role...");
      const response = await axiosInstance.put(`/Team/members/${memberId}/role`, roleData);
      showAlert.close();
      showAlert.success("Success", "Role updated successfully");
      console.log("✅ Member role updated:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("Error", error.response?.data?.message || "Failed to update role");
      console.error("❌ Error updating member role:", error);
      throw error;
    }
  },

  // حذف عضو
  deleteMember: async (memberId) => {
    try {
      const result = await showAlert.confirm(
        "Delete Member",
        "Are you sure you want to remove this member from the team?"
      );
      
      if (!result.isConfirmed) return null;
      
      showAlert.loading("Removing member...");
      const response = await axiosInstance.delete(`/Team/members/${memberId}`);
      showAlert.close();
      showAlert.success("Success", "Member removed successfully");
      console.log("✅ Member deleted:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("Error", error.response?.data?.message || "Failed to delete member");
      console.error("❌ Error deleting member:", error);
      throw error;
    }
  },

  // الحصول على سجل النشاطات
  getActivityLogs: async () => {
    try {
      const response = await axiosInstance.get("/Team/activity-logs");
      console.log("✅ Activity logs fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching activity logs:", error);
      throw error;
    }
  },

  // الحصول على الأدوار المتاحة
  getRoles: async () => {
    try {
      const response = await axiosInstance.get("/Team/roles");
      console.log("✅ Team roles fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching team roles:", error);
      throw error;
    }
  },

  // إعادة إرسال الدعوة
  resendInvite: async (inviteId) => {
    try {
      showAlert.loading("Resending invitation...");
      const response = await axiosInstance.post(`/Team/members/${inviteId}/resend-invite`);
      showAlert.close();
      showAlert.success("Success", "Invitation resent successfully");
      console.log("✅ Invite resent:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("Error", error.response?.data?.message || "Failed to resend invitation");
      console.error("❌ Error resending invite:", error);
      throw error;
    }
  },

  // الحصول على الدعوات المعلقة
  getPendingInvites: async () => {
    try {
      const response = await axiosInstance.get("/Team/pending-invites");
      console.log("✅ Pending invites fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching pending invites:", error);
      throw error;
    }
  }
};

// ألوان وأيقونات الأدوار متوافقة مع هوية النظام
export const ROLE_CONFIG = {
  'Owner': {
    color: 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-700 border border-purple-200',
    icon: 'faCrown',
    iconColor: 'text-purple-600',
    badgeColor: 'from-purple-500 to-purple-600'
  },
  'Admin': {
    color: 'bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 text-indigo-700 border border-indigo-200',
    icon: 'faUserShield',
    iconColor: 'text-indigo-600',
    badgeColor: 'from-indigo-500 to-indigo-600'
  },
  'Agent': {
    color: 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-700 border border-emerald-200',
    icon: 'faHeadset',
    iconColor: 'text-emerald-600',
    badgeColor: 'from-emerald-500 to-emerald-600'
  },
  'Viewer': {
    color: 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-700 border border-gray-200',
    icon: 'faEye',
    iconColor: 'text-gray-600',
    badgeColor: 'from-gray-500 to-gray-600'
  },
  'Manager': {
    color: 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-700 border border-amber-200',
    icon: 'faUserGear',
    iconColor: 'text-amber-600',
    badgeColor: 'from-amber-500 to-amber-600'
  }
};

// حالات الأعضاء
export const STATUS_CONFIG = {
  'Active': {
    color: 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 border border-green-200',
    dot: 'bg-gradient-to-r from-green-400 to-green-500',
    icon: 'faCircleCheck'
  },
  'Away': {
    color: 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-700 border border-yellow-200',
    dot: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
    icon: 'faClock'
  },
  'Offline': {
    color: 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-700 border border-gray-200',
    dot: 'bg-gradient-to-r from-gray-400 to-gray-500',
    icon: 'faCircleDot'
  },
  'Pending': {
    color: 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-700 border border-orange-200',
    dot: 'bg-gradient-to-r from-orange-400 to-orange-500',
    icon: 'faEnvelope'
  },
  'Busy': {
    color: 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-700 border border-red-200',
    dot: 'bg-gradient-to-r from-red-400 to-red-500',
    icon: 'faBellSlash'
  }
};

// ألوان النظام الأساسية
export const SYSTEM_COLORS = {
  primary: {
    gradient: 'from-[#6366F1] to-[#8B5CF6]',
    solid: '#6366F1',
    light: '#C7D2FE',
    dark: '#4F46E5'
  },
  secondary: {
    gradient: 'from-[#EC4899] to-[#F59E0B]',
    solid: '#EC4899',
    light: '#FBCFE8',
    dark: '#DB2777'
  },
  success: {
    gradient: 'from-green-500 to-emerald-500',
    solid: '#10B981',
    light: '#D1FAE5',
    dark: '#059669'
  },
  warning: {
    gradient: 'from-amber-500 to-orange-500',
    solid: '#F59E0B',
    light: '#FEF3C7',
    dark: '#D97706'
  },
  danger: {
    gradient: 'from-rose-500 to-pink-500',
    solid: '#EF4444',
    light: '#FEE2E2',
    dark: '#DC2626'
  },
  info: {
    gradient: 'from-sky-500 to-cyan-500',
    solid: '#0EA5E9',
    light: '#E0F2FE',
    dark: '#0284C7'
  }
};

// محارف الألوان للاستخدام
export const COLOR_SCHEME = {
  background: {
    primary: 'bg-gradient-to-br from-gray-50 to-white',
    secondary: 'bg-gradient-to-br from-indigo-50/50 to-purple-50/50',
    card: 'bg-white/95 backdrop-blur-sm',
    sidebar: 'bg-gradient-to-b from-gray-900 to-gray-800'
  },
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    inverse: 'text-white',
    accent: 'text-indigo-600'
  },
  border: {
    light: 'border-gray-200',
    medium: 'border-gray-300',
    accent: 'border-indigo-200'
  }
};
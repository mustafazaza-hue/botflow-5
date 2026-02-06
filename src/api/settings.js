import axiosInstance from "./client";
import { showAlert } from "../utils/sweetAlert";

export const settingsApi = {
  // الحصول على إعدادات الـ Workspace
  getWorkspaceSettings: async () => {
    try {
      const response = await axiosInstance.get("/Settings/workspace");
      console.log("✅ Workspace settings fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching workspace settings:", error);
      showAlert.error("خطأ", "فشل في تحميل إعدادات المساحة");
      throw error;
    }
  },

  // تحديث إعدادات الـ Workspace
  updateWorkspaceSettings: async (settingsData) => {
    try {
      showAlert.loading("جاري حفظ التغييرات...");
      const response = await axiosInstance.put("/Settings/workspace", settingsData);
      showAlert.close();
      showAlert.success("تم", "تم تحديث إعدادات المساحة بنجاح");
      console.log("✅ Workspace settings updated:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("خطأ", error.response?.data?.message || "فشل في تحديث الإعدادات");
      console.error("❌ Error updating workspace settings:", error);
      throw error;
    }
  },

  // رفع صورة الـ Logo
  uploadLogo: async (logoData) => {
    try {
      showAlert.loading("جاري رفع الشعار...");
      const response = await axiosInstance.post("/Settings/workspace/logo", logoData);
      showAlert.close();
      showAlert.success("تم", "تم رفع الشعار بنجاح");
      console.log("✅ Logo uploaded:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("خطأ", error.response?.data?.message || "فشل في رفع الشعار");
      console.error("❌ Error uploading logo:", error);
      throw error;
    }
  },

  // حذف صورة الـ Logo
  deleteLogo: async () => {
    try {
      const result = await showAlert.confirm(
        "حذف الشعار",
        "هل أنت متأكد من حذف الشعار؟"
      );
      
      if (!result.isConfirmed) return null;
      
      showAlert.loading("جاري حذف الشعار...");
      const response = await axiosInstance.delete("/Settings/workspace/logo");
      showAlert.close();
      showAlert.success("تم", "تم حذف الشعار بنجاح");
      console.log("✅ Logo deleted:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("خطأ", error.response?.data?.message || "فشل في حذف الشعار");
      console.error("❌ Error deleting logo:", error);
      throw error;
    }
  },

  // الحصول على إعدادات الإشعارات
  getNotificationSettings: async () => {
    try {
      const response = await axiosInstance.get("/Settings/notifications");
      console.log("✅ Notification settings fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching notification settings:", error);
      throw error;
    }
  },

  // تحديث إعدادات الإشعارات
  updateNotificationSettings: async (settingsData) => {
    try {
      showAlert.loading("جاري تحديث الإشعارات...");
      const response = await axiosInstance.put("/Settings/notifications", settingsData);
      showAlert.close();
      showAlert.success("تم", "تم تحديث إعدادات الإشعارات بنجاح");
      console.log("✅ Notification settings updated:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("خطأ", error.response?.data?.message || "فشل في تحديث الإشعارات");
      console.error("❌ Error updating notification settings:", error);
      throw error;
    }
  },

  // الحصول على اللغات المتاحة
  getLanguages: async () => {
    try {
      const response = await axiosInstance.get("/Settings/languages");
      console.log("✅ Languages fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching languages:", error);
      throw error;
    }
  },

  // الحصول على المناطق الزمنية
  getTimezones: async () => {
    try {
      const response = await axiosInstance.get("/Settings/timezones");
      console.log("✅ Timezones fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching timezones:", error);
      throw error;
    }
  },

  // حذف الـ Workspace
  deleteWorkspace: async (confirmation) => {
    try {
      const result = await showAlert.warning(
        "حذف المساحة",
        "هل أنت متأكد من حذف هذه المساحة؟ هذا الإجراء لا يمكن التراجع عنه."
      );
      
      if (!result.isConfirmed) return null;
      
      const confirmText = await Swal.fire({
        title: 'تأكيد الحذف',
        input: 'text',
        inputLabel: 'اكتب "delete" للتأكيد',
        inputPlaceholder: 'اكتب delete هنا',
        showCancelButton: true,
        confirmButtonText: 'حذف',
        cancelButtonText: 'إلغاء',
        inputValidator: (value) => {
          if (value !== 'delete') {
            return 'يجب كتابة "delete" للتأكيد';
          }
        }
      });
      
      if (!confirmText.isConfirmed) return null;
      
      showAlert.loading("جاري حذف المساحة...");
      const response = await axiosInstance.post("/Settings/workspace/delete", { confirmation: "delete" });
      showAlert.close();
      showAlert.success("تم", "تم حذف المساحة بنجاح");
      console.log("✅ Workspace deleted:", response.data);
      return response.data;
    } catch (error) {
      showAlert.close();
      showAlert.error("خطأ", error.response?.data?.message || "فشل في حذف المساحة");
      console.error("❌ Error deleting workspace:", error);
      throw error;
    }
  },

  // الحصول على معلومات الاشتراك
  getSubscription: async () => {
    try {
      const response = await axiosInstance.get("/Settings/subscription");
      console.log("✅ Subscription info fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching subscription info:", error);
      throw error;
    }
  }
};

// اللغات المدعومة
export const SUPPORTED_LANGUAGES = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇺🇸'
  },
  { 
    code: 'ar', 
    name: 'Arabic', 
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇸🇦'
  },
  { 
    code: 'es', 
    name: 'Spanish', 
    nativeName: 'Español',
    direction: 'ltr',
    flag: '🇪🇸'
  },
  { 
    code: 'fr', 
    name: 'French', 
    nativeName: 'Français',
    direction: 'ltr',
    flag: '🇫🇷'
  }
];

// المناطق الزمنية الشائعة
export const COMMON_TIMEZONES = [
  { value: 'UTC', label: 'UTC (GMT)', cities: ['London', 'Lisbon'] },
  { value: 'UTC+03:00', label: 'UTC +03:00', cities: ['Riyadh', 'Kuwait', 'Baghdad'] },
  { value: 'UTC+04:00', label: 'UTC +04:00', cities: ['Dubai', 'Muscat'] },
  { value: 'Africa/Cairo', label: 'Africa/Cairo', cities: ['Cairo'] },
  { value: 'Asia/Riyadh', label: 'Asia/Riyadh', cities: ['Riyadh', 'Dammam'] },
  { value: 'US/Eastern', label: 'Eastern Time (US)', cities: ['New York', 'Toronto'] },
  { value: 'US/Pacific', label: 'Pacific Time (US)', cities: ['Los Angeles', 'Vancouver'] }
];

// ألوان العلامة التجارية الافتراضية
export const DEFAULT_BRAND_COLOR = '#6366F1';

// استيراد Swal للإستخدام
import Swal from 'sweetalert2';
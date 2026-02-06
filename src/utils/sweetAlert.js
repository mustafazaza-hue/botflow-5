import Swal from 'sweetalert2'
import { getLanguage } from './i18n'

const getTranslations = () => {
  const lang = getLanguage();
  const translations = {
    en: {
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      confirm: 'Confirm',
      cancel: 'Cancel',
      loading: 'Loading...',
      yes: 'Yes',
      no: 'No',
      processing: 'Processing...'
    },
    ar: {
      success: 'تم',
      error: 'خطأ',
      warning: 'تحذير',
      confirm: 'تأكيد',
      cancel: 'إلغاء',
      loading: 'جاري التحميل...',
      yes: 'نعم',
      no: 'لا',
      processing: 'جاري المعالجة...'
    }
  };
  return translations[lang] || translations.en;
};

const showAlert = {
  success: (title, text = '', timer = 3000) => {
    const t = getTranslations();
    return Swal.fire({
      icon: 'success',
      title: title || t.success,
      text,
      timer,
      timerProgressBar: true,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
    })
  },

  error: (title, text = '', timer = 4000) => {
    const t = getTranslations();
    return Swal.fire({
      icon: 'error',
      title: title || t.error,
      text,
      timer,
      timerProgressBar: true,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
    })
  },

  warning: (title, text = '') => {
    const t = getTranslations();
    return Swal.fire({
      icon: 'warning',
      title: title || t.warning,
      text,
      showCancelButton: true,
      confirmButtonText: t.yes,
      cancelButtonText: t.cancel,
      reverseButtons: true,
      customClass: {
        confirmButton: 'bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg',
        cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg',
      },
    })
  },

  confirm: (title, text = '') => {
    const t = getTranslations();
    return Swal.fire({
      icon: 'question',
      title: title || t.confirm,
      text,
      showCancelButton: true,
      confirmButtonText: t.confirm,
      cancelButtonText: t.cancel,
      reverseButtons: true,
      customClass: {
        confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg',
        cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg',
      },
    })
  },

  loading: (title = 'Processing...') => {
    const t = getTranslations();
    Swal.fire({
      title: title === 'Processing...' ? t.processing : title,
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading()
      },
    })
  },

  close: () => {
    Swal.close()
  },
}

export { showAlert }
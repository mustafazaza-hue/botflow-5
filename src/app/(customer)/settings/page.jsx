'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faChevronDown, faUser, faLock, faShieldHalved,
  faBell, faGear, faGlobe, faUsers, faUserShield,
  faPlug, faWebhook, faCode, faChartPie, faCreditCard,
  faReceipt, faClockRotateLeft, faFileExport, faTrash,
  faArrowLeft, faUpload, faCopy, faArrowsRotate,
  faTriangleExclamation, faCrown, faPalette, faLanguage,
  faEnvelope, faDesktop, faChartBar, faSave, faCheck,
  faImage, faEarthAmericas, faClock, faSpinner,
  faWebAwesome
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect, useMemo } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { settingsApi, SUPPORTED_LANGUAGES, COMMON_TIMEZONES, DEFAULT_BRAND_COLOR } from '@/api/settings'
import { showAlert } from '@/utils/sweetAlert'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function SettingsPage() {
  const { t, currentLang } = useLanguage();
  const [activeSection, setActiveSection] = useState('workspace')
  const [loading, setLoading] = useState(true)
  const [workspaceSettings, setWorkspaceSettings] = useState(null)
  const [notificationSettings, setNotificationSettings] = useState(null)
  const [languages, setLanguages] = useState([])
  const [timezones, setTimezones] = useState([])
  const [logoPreview, setLogoPreview] = useState(null)
  const [subscriptionInfo, setSubscriptionInfo] = useState(null)

  // تحميل البيانات
  const loadData = async () => {
    try {
      setLoading(true)
      
      const [workspaceData, notificationData, languagesData, timezonesData, subscriptionData] = await Promise.all([
        settingsApi.getWorkspaceSettings(),
        settingsApi.getNotificationSettings(),
        settingsApi.getLanguages(),
        settingsApi.getTimezones(),
        settingsApi.getSubscription()
      ]);
      
      setWorkspaceSettings(workspaceData || {})
      setNotificationSettings(notificationData || {})
      
      // معالجة اللغات مع إضافة معرفات فريدة
      const processedLanguages = (languagesData || SUPPORTED_LANGUAGES).map((lang, index) => ({
        ...lang,
        id: lang.id || `lang-${lang.code}-${index}`
      }))
      setLanguages(processedLanguages)
      
      // معالجة المناطق الزمنية مع إضافة معرفات فريدة
      const processedTimezones = (timezonesData || COMMON_TIMEZONES).map((tz, index) => ({
        ...tz,
        id: tz.id || `tz-${tz.value || tz.label}-${index}`
      }))
      setTimezones(processedTimezones)
      
      setSubscriptionInfo(subscriptionData || {})
      
      // إذا كان هناك لوجو، قم بعمل معاينة
      if (workspaceData?.logoUrl) {
        setLogoPreview(workspaceData.logoUrl)
      }
      
    } catch (error) {
      console.error('Error loading settings data:', error)
      showAlert.error(t('خطأ'), t('فشل في تحميل بيانات الإعدادات'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // استخدام useMemo لإنشاء القوائم الثابتة
  const accountItems = useMemo(() => [
    { 
      id: 'profile', 
      label: t('profile'), 
      icon: faUserRegular 
    },
    { 
      id: 'password', 
      label: t('password'), 
      icon: faLock 
    },
    { 
      id: '2fa', 
      label: t('twoFactorAuth'), 
      icon: faShieldHalved 
    },
    { 
      id: 'notifications', 
      label: t('notifications'), 
      icon: faBellRegular 
    }
  ], [t]);

  const workspaceItems = useMemo(() => [
    { 
      id: 'general', 
      label: t('general'), 
      icon: faGear, 
      isActive: activeSection === 'workspace' 
    },
    { 
      id: 'language', 
      label: t('languageTimezone'), 
      icon: faGlobe 
    },
    { 
      id: 'team', 
      label: t('teamMembers'), 
      icon: faUsers 
    },
    { 
      id: 'roles', 
      label: t('rolesPermissions'), 
      icon: faUserShield 
    }
  ], [t, activeSection]);

  const integrationsItems = useMemo(() => [
    { 
      id: 'apps', 
      label: t('connectedApps'), 
      icon: faPlug 
    },
    { 
      id: 'webhooks', 
      label: t('webhooks'), 
      icon: faWebAwesome 
    },
    { 
      id: 'api', 
      label: t('apiKeys'), 
      icon: faCode 
    }
  ], [t]);

  const billingItems = useMemo(() => [
    { 
      id: 'plan', 
      label: t('currentPlan'), 
      icon: faChartPie 
    },
    { 
      id: 'payment', 
      label: t('paymentMethods'), 
      icon: faCreditCard 
    },
    { 
      id: 'invoices', 
      label: t('invoices'), 
      icon: faReceipt 
    }
  ], [t]);

  const advancedItems = useMemo(() => [
    { 
      id: 'logs', 
      label: t('activityLogs'), 
      icon: faClockRotateLeft 
    },
    { 
      id: 'export', 
      label: t('exportData'), 
      icon: faFileExport 
    },
    { 
      id: 'delete', 
      label: t('deleteWorkspace'), 
      icon: faTrash, 
      isDanger: true 
    }
  ], [t]);

  const sections = useMemo(() => [
    { 
      id: 'account', 
      title: t('account'), 
      items: accountItems 
    },
    { 
      id: 'workspace', 
      title: t('workspace'), 
      items: workspaceItems 
    },
    { 
      id: 'integrations', 
      title: t('integrations'), 
      items: integrationsItems 
    },
    { 
      id: 'billing', 
      title: t('billing'), 
      items: billingItems 
    },
    { 
      id: 'advanced', 
      title: t('advanced'), 
      items: advancedItems 
    }
  ], [t, accountItems, workspaceItems, integrationsItems, billingItems, advancedItems]);

  // نموذج إعدادات المساحة
  const workspaceForm = useFormik({
    initialValues: {
      name: workspaceSettings?.name || '',
      brandColor: workspaceSettings?.brandColor || DEFAULT_BRAND_COLOR,
      domain: workspaceSettings?.domain || '',
      timezone: workspaceSettings?.timezone || 'UTC+03:00',
      language: workspaceSettings?.language || currentLang
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required(t('اسم المساحة مطلوب')),
      brandColor: Yup.string().matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, t('تنسيق اللون غير صحيح')),
      domain: Yup.string().url(t('الرابط غير صحيح'))
    }),
    onSubmit: async (values) => {
      try {
        await settingsApi.updateWorkspaceSettings(values)
        await loadData()
      } catch (error) {
        console.error('Error updating workspace settings:', error)
      }
    }
  })

  // نموذج إعدادات الإشعارات
  const notificationForm = useFormik({
    initialValues: {
      emailNotifications: notificationSettings?.emailNotifications || true,
      pushNotifications: notificationSettings?.pushNotifications || true,
      weeklyReports: notificationSettings?.weeklyReports || false
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await settingsApi.updateNotificationSettings(values)
        await loadData()
      } catch (error) {
        console.error('Error updating notification settings:', error)
      }
    }
  })

  // رفع ملف اللوجو
  const handleLogoUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    // التحقق من حجم الملف
    if (file.size > 2 * 1024 * 1024) {
      showAlert.error(t('خطأ'), t('حجم الملف كبير جداً. الحد الأقصى 2MB'))
      return
    }

    // إنشاء معاينة
    const reader = new FileReader()
    reader.onload = (e) => {
      setLogoPreview(e.target.result)
    }
    reader.readAsDataURL(file)

    // تحويل الصورة إلى base64
    const base64Image = await convertFileToBase64(file)
    
    try {
      await settingsApi.uploadLogo({
        base64Image,
        fileName: file.name
      })
      await loadData()
    } catch (error) {
      console.error('Error uploading logo:', error)
    }
  }

  // حذف اللوجو
  const handleDeleteLogo = async () => {
    try {
      await settingsApi.deleteLogo()
      setLogoPreview(null)
      await loadData()
    } catch (error) {
      console.error('Error deleting logo:', error)
    }
  }

  // تحويل الملف إلى base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  // حذف المساحة
  const handleDeleteWorkspace = async () => {
    try {
      await settingsApi.deleteWorkspace('delete')
      // بعد الحذف، إعادة توجيه المستخدم
      window.location.href = '/'
    } catch (error) {
      console.error('Error deleting workspace:', error)
    }
  }

  // نسخ النطاق
  const handleCopyDomain = () => {
    navigator.clipboard.writeText(workspaceForm.values.domain || '')
    showAlert.success(t('تم'), t('تم نسخ النطاق'))
  }

  // تجديد النطاق
  const handleRegenerateDomain = () => {
    const randomId = Math.random().toString(36).substring(2, 8)
    workspaceForm.setFieldValue('domain', `workspace-${randomId}.botflow.app`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">{t('loadingSettings')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 h-screen overflow-y-auto fixed left-0 top-0">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </div>

            <div className="space-y-6">
              {sections.map((section, sectionIndex) => (
                <div key={`section-${section.id}-${sectionIndex}`} className="space-y-1">
                  <button 
                    className="flex items-center w-full text-left mb-3 text-[#0F172A] hover:bg-gray-50 rounded-lg p-2 transition"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`text-xs mr-3 text-gray-500 ${activeSection === section.id ? 'rotate-0' : '-rotate-90'} transition-transform`}
                    />
                    <span className="text-sm font-semibold">{section.title}</span>
                  </button>
                  
                  <div className="ml-8 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <button
                        key={`${section.id}-item-${item.id}-${itemIndex}`}
                        className={`flex items-center py-2 px-3 rounded-lg transition w-full text-left ${
                          item.isActive
                            ? 'bg-indigo-50 border-l-4 border-[#6366F1]'
                            : 'text-gray-700 hover:bg-gray-50'
                        } ${item.isDanger ? 'text-red-600 hover:text-red-700' : ''}`}
                        onClick={() => {
                          if (item.id === 'general') {
                            setActiveSection('workspace')
                          }
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={item.icon} 
                          className={`mr-3 w-5 text-center ${
                            item.isActive 
                              ? 'text-[#6366F1]' 
                              : item.isDanger 
                                ? 'text-red-500' 
                                : 'text-gray-500'
                          }`} 
                        />
                        <span className={`text-sm ${item.isActive ? 'font-medium text-[#6366F1]' : ''}`}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-72 p-8 bg-gray-50 flex-1">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="font-medium text-[#0F172A]">{t('settings')}</span>
                  <span className="mx-2">/</span>
                  <span className="font-medium text-[#0F172A]">{t('workspaceSettings')}</span>
                </div>
                <h1 className="text-3xl font-bold text-[#0F172A]">{t('workspaceSettings')}</h1>
                <p className="text-gray-600 mt-2">{t('workspaceDescription')}</p>
              </div>
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition">
                  <FontAwesomeIcon icon={faArrowLeft} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{t('backToDashboard')}</span>
                </button>
              </div>
            </div>

            {/* Workspace Name Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">{t('workspaceName')}</h2>
                <p className="text-sm text-gray-600">{t('workspaceNameDescription')}</p>
              </div>
              <form onSubmit={workspaceForm.handleSubmit}>
                <div className="flex items-center space-x-4">
                  <input 
                    type="text" 
                    name="name"
                    value={workspaceForm.values.name}
                    onChange={workspaceForm.handleChange}
                    onBlur={workspaceForm.handleBlur}
                    className={`flex-1 border rounded-lg px-4 py-2.5 text-[#0F172A] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition ${
                      workspaceForm.touched.name && workspaceForm.errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={t('enterWorkspaceName')}
                  />
                  <button 
                    type="submit"
                    disabled={workspaceForm.isSubmitting}
                    className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center"
                  >
                    {workspaceForm.isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                        {t('savingChanges')}
                      </>
                    ) : (
                      t('saveChanges')
                    )}
                  </button>
                </div>
                {workspaceForm.touched.name && workspaceForm.errors.name && (
                  <p className="mt-2 text-sm text-red-600">{workspaceForm.errors.name}</p>
                )}
              </form>
            </div>

            {/* Workspace Logo Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">{t('workspaceLogo')}</h2>
                <p className="text-sm text-gray-600">{t('workspaceLogoDescription')}</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-200 flex items-center justify-center">
                  {logoPreview ? (
                    <img 
                      src={logoPreview} 
                      alt="Workspace Logo" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] w-full h-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faImage} className="text-white text-3xl" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex space-x-3">
                    <label className="bg-gray-100 text-[#0F172A] px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition cursor-pointer">
                      <FontAwesomeIcon icon={faUpload} className="mr-2" />
                      {t('uploadLogo')}
                      <input 
                        type="file" 
                        accept="image/*"
                        className="hidden"
                        onChange={handleLogoUpload}
                      />
                    </label>
                    <button 
                      onClick={handleDeleteLogo}
                      className="text-red-600 px-5 py-2.5 rounded-lg font-medium hover:bg-red-50 transition"
                    >
                      <FontAwesomeIcon icon={faTrash} className="mr-2" />
                      {t('removeLogo')}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{t('recommendedSize')}</p>
                </div>
              </div>
            </div>

            {/* Brand Color Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">{t('brandColor')}</h2>
                <p className="text-sm text-gray-600">{t('brandColorDescription')}</p>
              </div>
              <form onSubmit={workspaceForm.handleSubmit}>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-xl border-4 border-gray-100 shadow-sm cursor-pointer"
                      style={{ backgroundColor: workspaceForm.values.brandColor }}
                      onClick={() => {
                        const colorInput = document.createElement('input')
                        colorInput.type = 'color'
                        colorInput.value = workspaceForm.values.brandColor
                        colorInput.oninput = (e) => workspaceForm.setFieldValue('brandColor', e.target.value)
                        colorInput.click()
                      }}
                    ></div>
                    <div>
                      <input 
                        type="text" 
                        name="brandColor"
                        value={workspaceForm.values.brandColor}
                        onChange={workspaceForm.handleChange}
                        onBlur={workspaceForm.handleBlur}
                        className={`border rounded-lg px-4 py-2 text-[#0F172A] font-mono text-sm w-32 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition ${
                          workspaceForm.touched.brandColor && workspaceForm.errors.brandColor ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      <p className="text-xs text-gray-500 mt-1">{t('hexColorCode')}</p>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    {t('applyColor')}
                  </button>
                </div>
                {workspaceForm.touched.brandColor && workspaceForm.errors.brandColor && (
                  <p className="mt-2 text-sm text-red-600">{workspaceForm.errors.brandColor}</p>
                )}
              </form>
            </div>

            {/* Language & Timezone Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">{t('languageTimezone')}</h2>
                <p className="text-sm text-gray-600">Set your preferred language and timezone</p>
              </div>
              <form onSubmit={workspaceForm.handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      <FontAwesomeIcon icon={faLanguage} className="mr-2 text-gray-500" />
                      {t('language')}
                    </label>
                    <select 
                      name="language"
                      value={workspaceForm.values.language}
                      onChange={workspaceForm.handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#0F172A] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition"
                    >
                      {languages.map((lang, index) => (
                        <option key={`language-option-${lang.id}-${index}`} value={lang.code}>
                          {lang.name} ({lang.nativeName})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500" />
                      {t('timezone')}
                    </label>
                    <select 
                      name="timezone"
                      value={workspaceForm.values.timezone}
                      onChange={workspaceForm.handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#0F172A] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition"
                    >
                      {timezones.map((tz, index) => (
                        <option key={`timezone-option-${tz.id}-${index}`} value={tz.value}>
                          {tz.label} {tz.cities ? `(${tz.cities.join(', ')})` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    {t('savePreferences')}
                  </button>
                </div>
              </form>
            </div>

            {/* Custom Domain Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-lg font-bold text-[#0F172A]">{t('customDomain')}</h2>
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <FontAwesomeIcon icon={faCrown} className="mr-1" />
                      {t('proPlan')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{t('customDomainDescription')}</p>
                </div>
              </div>
              <form onSubmit={workspaceForm.handleSubmit}>
                <div className="flex items-center space-x-3">
                  <input 
                    type="text" 
                    name="domain"
                    value={workspaceForm.values.domain}
                    onChange={workspaceForm.handleChange}
                    onBlur={workspaceForm.handleBlur}
                    className={`flex-1 border rounded-lg px-4 py-2.5 text-[#0F172A] bg-gray-50 font-mono text-sm focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition ${
                      workspaceForm.touched.domain && workspaceForm.errors.domain ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="your-workspace.botflow.app"
                  />
                  <button 
                    type="button"
                    onClick={handleCopyDomain}
                    className="text-gray-600 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition"
                    title={t('copy')}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                  <button 
                    type="button"
                    onClick={handleRegenerateDomain}
                    className="text-gray-600 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition"
                    title={t('regenerate')}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                </div>
                {workspaceForm.touched.domain && workspaceForm.errors.domain && (
                  <p className="mt-2 text-sm text-red-600">{workspaceForm.errors.domain}</p>
                )}
                <p className="text-xs text-gray-500 mt-3">{t('workspaceUrl')}</p>
                <div className="mt-4">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    {t('saveChanges')}
                  </button>
                </div>
              </form>
            </div>

            {/* Notification Preferences Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">{t('notificationPreferences')}</h2>
                <p className="text-sm text-gray-600">{t('notificationDescription')}</p>
              </div>
              <form onSubmit={notificationForm.handleSubmit}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-[#0F172A]">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-500" />
                        {t('emailNotifications')}
                      </p>
                      <p className="text-sm text-gray-600">{t('emailDescription')}</p>
                    </div>
                    <ToggleSwitch 
                      checked={notificationForm.values.emailNotifications}
                      onChange={(checked) => notificationForm.setFieldValue('emailNotifications', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-[#0F172A]">
                        <FontAwesomeIcon icon={faDesktop} className="mr-2 text-gray-500" />
                        {t('pushNotifications')}
                      </p>
                      <p className="text-sm text-gray-600">{t('pushDescription')}</p>
                    </div>
                    <ToggleSwitch 
                      checked={notificationForm.values.pushNotifications}
                      onChange={(checked) => notificationForm.setFieldValue('pushNotifications', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-[#0F172A]">
                        <FontAwesomeIcon icon={faChartBar} className="mr-2 text-gray-500" />
                        {t('weeklyReports')}
                      </p>
                      <p className="text-sm text-gray-600">{t('weeklyDescription')}</p>
                    </div>
                    <ToggleSwitch 
                      checked={notificationForm.values.weeklyReports}
                      onChange={(checked) => notificationForm.setFieldValue('weeklyReports', checked)}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    type="submit"
                    disabled={notificationForm.isSubmitting}
                    className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition flex items-center disabled:opacity-50"
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                    {notificationForm.isSubmitting ? t('savingChanges') : t('saveChanges')}
                  </button>
                </div>
              </form>
            </div>

            {/* Danger Zone Section */}
            <div className="bg-white rounded-xl border-2 border-red-200 p-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-1">{t('dangerZone')}</h2>
                <p className="text-sm text-gray-600">{t('dangerDescription')}</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-red-800 mb-1">{t('deleteWorkspaceTitle')}</p>
                    <p className="text-sm text-red-700">{t('deleteWorkspaceWarning')}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleDeleteWorkspace}
                className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition flex items-center"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                {t('deleteWorkspace')}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Toggle Switch Component
function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6366F1]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6366F1]"></div>
    </label>
  )
}
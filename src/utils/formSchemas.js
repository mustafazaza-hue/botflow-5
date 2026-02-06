// src/utils/formSchemas.js
import * as Yup from 'yup';

// Schema لتحديث المستخدم
export const userUpdateSchema = Yup.object().shape({
  plan: Yup.string().required('Plan is required'),
  status: Yup.string().required('Status is required'),
  role: Yup.string().required('Role is required'),
  renewalDate: Yup.date().required('Renewal date is required'),
});

// Schema لإنشاء مصدر بيانات
export const dataSourceCreateSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  type: Yup.string().required('Type is required'),
  description: Yup.string().required('Description is required'),
  fileType: Yup.string(),
  url: Yup.string().url('Must be a valid URL'),
  apiEndpoint: Yup.string().url('Must be a valid URL'),
  databaseType: Yup.string(),
  userId: Yup.string().uuid('Must be a valid user ID').required('User ID is required'),
});

// Schema لتحديث مصدر بيانات
export const dataSourceUpdateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be at least 3 characters'),
  description: Yup.string(),
  status: Yup.string(),
});

// Schema لبحث المستخدمين
export const userSearchSchema = Yup.object().shape({
  search: Yup.string(),
  plan: Yup.string(),
  status: Yup.string(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  page: Yup.number().min(1, 'Page must be at least 1'),
  pageSize: Yup.number().min(1, 'Page size must be at least 1').max(100, 'Page size cannot exceed 100'),
  sortBy: Yup.string(),
  sortDescending: Yup.boolean(),
});

// Schema لبحث مصادر البيانات
export const dataSourceSearchSchema = Yup.object().shape({
  search: Yup.string(),
  type: Yup.string(),
  status: Yup.string(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  page: Yup.number().min(1),
  pageSize: Yup.number().min(1).max(100),
  sortBy: Yup.string(),
  sortDescending: Yup.boolean(),
});
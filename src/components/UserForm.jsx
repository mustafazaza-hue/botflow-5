import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserFormSchema = Yup.object().shape({
  plan: Yup.string().required('Plan is required'),
  status: Yup.string().required('Status is required'),
  role: Yup.string().required('Role is required'),
  renewalDate: Yup.date().nullable()
});

const UserForm = ({ initialValues, onSubmit, loading }) => {
  return (
    <Formik
      initialValues={initialValues || {
        plan: '',
        status: '',
        role: '',
        renewalDate: null
      }}
      validationSchema={UserFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plan
            </label>
            <Field
              as="select"
              name="plan"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            >
              <option value="">Select Plan</option>
              <option value="Starter">Starter</option>
              <option value="Pro">Pro</option>
              <option value="Business">Business</option>
              <option value="Trial">Trial</option>
            </Field>
            {errors.plan && touched.plan && (
              <div className="text-red-600 text-sm mt-1">{errors.plan}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <Field
              as="select"
              name="status"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Inactive">Inactive</option>
            </Field>
            {errors.status && touched.status && (
              <div className="text-red-600 text-sm mt-1">{errors.status}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <Field
              as="select"
              name="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="SuperAdmin">Super Admin</option>
            </Field>
            {errors.role && touched.role && (
              <div className="text-red-600 text-sm mt-1">{errors.role}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Renewal Date (Optional)
            </label>
            <Field
              type="date"
              name="renewalDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#8b5cf6] transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Updating...' : 'Update User'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
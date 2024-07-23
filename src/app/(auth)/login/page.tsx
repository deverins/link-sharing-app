"use client";

import { useEffect } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '@/validationSchema/loginSchema';
import { useAuthStore } from '@/zustand/store';

const Login = () => {
  const { email, password, setEmail, setPassword } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email,
      password,
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    setEmail(formik.values.email);
    setPassword(formik.values.password);
  }, [formik.values.email, formik.values.password, setEmail, setPassword]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-purple-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-sm text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps('password')}
              className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-purple-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-500"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account? <a href="/create-account" className="text-purple-600">Create account</a>
        </p>
      </section>
    </main>
  );
};

export default Login;

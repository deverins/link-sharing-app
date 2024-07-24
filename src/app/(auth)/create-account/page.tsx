"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useAuthStore } from '@/zustand/store';
import logo from '@/img/logo.png';
import { signupSchema } from '@/validationSchema/signupSchema';

const CreateAccount = () => {
  const { email, password, setEmail, setPassword } = useAuthStore();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const formik = useFormik({
    initialValues: {
      email,
      password,
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setEmail(values.email);
      setPassword(values.password);
      console.log(values);
    },
  });

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="flex items-center space-x-2 mb-6">
          <Image src="/logo.svg" alt="logo" width={32} height={32} className="w-8 h-8 sm:w-6 sm:h-6" />
          <span className="text-[#333333] text-4xl font-bold sm:text-3xl">devLinks</span>
        </div>
        <div className="w-full bg-white p-6 rounded-lg lg:shadow sm:shadow-none">
          <div className="text-left mt-10">
            <h1 className="text-3xl font-bold mb-2 sm:text-2xl">Login</h1>
            <p className="text-[#737373] mb-10">Add your details below to get back into the app</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-6 flex flex-col w-full">
            <div>
              <label htmlFor="email" className="mb-1 text-xs text-[#333333]">Email address</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. alex@email.com"
                  {...formik.getFieldProps('email')}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${
                    formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                  }`}
                />
                <Image src="/mail.svg" alt="mail" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-sm text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password" className="mb-1 text-xs text-[#333333]">Create password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="At least 8 characters"
                  {...formik.getFieldProps('password')}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${
                    formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                  }`}
                />
                <Image src="/password.svg" alt="lock" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-sm text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password" className="mb-1 text-xs text-[#333333]">Confirm password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="•••••••••••••••••"
                  {...formik.getFieldProps('password')}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${
                    formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                  }`}
                />
                <Image src="/password.svg" alt="lock" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-sm text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className={`w-full font-semibold text-base text-white rounded-md p-2 ${
                isInputFocused ? 'bg-[#BEADFF]' : 'bg-[#633CFF]'
              }`}
            >
              Create new account
            </button>
          </form>
        </div>
        <p className="text-sm pt-6">
          Don’t have an account? <span className="text-[#633CFF] cursor-pointer"><Link href="/login">Login</Link></span>
        </p>
      </div>
    </main>
  );
};

export default CreateAccount;

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/zustand/store';
import { signupSchema } from '@/validationSchema/signupSchema';

const CreateAccount = () => {
  const { email, password, setEmail, setPassword, confirmPassword, setconfirmPassword } = useAuthStore();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formik = useFormik({
    initialValues: {
      email,
      newPassword: password,
      confirmPassword: confirmPassword,
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setEmail(values.email);
      setPassword(values.newPassword);
      setconfirmPassword(values.confirmPassword);

      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some((user: { email: string }) => user.email === values.email);

      if (!userExists && !formik.errors.email && !formik.errors.newPassword && !formik.errors.confirmPassword) {
        existingUsers.push({ email: values.email, password: values.newPassword });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        console.log('Account created successfully');
        setErrorMessage(null);
        router.push('/dev-links');
      } else if (userExists) {
        setErrorMessage('Email already exists.');
        console.log('User already exists');
      }
    },
  });

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  if (!isMounted) return null;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="flex items-center space-x-2 mb-6">
          <Image src="/logo.svg" alt="logo" width={32} height={32} className="w-8 h-8 sm:w-6 sm:h-6" />
          <span className="text-[#333333] text-4xl font-bold sm:text-3xl">devLinks</span>
        </div>
        <div className="w-full bg-white p-6 rounded-lg lg:shadow sm:shadow-none">
          <div className="text-left mt-10">
            <h1 className="text-3xl font-bold mb-2 sm:text-2xl">Create account</h1>
            <p className="text-[#737373] mb-10">Add your details below to get back into the app</p>
          </div>
          {errorMessage && <div className="text-sm text-red-600 mb-4">{errorMessage}</div>}
          <form onSubmit={formik.handleSubmit} className="space-y-6 flex flex-col w-full">
            <div>
              <label htmlFor="email" className="mb-1 text-xs text-[#333333]">Email address</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. alex@email.com"
                  {...formik.getFieldProps('email')}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                    }`}
                />
                <Image src="/mail.svg" alt="mail" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-sm text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="newPassword" className="mb-1 text-xs text-[#333333]">Create password</label>
              <div className="relative">
                <input
                  type="password"
                  id="newPassword"
                  placeholder="At least 8 characters"
                  {...formik.getFieldProps('newPassword')}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${formik.touched.newPassword && formik.errors.newPassword ? 'border-red-500' : ''
                    }`}
                />
                <Image src="/password.svg" alt="lock" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
              </div>
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-sm text-red-600">{formik.errors.newPassword}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="mb-1 text-xs text-[#333333]">Confirm password</label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="•••••••••••••••••"
                  {...formik.getFieldProps('confirmPassword')}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                />
                <Image src="/password.svg" alt="lock" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-sm text-red-600">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className={`w-full font-semibold text-base text-white rounded-md p-2 ${isInputFocused ? 'bg-[#BEADFF]' : 'bg-[#633CFF]'
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

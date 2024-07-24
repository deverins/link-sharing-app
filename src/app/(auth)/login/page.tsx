"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/zustand/store';
import { loginSchema } from '@/validationSchema/loginSchema';

const Login = () => {
  const { email, password, setEmail, setPassword } = useAuthStore();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && email && password) {
      router.push('/dev-links');
    }
  }, [email, password, router]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find((user: { email: string, password: string }) =>
        user.email === values.email && user.password === values.password
      );

      if (user) {
        setEmail(values.email);
        setPassword(values.password);
        router.push('/dev-links');
      } else {
        setMessage('Invalid credentials.');
      }
    },
  });

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
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
            <h1 className="text-3xl font-bold mb-2 sm:text-2xl">Login</h1>
            <p className="text-[#737373] mb-10">Enter your details below to log into your account</p>
          </div>
          {message && <div className="text-sm text-red-600 mb-4">{message}</div>}
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
              <label htmlFor="password" className="mb-1 text-xs text-[#333333]">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...formik.getFieldProps('password')}
                  onFocus={handleFocus}
                  onBlur={(e) => {
                    handleBlur();
                    formik.handleBlur(e);
                  }}
                  className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''
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
              className={`w-full font-semibold text-base text-white rounded-md p-2 ${isInputFocused ? 'bg-[#BEADFF]' : 'bg-[#633CFF]'
                }`}
            >
              Login
            </button>
          </form>
        </div>
        <p className="text-sm pt-6">
          Don’t have an account? <span className="text-[#633CFF] cursor-pointer"><Link href="/create-account">Create Account</Link></span>
        </p>
      </div>
    </main>
  );
};

export default Login;

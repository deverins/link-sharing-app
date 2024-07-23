import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^[a-zA-Z0-9]{8,}$/,
      'Password must be at least 8 characters long and contain only letters and numbers'
    ),
});

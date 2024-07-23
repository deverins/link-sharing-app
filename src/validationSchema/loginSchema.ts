import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .required(`Can't be empty`)
    .email('Invalid email address'),
  password: Yup.string()
    .required('Please check again')
    .matches(
      /^[a-zA-Z0-9]{8,}$/,
      'Password must be at least 8 characters long'
    ),
});

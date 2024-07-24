import * as Yup from 'yup';

export const signupSchema = Yup.object({
  email: Yup.string()
    .required(`Can't be empty`)
    .email('Invalid email address'),
  newPassword: Yup
    .string()
    .oneOf([Yup.ref('confirmPassword'), ''], 'Please check again')
    .matches(
      /^[a-zA-Z0-9]{8,}$/,
      "Password must contain at least 8 characters long"
    )
    .required("Please check again"),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('newPassword'), ''], 'Passwords must match')
    .matches(
      /^[a-zA-Z0-9]{8,}$/,
      "Confirm password must be at least 8 characters long"
    )
    .required("Confirm password is required"),
});

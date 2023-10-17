import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email('Please enter valid Email').required('Required'),
  password: Yup.string()
    .min(4, 'Must be atleast 4 characters.')
    .required('*Required'),
});

export const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Please enter valid Email').required('Required'),
  password: Yup.string()
    .min(4, 'Must be atleast 4 characters.')
    .required('Required'),
});

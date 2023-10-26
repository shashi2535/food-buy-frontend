import * as Yup from 'yup';
import { ValidationMessages } from '../utils/common';

const { getRequired } = ValidationMessages;

export const loginSchema = Yup.object({
  email: Yup.string().email('Please enter valid Email').required('Required'),
  password: Yup.string()
    .min(4, 'Must be atleast 4 characters.')
    .required('*Required'),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string(getRequired('name')).required(getRequired('name')).min(2, getRequired('name')),
  email: Yup.string(getRequired('email')).email(getRequired('email')).required('Please enter a valid email'),
  isTermAccepted: Yup.boolean().required()
});

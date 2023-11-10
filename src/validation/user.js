import * as Yup from "yup";
import { ValidationMessages } from "../utils/common";

const { getRequired } = ValidationMessages;

export const loginSchema = Yup.object({
  email: Yup.string().email("Please enter valid Email").required("Required"),
  password: Yup.string()
    .min(4, "Must be atleast 4 characters.")
    .required("*Required"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string(getRequired("name"))
    .required(getRequired("name"))
    .min(2, getRequired("name")),
  email: Yup.string(getRequired("email"))
    .email(getRequired("email"))
    .required("Please enter a valid email"),
  isTermAccepted: Yup.boolean().oneOf([true]).required(),
});

export const step1Schema = Yup.object().shape({
  name: Yup.string().required("Enter valid res name"),
  address: Yup.string().required("Enter valid res address"),
  latitude: Yup.number()
    .required("Required*")
    .typeError("latitude must be a number"),
  longitude: Yup.number()
    .required("Required*")
    .typeError("longitude must be a number"),
  phone: Yup.string()
    .required("Required*")
    .matches(/^[6-9]\d{9}$/, "Phone number is not valid"),
  country: Yup.string().required("Required*"),
  pinCode: Yup.string().required("Required*"),
  state: Yup.string().required("Required*"),
  district: Yup.string().required("Required*"),
});

export const step2Schema = Yup.object().shape({
  days: Yup.array()
    .min(2, "Min 2 Days Are Selected.")
    .max(2, "Max 2 Days Are Selected"),
  outletType: Yup.array().min(1, "please select 1 outlet type"),
  cusion_type: Yup.array().min(1, "please select 1 cusion type"),
  restaurantType: Yup.string().required("please select a resturent type"),
});

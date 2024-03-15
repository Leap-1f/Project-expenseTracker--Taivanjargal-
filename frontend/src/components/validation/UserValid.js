import { object, string } from "yup";
import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required") // Clear error message
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name cannot exceed 30 characters"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password cannot be longer than 20 characters"),
  rePassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const userValidate = yup.object().shape({
  email: yup
    .string()
    .min(5, "at least 5character")
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password cannot be longer than 20 characters"),
});

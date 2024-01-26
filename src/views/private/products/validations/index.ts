
import * as yup from "yup"


export const productFormValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    unitPrice : yup.number()
    .required("Unit price is required")
    .min(0, "Unit price must be greater than 0")
    .max(1000000, "Unit price must be less than 1000000"),

})

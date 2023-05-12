import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('First name is required')
        .min(3, 'Firstname must be 3 characteres long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    role: yup
        .string()
        .oneOf(['student', 'developer', 'engineer', 'seniorengineer'], 'Role is required'),
    civil: yup
        .string()
        .oneOf(['single', 'married'], 'Civil status is required'),
    hiking: yup.boolean(),
    reading: yup.boolean(),
    coding: yup.boolean(),
})
export default formSchema;
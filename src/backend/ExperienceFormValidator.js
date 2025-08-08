import * as yup from 'yup';

const RegExForTitleToValidate = '^(?!.*\d)(?!.*\b[a-z]{4,}\b)([A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,})+)$';

export const validSchema = yup.object().shape({
    title: yup.string().match(RegExForTitleToValidate,'Enter A Valid Title').required("Required")
})
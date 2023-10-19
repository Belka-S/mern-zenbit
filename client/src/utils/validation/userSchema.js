import * as Yup from 'yup';

import { NAME, EMAIL } from 'utils/constants';

const name = Yup.string()
  .min(4, 'is too short')
  .matches(NAME.regExp, NAME.msg)
  .required('is required');
const email = Yup.string()
  .matches(EMAIL.regExp, EMAIL.msg)
  .required('is required');
const password = Yup.string().min(6, 'is too short').required('is required');
const code = Yup.number().required('is required').typeError('must be a number');

export const signupSchema = Yup.object().shape({ name, email, password });
export const signinSchema = Yup.object().shape({ email, password });
export const verifySchema = Yup.object().shape({ verificationCode: code });
export const forgotSchema = Yup.object().shape({ email });
export const resetSchema = Yup.object().shape({
  newPass: password,
  confirmPass: password.oneOf([Yup.ref('newPass')], 'must match'),
});

import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Fragment, useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import LinkRoute from 'components/AuthForms/AuthLinks/LinkRoute';
import LinkBtn from './AuthLinks/LinkBtn';
import SignBtn from './AuthBtns/SignBtn';
import IconBtn from './IconBtn/IconBtn';
import GoogleBtn from './AuthBtns/GoogleBtn';
import { loginThunk } from 'store/auth/authOperations';
import { signinSchema } from 'utils/validation';
import { Form, Field, FieldWrap } from 'components/AuthForms/AuthForms.styled';
import { ErrorMsg, Label, Tittle } from 'components/AuthForms/AuthForms.styled';
import { SuccessIcon, ErrorIcon } from 'components/AuthForms/AuthForms.styled';

const initialValues = { email: '', password: '' };

const SigninForm = ({ setIsVerify, setIsForgot, setEmail }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState('password');

  const isValid = ({ values, errors, key }) => {
    const noValue = !values[key] && 'noValue';
    const isError = errors[key] ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors, values }) => {
    const isError = Object.keys(errors).length;
    const noValue = Object.keys(values).some(key => !values[key]);
    return noValue || isError;
  };

  const onClick = ({ email }) => {
    setEmail(email);
    setIsForgot(true);
  };

  const onSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(pld => setIsVerify(!pld.result.user.verifiedEmail))
      .catch(err => err.includes('401') && toast('Unauthorized'));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Tittle>
            <h2>Log In</h2>
          </Tittle>
          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() + key.substring(1)}
                <pre> </pre>
                <ErrorMsg name={key} component="span" />
              </Label>

              <FieldWrap>
                <Field
                  type={key === 'password' ? toggle : key}
                  name={key}
                  placeholder={key.at(0).toUpperCase() + key.substring(1)}
                  validation={isValid({ values, errors, key })}
                />

                {key === 'password' && (
                  <IconBtn toggle={toggle} setToggle={setToggle} />
                )}
                {values[key] && errors[key] && <ErrorIcon />}
                {values[key] && !errors[key] && <SuccessIcon />}
              </FieldWrap>

              {key === 'password' && (
                <LinkBtn onClick={() => onClick(values)}>
                  Forgot password?
                </LinkBtn>
              )}
            </Fragment>
          ))}
          <SignBtn disabled={isDisabled({ values, errors })}>Sign in</SignBtn>
          <GoogleBtn />

          <span className="toggler">
            Don't have an account? <LinkRoute to="/signup">Sign Up</LinkRoute>
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;

SigninForm.propTypes = {
  setIsVerify: PropTypes.func.isRequired,
  setIsForgot: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

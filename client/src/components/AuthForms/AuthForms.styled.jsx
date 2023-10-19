import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage } from 'formik';
import { BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';

import { themes } from 'styles/themes';

export const Form = styled(FormikForm)`
  margin-top: 80px;
  height: calc(100vh - 80px);
  min-width: 550px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${themes.colors.background};

  & .toggler {
    margin-top: 10px;
    align-self: center;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.57;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: baseline;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.42;

  & pre {
    font-size: 10px;
  }
`;

const FieldStyles = css`
  margin-bottom: 20px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FieldWrap = styled.div`
  ${FieldStyles}

  margin-bottom: 20px;
  position: relative;

  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const Field = styled(FormikField)`
  ${FieldStyles}

  height: 48px;
  padding: 12px 20px 15px;
  padding-left: ${({ name }) => name.toLowerCase().includes('pass') && '38px'};

  font-size: 14px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  line-height: 1.57;

  border: 1px solid ${themes.colors.border};
  border-radius: ${themes.radius.s};
  outline: 0.5px solid transparent;
  background-color: ${themes.colors.border};

  transition: border-color 250ms linear, outline-color 250ms linear;

  &::placeholder {
    color: ${themes.colors.black};
    opacity: 0.5;
  }

  border-color: ${({ validation }) => {
    switch (validation) {
      case 'noValue':
        return themes.colors.border;
      case validation:
        return themes.colors[validation];
      default:
        break;
    }
  }};

  &:hover,
  &:focus {
    border-color: ${({ validation }) => {
      switch (validation) {
        case validation:
          return themes.colors[validation];
        default:
          break;
      }
    }};

    outline-color: ${({ validation }) => {
      switch (validation) {
        case validation:
          return themes.colors[validation];
        default:
          break;
      }
    }};
  }
`;

export const Tittle = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & h2 {
    margin: 0;

    font-family: 'Merriweather', serif;
    font-size: 28px;
    line-height: 1.21;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;

  color: ${themes.colors.error};
`;

const IconStyles = css`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

export const SuccessIcon = styled(BsCheckCircle)`
  ${IconStyles};

  color: ${themes.colors.success};
`;

export const ErrorIcon = styled(BsExclamationCircle)`
  ${IconStyles};

  color: ${themes.colors.error};
`;

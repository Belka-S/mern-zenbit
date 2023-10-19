import { FcGoogle } from 'react-icons/fc';
import { MdArrowForwardIos } from 'react-icons/md';

import { baseURL } from 'servises/baseURL';
import { IconLink } from './AuthBtns.styled';

const GoogleBtn = () => (
  <IconLink href={`${baseURL}/auth/google`}>
    <div>
      <FcGoogle size="20px" />
      Sign in with Google
      <MdArrowForwardIos size="16px" />
    </div>
  </IconLink>
);

export default GoogleBtn;

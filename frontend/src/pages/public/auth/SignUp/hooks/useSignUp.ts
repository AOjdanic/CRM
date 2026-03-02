import { useNavigate } from 'react-router';

import APIService from '../../../../../api';

import { uiRoutes } from '../../../../../uiRoutes';
import { apiRoutes } from '../../../../../apiRoutes';

type SignUpPayload = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

export function useSignUp() {
  const navigate = useNavigate();

  async function signup(payload: SignUpPayload) {
    const res = await APIService.post(apiRoutes.auth.signup, payload);

    if (res.status === 200) {
      navigate(uiRoutes.public.login);
    }
  }

  return { signup };
}

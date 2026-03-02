import { useNavigate } from 'react-router';

import APIService from '../../../../../api';

import { uiRoutes } from '../../../../../uiRoutes';
import { apiRoutes } from '../../../../../apiRoutes';
import { useAuth } from '../../../../../hooks/useAuth';

type LoginPayload = {
  email: string;
  password: string;
};

export function useLogin() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function login(payload: LoginPayload) {
    const res = await APIService.post(apiRoutes.auth.login, payload);

    const token = res.data.token;

    if (token) {
      auth.login(token);
      navigate(uiRoutes.auth.dashboard);
    }
  }

  return { login };
}

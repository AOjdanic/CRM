import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';

import APIService from '../../../../../api';

import { uiRoutes } from '../../../../../uiRoutes';
import { apiRoutes } from '../../../../../apiRoutes';
import { useAuth } from '../../../../../hooks/useAuth';

type LoginPayload = {
  email: string;
  password: string;
};

const LOGIN_KEY = 'login-key';

async function login(payload: LoginPayload) {
  const res = await APIService.post(apiRoutes.auth.login, payload);

  return res.data;
}

export function useLogin() {
  const auth = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [LOGIN_KEY],
    mutationFn: login,
    onSuccess(data) {
      const { token } = data;

      if (token) {
        auth.login(token);

        navigate(uiRoutes.auth.dashboard);
      }
    },
  });
}

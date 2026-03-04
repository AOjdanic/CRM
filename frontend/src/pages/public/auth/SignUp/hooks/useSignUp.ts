import { useNavigate } from 'react-router';

import APIService from '../../../../../api';

import { uiRoutes } from '../../../../../uiRoutes';
import { apiRoutes } from '../../../../../apiRoutes';
import { useMutation } from '@tanstack/react-query';

type SignUpPayload = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

const SIGNUP_KEY = 'signup-key';

async function signup(payload: SignUpPayload) {
  const res = await APIService.post(apiRoutes.auth.signup, payload);

  return res.data;
}

export function useSignUp() {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [SIGNUP_KEY],
    mutationFn: signup,
    onSuccess() {
      navigate(uiRoutes.public.login);
    },
  });
}

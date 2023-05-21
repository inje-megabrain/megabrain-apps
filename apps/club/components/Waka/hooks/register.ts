import { useReducer } from 'react';
import { WakaOrganization } from '~/../../packages/core';

export interface WakaMemberRegisterState {
  organization: WakaOrganization;
  name: string;
  githubName: string;
  apiKey: string;
}

const INITIAL_STATE: WakaMemberRegisterState = {
  organization: WakaOrganization.Megabrain,
  name: '',
  githubName: '',
  apiKey: '',
};

export const useWakaMemberRegister = () => {
  return useReducer(reducer, INITIAL_STATE);
};

const reducer = (
  oldState: WakaMemberRegisterState,
  newState: Partial<WakaMemberRegisterState>
) => ({ ...oldState, ...newState });

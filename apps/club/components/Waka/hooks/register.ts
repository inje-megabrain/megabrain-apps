import { useReducer } from 'react';
import { WakaDepartment, WakaMemberPostPayload, WakaOrganization } from '@megabrain/core';

export interface WakaMemberRegisterState extends WakaMemberPostPayload {
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
  department: WakaDepartment.Frontend,
};

export const useWakaMemberRegister = () => {
  return useReducer(reducer, INITIAL_STATE);
};

const reducer = (
  oldState: WakaMemberRegisterState,
  newState: Partial<WakaMemberRegisterState>
) => ({ ...oldState, ...newState });

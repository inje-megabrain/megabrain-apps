import { GithubUser } from '../types';
import { createEndpoint } from './base';

export const getGithubUser = createEndpoint<GithubUser, string>(
  'GET',
  (username: string) => `https://api.github.com/users/${username}`,
  { mirror: true }
);

export const githubs = {
  user: getGithubUser,
};

export default githubs;

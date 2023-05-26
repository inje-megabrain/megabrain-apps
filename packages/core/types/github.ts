export interface GithubUser {
  avatar_url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  name: string;
  blog: string;
  bio?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

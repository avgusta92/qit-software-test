export interface RepositoryModel {
  id: number;
  name: string;
  stargazers_count: number;
  description: string;
  owner: {
    login: string;
  }
}

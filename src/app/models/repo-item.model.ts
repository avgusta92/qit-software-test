export interface RepoItem {
  id: number;
  position: number;
  name: string;
  stars: number;
  fav: boolean;
  description?: string;
  owner?: {
    login?: string;
    avatar_url?: string;
  }
}

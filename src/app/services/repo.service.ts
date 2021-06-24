import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class RepoService {
  constructor(private http: HttpClient) {}

  private repos$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  fetchTopRepo(page: number = 0): void {
    this.http.get<any>('https://api.github.com/users/avgusta92/repos', {
      params: new HttpParams().set('page', page)
    })
      .pipe(
        tap((data) => {
          const newValue = [
            ...this.repos$.getValue(),
            ...data.map((repo: any, index: number) => ({
              id: repo.id,
              position: index + 1,
              name: repo.name,
              stars: repo.stargazers_count,

              description: repo.description,
              owner: {
                login: repo.owner.login,
                avatar_url: repo.owner.avatar_url,
              },
              fav: false
            }))
          ];


          this.repos$.next(newValue);
        })
      )
      .subscribe();
  }

  getTopRepo$(): Observable<any[]> {
    return this.repos$.asObservable();
  }

  getTopRepo(): any[] {
    return this.repos$.getValue();
  }

  addFavoriteRepo(id: number): void {
    const currentRepos = [...this.getTopRepo()];
    const favoriteRepo = currentRepos.find((item) => item.id === id);
    favoriteRepo.fav = true;
    this.repos$.next(currentRepos);
  }

  deleteFavoriteRepo(id: number): void {
    const currentRepos = [...this.getTopRepo()];
    const favoriteRepo = currentRepos.find((item) => item.id === id);
    favoriteRepo.fav = false;
    this.repos$.next(currentRepos);
  }
}

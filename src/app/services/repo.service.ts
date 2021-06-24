import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {RepositoryModel} from "../models/repository.model";
import {tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class RepoService {
  constructor(private http: HttpClient) {}

  repos$: BehaviorSubject<RepositoryModel[] | null> = new BehaviorSubject<RepositoryModel[] | null>(null);

  getTopRepo(): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>('https://api.github.com/users/avgusta92/repos')
      .pipe(
        tap((data) => this.repos$.next(data))
      );
  }
}

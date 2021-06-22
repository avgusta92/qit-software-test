import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepositoryModel} from "../models/repository.model";

@Injectable({providedIn: 'root'})

export class RepoService {
  constructor(private http: HttpClient) {}

  addTopRepo(): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>('https://api.github.com/users/avgusta92/repos');
  }
}

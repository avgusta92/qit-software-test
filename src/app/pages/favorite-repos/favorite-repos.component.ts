import { Component, OnInit } from '@angular/core';
import {RepoService} from "../../services/repo.service";
import {RepoItem} from "../../models/repo-item.model";

@Component({
  selector: 'app-favorite-repos',
  templateUrl: './favorite-repos.component.html',
  styleUrls: ['./favorite-repos.component.scss']
})
export class FavoriteReposComponent implements OnInit {
  favRepos: RepoItem[] = [];

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repoService.getTopRepo$()
      .subscribe((repos: RepoItem[]) => {
        this.favRepos = repos.filter(repo => repo.fav === true);
      });
  }
}

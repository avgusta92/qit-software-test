import { Component, OnInit } from '@angular/core';
import {RepoService} from "../../services/repo.service";
import {RepositoryModel} from "../../models/repository.model";
import {RepoItem} from "../../models/repo-item.model";

@Component({
  selector: 'app-top-repo',
  templateUrl: './top-repo.component.html',
  styleUrls: ['./top-repo.component.scss']
})

export class TopRepoComponent implements OnInit {
  activeRepo?: RepoItem;

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
  }

  onSelectRepo(activeRepoId: number) {
    this.activeRepo = this.repoService
      .getTopRepo()?.find((item) => item.id === activeRepoId);
  }

}

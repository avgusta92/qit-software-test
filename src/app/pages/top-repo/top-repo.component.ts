import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {RepoService} from "../../services/repo.service";
import {RepositoryModel} from "../../models/repository.model";

@Component({
  selector: 'app-top-repo',
  templateUrl: './top-repo.component.html',
  styleUrls: ['./top-repo.component.scss']
})

export class TopRepoComponent implements OnInit {
  searchIcon = faSearch;
  activeRepo?: RepositoryModel;

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
  }

  onSelectRepo(activeRepoId: number) {
    this.activeRepo = this.repoService.repos$.getValue()?.find((item) => item.id === activeRepoId);
    console.log('activeRepoId', activeRepoId, this.activeRepo);
  }


}

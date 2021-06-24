import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {RepoService} from '../../services/repo.service'

export interface RepoTableItem {
  id: number;
  position: number;
  name: string;
  stars: number;
  fav: boolean;
}

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-table-repo',
  templateUrl: './table-repo.component.html',
  styleUrls: ['./table-repo.component.scss']
})

export class TableRepoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'stars', 'fav'];
  repoTableItems: RepoTableItem[] = [];

  @Output() onSelectRepo = new EventEmitter<number>();

  constructor(
    private repoService: RepoService,
  ) {
  }

  ngOnInit() {
    this.repoService.getTopRepo()
      .subscribe((repos) => {
        console.log('repos', repos);

        this.repoTableItems = repos.map((repo, index) => {
          return {
            id: repo.id,
            position: index + 1,
            name: repo.name,
            stars: repo.stargazers_count,
            fav: false
          };
        });
      })
  }
}


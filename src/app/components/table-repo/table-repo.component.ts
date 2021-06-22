import {Component} from '@angular/core';
import {RepoService} from '../../services/repo.service'

export interface PeriodicElement {
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

export class TableRepoComponent {
  displayedColumns: string[] = ['position', 'name', 'stars', 'fav'];
  reposValue: PeriodicElement[] = [];

  constructor(
    private repoService: RepoService,
  ) {
  }

  ngOnInit() {
    this.repoService.addTopRepo()
      .subscribe((repos) => {
        console.log('repos', repos);

        this.reposValue = repos.map((repo, index) => {
          return {
            position: index,
            name: repo.name,
            stars: repo.stargazers_count,
            fav: false
          };
        });
      })
  }
}


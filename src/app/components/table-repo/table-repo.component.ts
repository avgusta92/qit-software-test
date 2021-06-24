import {Component, OnInit, Output, EventEmitter } from '@angular/core';

import {RepoService} from '../../services/repo.service';
import {RepoTableItem} from '../../models/repo-table-item.model';
import {RepoItem} from "../../models/repo-item.model";

@Component({
  selector: 'app-table-repo',
  templateUrl: './table-repo.component.html',
  styleUrls: ['./table-repo.component.scss']
})

export class TableRepoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'stars', 'fav'];
  repoTableItems: RepoTableItem[] = [];

  private page: number = 0;

  @Output() onSelectRepo = new EventEmitter<number>();

  constructor(
    private repoService: RepoService
  ) {
  }

  ngOnInit() {
    if (!this.repoService.getTopRepo() || this.repoService.getTopRepo().length === 0) {
      this.repoService.fetchTopRepo(this.page);
    }

    this.repoService.getTopRepo$()
      .subscribe((repos: RepoItem[]) => {
        this.repoTableItems = repos;
      });
  }

  onTableScroll(event: any) {
    const tableViewHeight = event.target.offsetHeight;
    const tableScrollHeight = event.target.scrollHeight;
    const scrollLocation = event.target.scrollTop;

    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.page++;
      this.repoService.fetchTopRepo(this.page);
    }
  }
}


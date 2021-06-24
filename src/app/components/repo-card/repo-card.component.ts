import {Component, Input, OnInit} from '@angular/core';
import {RepoService} from "../../services/repo.service";
import {RepoItem} from "../../models/repo-item.model";

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input() repo?: RepoItem;
  @Input() buttonCard!: string;

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
  }

  onAddFavoriteRepo() {
    this.repoService.addFavoriteRepo(this.repo!.id);
  }

  onDeleteFavoriteRepo() {
    this.repoService.deleteFavoriteRepo(this.repo!.id);
  }

}

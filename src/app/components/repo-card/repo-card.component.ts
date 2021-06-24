import {Component, Input, OnInit} from '@angular/core';
import {RepositoryModel} from "../../models/repository.model";

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input() repo?: RepositoryModel;

  constructor() { }

  ngOnInit(): void {
  }

}

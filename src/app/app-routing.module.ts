import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopRepoComponent} from "./pages/top-repo/top-repo.component";
import {FavoriteReposComponent} from "./pages/favorite-repos/favorite-repos.component";

const routes: Routes = [
  { path: '',   redirectTo: '/top-repo', pathMatch: 'full' },
  { path: 'top-repo', component: TopRepoComponent },
  { path: 'favorite-repos', component: FavoriteReposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

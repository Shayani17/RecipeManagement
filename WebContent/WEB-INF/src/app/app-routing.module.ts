import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail', component: RecipeDetailComponent },
  { path: 'add', component: AddDetailsComponent },
  { path: 'edit', component: UpdateDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

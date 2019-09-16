import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { RecipeDetail } from '../recipe-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private recipeDetailList: RecipeDetail[];
  private deleteValue: string;
  public actionmsg: string;
  public actionmsgFlag: boolean;

  constructor(private _data: DataService,
    private _router: Router) { }

  ngOnInit() {
    this._data.getRecipes().subscribe(data => {
      this.recipeDetailList = data.data;
    });
    this.actionmsg = this._data.responseMsg;
    this.actionmsgFlag = this._data.responseMsgFlag;
  }

  viewDetails(recipe: any) {
    this._data.setRecipe(recipe);
    this._data.setResponseMessage("");
    this._router.navigate(['/detail']);
  }

  updateDetails(recipe: RecipeDetail) {
    this._data.setRecipe(recipe);
    this._router.navigate(['/edit']);
  }

  deleteDetails(recipe: RecipeDetail) {
    this._data.deleteRecipeDetails(recipe.recipe_id)
      .subscribe(data => {
        this.deleteValue = data.data;
        if (this.deleteValue === "Record Deleted") {
          this._data.setResponseMessage("Record Deleted Successfully");
          this.ngOnInit();
        }
      })
  }

  addDetail() {
    this._router.navigate(['/add']);
  }
}
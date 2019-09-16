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
  public delSuccessMsg: boolean = false;
  public delMsg: string = "";

  constructor(private _data: DataService,
              private _router: Router ) { }


  ngOnInit() {
   this._data.getRecipes().subscribe(data=> {
     console.log("we are in home ts:",data.data)
     this.recipeDetailList = data.data;
   });
  }
 
  viewDetails(recipe: any){
    console.log("recipe"+recipe.recipe_id);
    this._data.setRecipe(recipe);
    this._router.navigate(['/detail']);
  }

  updateDetails(recipe: any){
    console.log("update");
    this._data.setRecipe(recipe);
    this._router.navigate(['/edit']);
  }

  deleteDetails(recipe: RecipeDetail){
    console.log('Delete id:',recipe.recipe_id);
    this._data.deleteRecipeDetails(recipe.recipe_id)
    .subscribe(data=>
    {//result
      this.deleteValue = data;
      if(this.deleteValue === "Delete succesfully"){
        this.delSuccessMsg =true;
        this.delMsg= this.deleteValue;
        this._router.navigate(['/home'])
      }
    })
    console.log("delete");
  }

  addDetail(){
    this._router.navigate(['/add']);
  }
}

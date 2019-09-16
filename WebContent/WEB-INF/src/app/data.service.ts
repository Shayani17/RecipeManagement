import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetail } from './recipe-detail';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public recipe: RecipeDetail;
  private url: string ="/RecipeManager/";

  setRecipe(recipeData: RecipeDetail){
  this.recipe = recipeData;
  }

  getRecipeDetail(){
    return this.recipe;
  }

  getRecipes(): Observable<any>{
    return this._http.get(this.url+"fetchDetails.html");
   }

  updateRecipeDetails(recipeDet:RecipeDetail):Observable<any>{
   return  this._http.put(this.url+"updateDetails",JSON.stringify(recipeDet));
  }

  //accepts recipedetail
  addRecipeDetails(recipeDet:RecipeDetail):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
    return this._http.post(this.url+"addDetails",JSON.stringify(recipeDet),options);
  }

  deleteRecipeDetails(id:string):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   
    return this._http.post(this.url+"deleteDetails",{"id":id}, options);



   // return this._http.delete(this.url+"deleteDetails",{params:parms1});
  }

 /* addRecipeDetails(addRecipe){
    this._http.post("http://127.0.0.1:3000/customers",
        {
          "name":  "Customer004",
          "email":  "customer004@email.com",
          "tel":  "0000252525"
        })
          .subscribe(
          data  => {
            console.log("POST Request is successful ", data);
            },
                error  => {
                  console.log("Error", error);
                }
          );
    }

    deleteRecipeDetails(){
      this._http.patch("http://127.0.0.1:3000/customers/1",{})
      .subscribe(
          data  => {    
            console.log("PATCH Request is successful ", data);
          },error  => {
            console.log("Error", error);
      });
    }*/

}

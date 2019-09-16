import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeDetail } from './recipe-detail';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public recipe: RecipeDetail;
  public responseMsgFlag: boolean = false;
  public responseMsg: string ="";
  public previousComp: string = "";
  private url: string = "/RecipeManager/";

  setRecipe(recipeData: RecipeDetail) {
    this.recipe = recipeData;
  }

  getRecipeDetail() {
    return this.recipe;
  }

  getRecipes(): Observable<any> {
    return this._http.get(this.url + "fetchDetails.html");
  }

  updateRecipeDetails(recipeDet: RecipeDetail): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this._http.post(this.url + "updateDetails", JSON.stringify(recipeDet), options);
  }

  addRecipeDetails(recipeDet: RecipeDetail): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this._http.post(this.url + "addDetails", JSON.stringify(recipeDet), options);
  }

  deleteRecipeDetails(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this._http.post(this.url + "deleteDetails", { "id": id }, options);
  }

  setResponseMessage(text: string) {
    this.responseMsgFlag = true;
    this.responseMsg = text;
  }

  setPreviousComponentState(comp:string){
    this.previousComp = comp;
  }
}
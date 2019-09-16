import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RecipeDetail } from '../recipe-detail';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  public recipeDetail: RecipeDetail;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.recipeDetail = this._data.recipe;
  }

}

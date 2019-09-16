import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { RecipeDetail } from '../recipe-detail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  messageForm: FormGroup;
  public submitted = false;
  returnValue: String;
  
  constructor(private formBuilder: FormBuilder,
    private _dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      recipename: ['', Validators.required],
      servings: ['', Validators.required],
      ingredients: ['', Validators.required],
      recipeCategory: ['', Validators.required],
      instruction: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    var recipeData = new RecipeDetail();
    recipeData.recipe_name = this.messageForm.get('recipename').value;
    recipeData.recipe_servering = this.messageForm.get('servings').value;
    recipeData.recipe_category = this.messageForm.get('recipeCategory').value;
    recipeData.recipe_ingredient = this.messageForm.get('ingredients').value;
    recipeData.recipe_instruction = this.messageForm.get('instruction').value;

    this._dataService.addRecipeDetails(recipeData)
      .subscribe(data => {
        this.returnValue = data.data;
        if (this.returnValue === 'Added') {
          this._dataService.setResponseMessage("Record Added Successfully");
          this._router.navigate(['/home']);
        }
      })
  }
}
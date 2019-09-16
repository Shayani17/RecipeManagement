import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { RecipeDetail } from '../recipe-detail';


@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  returnValue: String;
  response: String = 'Could not Add the data';

  constructor(private formBuilder: FormBuilder,
    private _dataService: DataService) { }

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
    console.log("here", this.messageForm.get('recipename').value);

    var recipeData = new RecipeDetail();
    recipeData.recipe_name = this.messageForm.get('recipename').value;
    recipeData.recipe_servering = this.messageForm.get('servings').value;
    recipeData.recipe_category = this.messageForm.get('recipeCategory').value;
    recipeData.recipe_ingredient = this.messageForm.get('ingredients').value;
    recipeData.recipe_instruction = this.messageForm.get('instruction').value;

    console.log("submit:", recipeData);
    this.success = true;

    this._dataService.addRecipeDetails(recipeData)
      .subscribe(data => {//result
        this.returnValue = data.data;
        console.log('returnValue',this.returnValue);
        if (this.returnValue === 'Added') {
          console.log('Here added',this.returnValue);
          this.response = 'Record Added Successfully';
        }

      })

   
  }


}

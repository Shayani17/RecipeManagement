import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { RecipeDetail } from '../recipe-detail';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  returnValue: String;
  private recipeDetail: RecipeDetail;

  constructor(private formBuilder: FormBuilder,
              private _dataService: DataService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      recipename: ['', Validators.required],
      servings: ['', Validators.required],
      ingredients: ['', Validators.required],
      recipeCategory:['', Validators.required],
      instruction: ['', Validators.required]
    });
    this.recipeDetail = this._dataService.getRecipeDetail();
    this.messageForm.controls['recipename'].setValue(this.recipeDetail.recipe_name);
    this.messageForm.controls['servings'].setValue(this.recipeDetail.recipe_servering);
    this.messageForm.controls['recipeCategory'].setValue(this.recipeDetail.recipe_category);
    this.messageForm.controls['ingredients'].setValue(this.recipeDetail.recipe_ingredient);
    this.messageForm.controls['instruction'].setValue(this.recipeDetail.recipe_instruction);
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }
    console.log("here",this.messageForm.get('recipename').value);

    var recipeData = new RecipeDetail();
      recipeData.recipe_name =this.messageForm.get('recipename').value;
      recipeData.recipe_servering = this.messageForm.get('servings').value;
      recipeData.recipe_category =this.messageForm.get('recipeCategory').value;
      recipeData.recipe_ingredient = this.messageForm.get('ingredients').value;
      recipeData.recipe_instruction =this.messageForm.get('instruction').value;

      console.log("submit:",recipeData);
      this.success = true;
   
    this._dataService.updateRecipeDetails(recipeData)
      .subscribe(data=>
      {//result
        this.returnValue = data;
      })

      if(this.returnValue ==="Added"){
        this.success = true;
      }
}


}

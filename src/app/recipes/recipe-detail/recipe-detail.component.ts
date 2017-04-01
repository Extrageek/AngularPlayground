import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() private _recipe: Recipe;
  public get recipe(): Recipe {
    return this._recipe;
  }
  public set recipe(r: Recipe) {
    this._recipe = r;
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

import { Injectable } from '@angular/core';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private _recipes: Recipe[] = [
    new Recipe('test', 'A test Recipe',
      'https://www.chowstatic.com/blog-media/2015/08/phpThumb_generated_thumbnail18.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('test', 'A test Recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1035651_10.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  public get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  public getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

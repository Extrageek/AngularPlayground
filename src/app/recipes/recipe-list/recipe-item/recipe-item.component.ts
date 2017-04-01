import { RecipeService } from './../../recipe.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

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

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

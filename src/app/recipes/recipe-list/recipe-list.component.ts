import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  _recipes: Recipe[];

  public get recipes(): Recipe[] {
    return this._recipes;
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this._recipes = this.recipeService.recipes;
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  private _recipes: Recipe[] = [
    new Recipe('test', 'A test Recipe', 'https://www.chowstatic.com/blog-media/2015/08/phpThumb_generated_thumbnail18.jpeg'),
    new Recipe('test', 'A test Recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1035651_10.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  public get recipes(): Recipe[] {
    return this._recipes;
  }
}

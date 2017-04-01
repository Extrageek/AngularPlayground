import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() private _recipe: Recipe;
  @Input() private _id: number;

  ngOnInit() {
  }

  public get recipe(): Recipe {
    return this._recipe;
  }
  public set recipe(r: Recipe) {
    this._recipe = r;
  }

  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }
}

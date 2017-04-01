import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from './shopping-list.service';

import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private _ingredients: Ingredient[];
  private _ingredientSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this._ingredients = this.shoppingListService.ingredients;
    this._ingredientSubscription =
      this.shoppingListService.ingredientsChanged.subscribe((newIngredients: Ingredient[]) => {
        this._ingredients = newIngredients;
    });
  }

  ngOnDestroy() {
    this._ingredientSubscription.unsubscribe();
  }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }
}

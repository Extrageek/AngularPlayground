import { Subject } from 'rxjs/Subject';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Crust', 1)
  ];

  public get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }
}

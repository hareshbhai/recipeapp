import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 50),
        new Ingredient('Potato', 20),
        new Ingredient('Tomato', 25)
      ];
      

    getIngredients(){
        return this.ingredients.slice();
    }
    addRecipe(name: string, amount: number){
        this.ingredients.push( new Ingredient(name, amount));
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
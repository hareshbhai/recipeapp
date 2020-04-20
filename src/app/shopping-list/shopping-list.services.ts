import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 50),
        new Ingredient('Potato', 20),
        new Ingredient('Tomato', 25)
      ];
      

    getIngredients(){
        return this.ingredients;
    }
    addRecipe(name: string, amount: number){
        this.ingredients.push( new Ingredient(name, amount));
    }
}
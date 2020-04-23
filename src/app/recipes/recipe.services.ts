import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService{
    receipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Khaman-Dhokla', 
            'This is a recipe for Khaman-Dhokla', 'https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg',
            [
                new Ingredient('Chana-flour', 500),
                new Ingredient('Mirchi', 50)
            ]),
        new Recipe(
            'Dal-Dhokli', 
            'This is a recipe for Dal-Dhokli', 'https://pepkitchen.com/wp-content/uploads/2019/08/Dal_Dhokli.jpg',
            [
                new Ingredient('Wheat-flour', 200),
                new Ingredient('Tuver-Dal', 100) 
            ])
      ];

    getRecipes(){
        // Using slice() method to return deep copy of an arry so any change made to this does not impact recipes array. 
        return this.recipes.slice();
    }
}
import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Khaman-Dhokla', 'This is a recipe for Khaman-Dhokla', 'https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg'),
        new Recipe('Dal-Dhokli', 'This is a recipe for Dal-Dhokli', 'https://pepkitchen.com/wp-content/uploads/2019/08/Dal_Dhokli.jpg')
      ];

    getRecipes(){
        // Using slice() method to return deep copy of an arry so any change made to this does not impact recipes array. 
        return this.recipes.slice();
    }
}
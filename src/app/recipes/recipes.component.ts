import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.services';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.receipeSelected
      .subscribe(
        (recipe: Recipe)=> {
          this.selectedRecipe = recipe;
        }

      );
  }

  onRecipeWasSelected(selected: Recipe){
    console.log("Recipe was selected ==>"+selected);
    this.selectedRecipe = selected;
  }
}

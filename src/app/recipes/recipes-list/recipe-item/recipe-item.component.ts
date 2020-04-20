import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    console.log("Recipe-Item : Selected Item is" + this.recipe.name);
    this.recipeService.receipeSelected.emit(this.recipe);
  }
  

}

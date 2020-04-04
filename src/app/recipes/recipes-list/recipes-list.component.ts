import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Khaman-Dhokla', 'This is a recipe for Khaman-Dhokla', 'https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg'),
    new Recipe('Dal-Dhokli', 'This is a recipe for Dal-Dhokli', 'https://pepkitchen.com/wp-content/uploads/2019/08/Dal_Dhokli.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

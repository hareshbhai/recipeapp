import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 50),
    new Ingredient('Potato', 20),
    new Ingredient('Tomato', 25)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(item: Ingredient){
    this.ingredients.push(item);
  }

}

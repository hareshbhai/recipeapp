import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.services';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static : false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', { static : false}) nameAmountRef : ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.nameAmountRef.nativeElement.value;
    this.shoppingListService.addRecipe(name, amount);
  }


}

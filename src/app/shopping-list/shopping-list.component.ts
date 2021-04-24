import { Component, OnInit } from '@angular/core';
import {IngredientInterface} from '../shared/interfaces/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: IngredientInterface[] = [
    {name: 'Apple', amount: 5},
    {name: 'Tomatoes', amount: 10}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

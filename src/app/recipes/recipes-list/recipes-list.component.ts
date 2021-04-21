import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Simply a Test', 'https://www.eatwell101.com' +
      '/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

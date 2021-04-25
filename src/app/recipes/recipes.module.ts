import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import {RecipesRoutingModule} from './recipes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }

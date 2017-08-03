import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListService } from './app-list.service';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

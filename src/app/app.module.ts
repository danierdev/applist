import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListService } from './app-list.service';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { CategoryComponent } from './category.component';
import { HumanizePipe } from './humanize.pipe';
import { KeepHtmlPipe } from './keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CategoryComponent,
    HumanizePipe,
    KeepHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

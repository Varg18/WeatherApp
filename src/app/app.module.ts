import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownComponent } from './weather/dropdown/dropdown.component';
import { DropdownDirective } from './weather/dropdown/dropdown.directive';
import { SearchFilterPipe } from './weather/dropdown/filter-pipe';
import { BookmarkCardComponent } from './weather/bookmark-card/bookmark-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, WeatherComponent, DropdownComponent, DropdownDirective, SearchFilterPipe, BookmarkCardComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [WeatherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

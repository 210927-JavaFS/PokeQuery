import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeSearchTypeComponent } from './components/poke-search-type/poke-search-type.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchTypeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    HttpClientModule,
    FormsModule
=======
    NgbModule
>>>>>>> 7688f83cd5632b9116d3f5fa66c3aa66c0e5a773
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

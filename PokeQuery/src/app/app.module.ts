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
    NgbModule,
    HttpClientModule,
    FormsModule
<<<<<<< HEAD

=======
>>>>>>> ac6720a543ed568ce2a08c56eb11d593976dab64
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

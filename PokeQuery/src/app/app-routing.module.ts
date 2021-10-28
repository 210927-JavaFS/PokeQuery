import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeSearchTypeComponent } from './components/poke-search-type/poke-search-type.component';

const routes: Routes = [
  { path: 'search', component: PokeSearchTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

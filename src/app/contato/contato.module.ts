import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],

  declarations: [
    ContatoComponent
  ],
  exports: [ContatoComponent]
})
export class ContatoModule { }

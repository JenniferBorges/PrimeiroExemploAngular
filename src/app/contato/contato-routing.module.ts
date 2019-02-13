import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato.component';


@NgModule({
   imports: [
    RouterModule.forChild ([
        { path: 'contato', component: ContatoComponent }
      ])
   ],
   exports: [
    RouterModule
   ]

})
export class ContatoRoutingModule {

}

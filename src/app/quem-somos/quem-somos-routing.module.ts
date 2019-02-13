import { QuemSomosComponent } from './quem-somos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
   imports: [
    RouterModule.forChild ([
        { path: 'quem-somos', component: QuemSomosComponent }
      ])
   ],
   exports: [
    RouterModule
   ]

})
export class QuemSomosRoutingModule {

}

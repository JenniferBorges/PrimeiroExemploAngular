import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NossaVisaoComponent } from './nossa-visao.component';


@NgModule({
   imports: [
    RouterModule.forChild ([
        { path: 'nossa-visao', component: NossaVisaoComponent }
      ])
   ],
   exports: [
    RouterModule
   ]

})
export class NossaVisaoRoutingModule {

}

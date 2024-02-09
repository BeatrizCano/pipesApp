import { NgModule } from '@angular/core';

//import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';



@NgModule({
  exports: [
    // InputTextModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,

  ]
})
export class PrimeNgModule { }

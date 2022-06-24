import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeTableModule } from './employee/modules';
import { EmployeeTableEffects } from './employee/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),

    EffectsModule.forRoot([EmployeeTableEffects]),
    EmployeeTableModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10, 
      logOnly: environment.production, 
      autoPause: true, 
    }),
  ]
})
export class RootStoreModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path :'insurance',  
    loadChildren : () => import('./insurance/insurance.module').then( m => m.InsuranceModule )
  },
  { 
    path :'user',  
    loadChildren : () => import('./user/user.module').then( m => m.UserModule )
  },
  {
    path : 'vehicle',
    loadChildren : () => import('./vehicle/vehicle.module').then( m => m.VehicleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

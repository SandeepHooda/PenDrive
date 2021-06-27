import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {ViewAssetComponent} from './view-asset/view-asset.component'
import {AddAssetComponent} from './add-asset/add-asset.component'


/*
  Add the route paths to navigate to appropriate
  1. /addAsset -> AddAssetComponent
  2. /viewAsset -> ViewAssetComponent
  3. /updateAsset/:assetId -> UpdateAssetComponet; update route gaurd should be applied
  4. In case an Invalid URL is provided, the user must be redirected to the addAsset page.
  */

export const routes: Routes = [
  
    {path: '', component: AddAssetComponent},
    {path: 'add', component: ViewAssetComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

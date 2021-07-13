import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {ViewAssetComponent} from './view-asset/view-asset.component'
import {AddAssetComponent} from './add-asset/add-asset.component'
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { UpdateGuard } from './shared/update.guard';
import { AddAssetComponentTD } from './add-asset-td/add-asset.component';


/*
  Add the route paths to navigate to appropriate
  1. /addAsset -> AddAssetComponent
  2. /viewAsset -> ViewAssetComponent
  3. /updateAsset/:assetId -> UpdateAssetComponet; update route gaurd should be applied
  4. In case an Invalid URL is provided, the user must be redirected to the addAsset page.
  */

export const routes: Routes = [
  
    {path: '', component: AddAssetComponent},
    {path: 'viewAsset', component: ViewAssetComponent},
    {path: 'updateAsset/:Id', canActivate:[UpdateGuard], component: UpdateAssetComponent},
    {path: 'addAssetTD', component: AddAssetComponentTD}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

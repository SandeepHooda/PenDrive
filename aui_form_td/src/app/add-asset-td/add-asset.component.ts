import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  NgForm} from '@angular/forms';
import { AssetService } from '../shared/asset.service';




@Component({
  selector: 'app-add-asset-td',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})


export class AddAssetComponentTD implements OnInit {

  successMessage: string;
  addAssetForm: FormGroup;
  constructor(private fb: FormBuilder, private assetService: AssetService) {
    
  }

  ngOnInit() {
    
    
  }

  addAsset(form : NgForm){
    console.log(form.value["assetName"])
    this.successMessage = ""
    this.assetService.addAsset(form.value).subscribe( data => {
      
      this.successMessage = data.message;
      console.log(data.message)
    }, error => {
      console.log("HTTP addAsset failed: "+error)
    });
     }
   



}





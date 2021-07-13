import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssetService } from '../shared/asset.service';



@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})


export class AddAssetComponent implements OnInit {

  successMessage: string;
  addAssetForm: FormGroup;
  constructor(private fb: FormBuilder, private assetService: AssetService) {
    
  }

  ngOnInit() {
    this.successMessage = ""
    // Add specified validators
    this.addAssetForm = new FormGroup({
      'assetName': new FormControl(null, Validators.required),
      'assetCategory': new FormControl('', Validators.required),
      'assetDescription': new FormControl(null, [Validators.required, Validators.maxLength(50) ]),
      'dateOfPurchase': new FormControl(null, [Validators.required, validateDateOfPurchase]),
      'assetCost': new FormControl(null,Validators.required)

    });
    
  }


  /*
It should invoke addAsset() method of AssetService by passing addAssetForm object as a parameter.
The success callback should populate the successMessage with the message in response
*/

  addAsset() {
    this.successMessage = ""
    this.assetService.addAsset(this.addAssetForm.value).subscribe( data => {
      
      this.successMessage = data.message;
      console.log(data.message)
    }, error => {
      console.log("HTTP addAsset failed: "+error)
    });
  }

}


/*
  Add Custom Validation for dateOfPurchase
*/

 function validateDateOfPurchase(control: FormControl) :{[s:string]:boolean} {
  
   let validation = null
   if (control.value != undefined && control.value.length != 10){
    validation = {'invalidDate': true};
   }else
  if (control.value  != undefined  && control.value.length == 10){
    let d =  new Date( Date.parse(control.value));
    if (isNaN(d.getTime())) { 
      console.log("invalid date");
      validation = {'invalidDate': true};
    }else {
      if (d.getTime() > new Date().getTime()){
        validation = {'futureDateNotAllowed': true};
      }
    }
  }
  return validation;
 
 
}


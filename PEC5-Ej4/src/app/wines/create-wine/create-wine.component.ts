import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Wine } from "../../models/wine";
import { validName } from './validatorName';

@Component({
  selector: 'app-create-wine',
  templateUrl: './create-wine.component.html',
  styleUrls: ['./create-wine.component.scss']
})
export class CreateWineComponent implements OnInit {
 

  constructor(private fb: FormBuilder) { }

   wineForm = this.fb.group({
    wineName: ['', [Validators.required, validName()]],
    winePrice: ['', [Validators.required,Validators.min(1)]],
    wineUrl: ['', [Validators.required, Validators.pattern("(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)")]]
  });


  onSubmit(){
    console.log(this.wineForm.value); 
  }
  ngOnInit(): void {
  }

}

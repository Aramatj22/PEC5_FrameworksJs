import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validName(): ValidatorFn {

    return (control:AbstractControl): {[key:string]:boolean} | null => {
        if (control.value.trim() =="Laya" || control.value.trim() =="K-Naina" ||control.value.trim() =="Verdejo" ||control.value.trim() =="Monastrell" 
        ) {
            return null
            
        } else {
            return {'invalidName':true}
            
        }
    }
    
}
import { AbstractControl, AbstractControlOptions, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class SignupValidators {
    static hasSpaces(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >=0) 
            return { hasSpaces : true };     
        return null;    
    }
    static passwordsMatch(control: AbstractControl) : ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if(newPassword?.value !== confirmPassword?.value)
            return ({ passwordsMatch : true });
        return null;
    }
    static notUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === "alex")
                    resolve({ notUnique : true });
                else
                    resolve(null);
            }, 2000)
        });
    }
    static incorrect(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== "1234")
                    resolve({ incorrect : true });
                else
                    resolve(null);
            }, 2000)
        });
    }
}


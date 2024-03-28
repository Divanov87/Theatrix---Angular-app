import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(

    passwordControlName: string,
    repeatPasswordControlName: string

): ValidatorFn {
    
    return (control) => {
        
        const passwordFormControl = control.get(passwordControlName);
        const repeatPasswordFormControl = control.get(repeatPasswordControlName);
        const matched = passwordFormControl?.value == repeatPasswordFormControl?.value;

        return matched ? null : { matchPasswordsValidator: true };
    };
}
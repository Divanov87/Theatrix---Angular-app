import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
    
    const validDomain = domains.join('|');
    // const validEmail = new RegExp(`/^[a-zA-Z0-9.]{3,}@(gmail|abv|mail)\.(${validDomain})$/`);
    const validEmail = new RegExp(`[A-Za-z0-9.]+@(gmail|abv|mail)\.(${validDomain})`);
    
    return (control) => {
        const isEmailInvalid = validEmail.test(control.value);
        if (!isEmailInvalid) {
            return { emailValidator: true };
        } else return null;
    };
}
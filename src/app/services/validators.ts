import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenWordsValidator(forbiddenWords: string[]): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const hasForbiddenWord = forbiddenWords.some((word) =>
      control.value.includes(word)
    );

    return hasForbiddenWord
      ? { forbiddenWords: { value: control.value } }
      : null;
  };
}

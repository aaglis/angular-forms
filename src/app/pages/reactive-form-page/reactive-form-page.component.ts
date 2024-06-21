import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-form-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-page.component.html',
  styleUrl: './reactive-form-page.component.scss'
})
export class ReactiveFormPageComponent {

  //forma antiga
  // constructor(private formBuilder: FormBuilder)

  //forma nova

  formBuilder = inject(FormBuilder)

  formSended = false
  arrayTechs = signal<string[]>(['Angular', 'React', 'Vue', 'NextJs'])

  registerForm = this.formBuilder.group({
    name: ['', Validators.minLength(5)],
    email: ['', [Validators.minLength(5), Validators.email]],
    password: ['', Validators.minLength(5)],
    gender: [''],
    mainTech: ['']
  })

  submitForm() {
    if(this.registerForm.valid) {
      this.formSended = true
      console.log(this.registerForm.value)
    } else {
      return console.error('Formulário incompleto. Termine de preencher os dados');
      
    }
  }

}

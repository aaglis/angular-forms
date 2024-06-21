import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-driven-form-page',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './template-driven-form-page.component.html',
  styleUrl: './template-driven-form-page.component.scss'
})
export class TemplateDrivenFormPageComponent {
  formSended = false
  arrayTechs = signal<string[]>(['Angular', 'React', 'Vue', 'NextJs'])

  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    mainTech: ''
  }

  submitForm() {
    this.formSended = true
    console.log(this.user)
  }
  
}

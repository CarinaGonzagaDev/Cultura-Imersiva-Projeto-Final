import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink } from "@angular/router"
import { ErrosFormComponent } from '../erros-form/erros-form.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ErrosFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

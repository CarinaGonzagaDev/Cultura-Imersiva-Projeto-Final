import { Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
];

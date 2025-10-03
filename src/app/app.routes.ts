import { Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./login/login.component";
import { HqsComponent } from "./pages/hqs/hqs.component";
import { AnimeComponent } from "./pages/anime/anime.component";

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent},
    { path: 'animes', component: AnimeComponent },
    { path: 'hqs', component: HqsComponent },
];

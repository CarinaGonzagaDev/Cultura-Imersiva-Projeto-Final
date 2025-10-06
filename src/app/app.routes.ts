import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HqsComponent } from "./pages/hqs/hqs.component";
import { AnimeComponent } from "./pages/anime/anime.component";
import { LoginComponent } from "./pages/login/login.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { TermosDeUsoComponent } from "./pages/termos-de-uso/termos-de-uso.component";
import { PoliticaDePrivacidadeComponent } from "./pages/politica-de-privacidade/politica-de-privacidade.component";

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent},
    { path: 'animes', component: AnimeComponent },
    { path: 'hqs', component: HqsComponent },
    { path: 'termos-de-uso', component: TermosDeUsoComponent },
    { path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent },
];
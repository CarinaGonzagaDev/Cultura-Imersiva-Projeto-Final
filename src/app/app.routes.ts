import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimeComponent } from './components/anime/anime.component';
import { HqsComponent } from './components/hqs/hqs.component';
import { MeuFavoritosComponent } from './components/meu-favoritos/meu-favoritos.component';
import { TopAvaliadosComponent } from './components/top-avaliados/top-avaliados.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "anime", component: AnimeComponent},
    {path: "hqs", component: HqsComponent},
    {path: "meuFavoritos", component: MeuFavoritosComponent},
    {path: "topAvaliados", component: TopAvaliadosComponent}
];

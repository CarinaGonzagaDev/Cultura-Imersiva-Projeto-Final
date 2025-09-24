import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimeComponent } from './components/anime/anime.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "anime", component: AnimeComponent},
];

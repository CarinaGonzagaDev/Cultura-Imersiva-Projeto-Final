import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimeComponent } from './components/anime/anime.component';
import { HqsComponent } from './components/hqs/hqs.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "anime", component: AnimeComponent},
    {path: "hqs", component: HqsComponent},
];

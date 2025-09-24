import { Component } from '@angular/core';
import { HeaderComponent } from '../pasta-header/header/header.component';

@Component({
  selector: 'app-anime',
  imports: [HeaderComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent {
   
 anosDisponiveis: number[] = [];
 generosDisponiveis: string[] = [];

 ngOnInit(): void {
   // 1. Lógica para inicializar os anos
   const anoAtual = new Date().getFullYear();
   const anoFim = 1990;

   for (let ano = anoAtual; ano >= anoFim; ano--) {
     this.anosDisponiveis.push(ano);
   }

   // 2. Lógica para inicializar os gêneros
   this.generosDisponiveis = [
     'Ação',
     'Aventura',
     'Fantasia',
     'Romance',
     'Comédia',
     'Drama',
     'Ecchi',
     'Harém',
     'Slice of Life',
     'Kadomo',
     'Shonen',
     'Shoujo',
     'Seinen',
     'Josei',
     'Terror',
     'Terror Psicológico',
     'Misterio',
     'Ficção Científica',
     'Isekai'
   ];
 }
}

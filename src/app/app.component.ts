import { Component } from '@angular/core';
import { IGameData } from './interfaces/igame-data';
import { MatTable } from '@angular/material/table';

const GAME_DATA: IGameData[] = [
  {
    id: 1,
    title: 'Rocket League',
    developer: 'Psyonix',
    dateCreated: new Date(),
  },
  {
    id: 2,
    title: 'Doom',
    developer: 'id Software',
    dateCreated: new Date(),
  },
  {
    id: 3,
    title: 'Undertale',
    developer: 'Toby Fox',
    dateCreated: new Date(),
  },
  {
    id: 4,
    title: 'Fallout: New Vegas',
    developer: 'Obsidian Studios',
    dateCreated: new Date(),
  },
  {
    id: 5,
    title: 'Portal 2',
    developer: 'Valve',
    dateCreated: new Date(),
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'MatTable';
}

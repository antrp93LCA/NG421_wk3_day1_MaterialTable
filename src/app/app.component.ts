import { Component, ViewChild, OnInit } from '@angular/core';
import { IGameData } from './interfaces/igame-data';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  GAME_DATA: IGameData[] = [
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
    },
  ];
  displayedColumns: string[] = ['id', 'title', 'developer', 'dateCreated'];
  dataSource:MatTableDataSource<IGameData>;
  
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.GAME_DATA);
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

import { Component, ViewChild, OnInit } from '@angular/core';
import { IGameData } from './interfaces/igame-data';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material';
import { GameDataService } from './services/game-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'title', 'developer', 'dateCreated'];
  dataSource:MatTableDataSource<IGameData>;
  
  constructor(private dataService: GameDataService){

  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.GAME_DATA);
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

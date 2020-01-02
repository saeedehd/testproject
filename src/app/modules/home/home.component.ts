import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from '../../services/projects.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Project>([]);
	constructor(private ProjectsService: ProjectsService) {
    this.displayedColumns = ['ID', 'Name', 'Status' ,'Planned Start', 'Planned Finish', 'Actual Start', 'Actula Finish', 'Planned Progress', 'Actual Progress'];
		this.ProjectsService.showPojects().subscribe((response) => {
			this.dataSource.data = response.Result;
    });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from '../../services/projects.service';
import { InsertdialogComponent } from './insertdialog/insertdialog.component';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Project>([]);
  insertedProjects : Project[];
  id = 3;
  constructor(private ProjectsService: ProjectsService , public dialog: MatDialog) { 
    this.displayedColumns = ['ID', 'Name', 'Status' ,'Planned Start', 'Planned Finish', 'Actual Start', 'Actula Finish', 'Planned Progress', 'Actual Progress'];
    this.ProjectsService.showPojects().subscribe((response) => {this.dataSource.data = response.Result;}); 
  }

  ngOnInit() {
  }
	openDialog() {
    const dialogRef = this.dialog.open(InsertdialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      this.ProjectsService.showPojects().subscribe((response) => {this.insertedProjects = response.Result;});
      this.insertedProjects.push(result);
      this.insertedProjects[this.insertedProjects.length-1].projectId=`${this.id}`;
      this.id++;
      this.dataSource = new MatTableDataSource(this.insertedProjects); 
    });
  }

}

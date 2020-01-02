import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from '../../services/projects.service';
import { UpdateBottomComponent } from './update-bottom/update-bottom.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Project>([]);
  editedProjects : Project[];
	constructor(private ProjectsService: ProjectsService , public dialog: MatDialog) {
    this.displayedColumns = ['ID', 'Name', 'Status' ,'Planned Start', 'Planned Finish', 'Actual Start', 'Actula Finish', 'Planned Progress', 'Actual Progress', 'Action'];
	this.ProjectsService.showPojects().subscribe((response) => {this.dataSource.data = response.Result;});
}
  ngOnInit() {
  }
	openDialog(project: Project) {
    const dialogRef = this.dialog.open(UpdateBottomComponent, {
      data:project
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ProjectsService.showPojects().subscribe((response) => {this.editedProjects = response.Result;});
      for (var i in this.editedProjects) {
        if (this.editedProjects[i].projectId == result.projectId) {
          this.editedProjects[i]= result;
          console.log(this.editedProjects);
           break; //Stop this loop, we found it!
        }
      }
      this.dataSource = new MatTableDataSource(this.editedProjects); 
    });
  }

}

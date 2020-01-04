import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-update-bottom',
  templateUrl: './update-bottom.component.html',
  styleUrls: ['./update-bottom.component.scss']
})
export class UpdateBottomComponent implements OnInit {
formGroup: FormGroup;
enability_options =[0,1,2,3];
local_data:any;


constructor (
    private projectService: ProjectsService,
    public dialogRef: MatDialogRef<UpdateBottomComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      this.local_data = {...data};
      this.create_formGroup();
      if (data) {
        this.formGroup.patchValue(data);
      }
      
    }

    private create_formGroup() {
      this.formGroup = new FormGroup({
        projectId: new FormControl(),
        name: new FormControl(''),
        planStartDate: new FormControl(''),
        planFinishDate: new FormControl(''),
        actualStartDate: new FormControl(''),
        actualFinishDate: new FormControl(''),
        planProgress: new FormControl(''),
        actualProgress: new FormControl(''),
        status: new FormControl(''),
      });
    }
  
    ngOnInit() {
    }
    update(): void {
      this.projectService.updateProject(this.formGroup.value);
      this.dialogRef.close(this.formGroup.value);
    }
      cancel(){
        this.dialogRef.close();
      }
  }


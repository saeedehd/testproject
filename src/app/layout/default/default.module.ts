import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatButtonToggleModule, MatBottomSheetModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDialogModule } from '@angular/material';

import { InsertComponent } from 'src/app/modules/insert/insert.component';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { EditComponent } from 'src/app/modules/edit/edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material';
import { ProjectStatusPipe } from '../../pipes/project-status.pipe';
import { UpdateBottomComponent } from '../../modules/edit/update-bottom/update-bottom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertdialogComponent } from 'src/app/modules/insert/insertdialog/insertdialog.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    EditComponent,
    InsertComponent,
    ProjectStatusPipe,
    UpdateBottomComponent,
    InsertdialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [ UpdateBottomComponent , InsertdialogComponent]
})
export class DefaultModule { }

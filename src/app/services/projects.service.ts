import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsInfo } from '../mocks/projectsInfo.mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  	constructor(private http: HttpClient) { }

  	showPojects() : Observable<{ Result: Project[] }> {
		return this.http.get<{ Result: Project[] }>(`${environment.server_ip}`);
	}
	getProject(id: string): Observable<Project> {
		return this.http.get<{ Result: Project }>(`${environment.server_ip}/project/${id}`)
			.pipe(map((i) => i.Result));
	}

	updateProject(model: Project): Observable<Project> {
		console.log(model)
		return this.http.patch<Project>(`${environment.server_ip}/edit/${model.projectId}`, model);
		
	}

}

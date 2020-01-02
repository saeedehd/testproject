import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { ProjectsInfo } from '../mocks/projectsInfo.mock-data';

export class ProjectServiceEditInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.includes('/edit/') && request.method.toLocaleLowerCase() == 'patch') {
            const id = request.url.split('/').pop();
            const selected_project = ProjectsInfo.Result.find((i) => i.projectId == id);
            console.log(selected_project );
			return of(new HttpResponse({ status: 200, body: { Result: selected_project  }, url: request.url }));
		}
		else {
			return next.handle(request);
		}
	}
}

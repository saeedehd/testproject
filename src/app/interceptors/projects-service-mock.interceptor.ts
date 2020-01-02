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

export class ProjectsServiceMockInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.endsWith('')) {
			return of(new HttpResponse({ status: 200, body: ProjectsInfo, url: request.url }));
		}
		else {
			return next.handle(request);
		}
	}
}

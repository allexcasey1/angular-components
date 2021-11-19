import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import {catchError, retry, map } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

export class DataService {
  constructor( private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
        .pipe(
            map(response => response),
            retry(1),
            catchError(this.handleError)
      )
  }
  create(resource: any) {
    return this.http.post(this.url.toString(), JSON.stringify(resource))
        .pipe(
            map(response => JSON.stringify(response)),
            retry(1),
            catchError(this.handleError)
    )
  }
  update(resource: any) {
    return this.http.patch(this.url.toString() + "/" + resource.id, JSON.stringify(resource))
        .pipe(
            map(response => JSON.stringify(response)),
            retry(1),
            catchError(this.handleError)
      )
  }
  delete(id: any) {
    return this.http.delete(this.url.toString() + '/' + id)
        .pipe(
            map(response => JSON.stringify(response)),
            retry(1),
            catchError(this.handleError)
      ) 
  }
  private handleError(error: any) {
    if (error.status === 404)
      return throwError(new NotFoundError(error));
    if (error.status === 400)
      return throwError(new BadInput(error));
    return throwError(error);
  }
}
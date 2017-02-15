import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Blog } from './classes/blog';
import { Observable } from 'rxjs/Observable';

console.log('this is service');

@Injectable()
export class BlogsService {
  private url = 'http://localhost:3000/api/find/all?counts=4';

  constructor (private http: Http) {}

  getBlogs(): Promise<Blog[]> {
    return this.http.get(this.url)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log('res', res.json())
    return res.json();
  }

  private handleError (error: Response | any) {

  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ImageModel } from '../model/image.model';


const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class ImageService {
  private ImagesUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) { }

  getImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>(this.ImagesUrl)
  }

}
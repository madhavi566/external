import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvailableData } from './models/availableData';


@Injectable()
export class DetailsService {

  constructor(private http: HttpClient) { }

  url = '';

  postRequest(body): Observable<AvailableData[]> {
    return this.http.post<AvailableData[]>(this.url, body);
  }
}
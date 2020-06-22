import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Museum } from '../models/museum/museum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchMuseums(): Observable<Museum[]> {
    let museumsObservable: Observable<Museum[]> = this.httpClient.get<Museum[]>('http://localhost:3000/museums');
    return museumsObservable;
  }

  public fetchMuseumById(museum_id: string): Observable<Museum[]> {
    let museumsIdObservable: Observable<Museum[]> = this.httpClient.get<Museum[]>('http://localhost:3000/museums/' + museum_id);
    return museumsIdObservable;
  }
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Beer} from '../models/beers';

@Injectable()
export class AppSettingsService {
  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<Beer[]> {
    return this.http.get<Beer[]>('../../assets/beers.json');
  }
}

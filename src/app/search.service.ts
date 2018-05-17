import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private http:Http) { }
    getFlightData():Observable<any>{
      return this.http.get('./assets/data.json').map((response)=>response)
    }
}

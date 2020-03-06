import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UserData} from '../user-data/user-data';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public apiURL = 'api/users';
    public headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    public httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) {

    }

    private handleError(error: any) {
        console.error(error);

        return throwError(error);
    }

    public getUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiURL).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }
}

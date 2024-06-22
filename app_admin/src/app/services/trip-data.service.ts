import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  url = 'http://localhost:3000/api';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/trips');
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url + '/trips', formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/trips/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/trips/' + formData.code, formData);
  }

  deleteTrip(tripCode: string) : Observable<Trip> {
    return this.http.delete<Trip>(this.url + '/trips/' + tripCode)
  }

  public login(user: User): Promise<AuthResponse> {
    console.log("login() make API call.")
    return this.makeAuthApiCall('login', user);
  }
  
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  
  private async makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
      console.log("makeAuthApiCall() get response");
      const url: string = `${this.url}/${urlPath}`;
      var obj = this.http.post(url, user);
      return await firstValueFrom(obj).then(response => response as AuthResponse);
    }
}

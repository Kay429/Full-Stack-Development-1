import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {
  
  @Input('trip') trip: any;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService,
    private tripDataService: TripDataService) {}

  ngOnInit(): void {
      
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    console.log("Navigating to edit-trip...");
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {

    this.tripDataService.deleteTrip(trip.code)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
}

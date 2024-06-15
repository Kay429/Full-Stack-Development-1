import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

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

  constructor(private router: Router, private tripDataService: TripDataService) {}

  ngOnInit(): void {
      
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    console.log("Navigating to edit-trip...");
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    //localStorage.removeItem('tripCode');
    //localStorage.setItem('tripCode', trip.code);
    //this.router.navigate(['delete-trip']);
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

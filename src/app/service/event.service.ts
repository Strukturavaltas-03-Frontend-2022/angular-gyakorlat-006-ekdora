import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Array<Event> = [
    {
      name: 'Santa Claus',
      date: '2022.12.06.',
      time: '18:00',
      location: {
        address: 'Santa`s House',
        city: 'Santa Claus Village',
        country: 'Lapland',
      },
    },
    {
      name: 'Christmas',
      date: '2022.12.25.',
      time: '20:00',
      location: {
        address: 'Betlehem',
        city: 'Judaea',
        country: 'Holy Land',
      }
    },
    {
      name: 'New Year`s Eve',
      date: '2022.12.31.',
      time: '22:00',
      location: {
        address: 'all street',
        city: 'all city',
        country: 'all country',
      }
    },
  ];

  constructor() { }

  getAll(): Array<Event> {
    return this.events;
  };
}

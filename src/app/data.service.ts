import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Raghava", description: "contact me on this email", email: "venkata.potula@gmail.com"},
    {id: 2, name: "Thota Ramesh", description: "contact me on this email", email: "Thota@rocketmail.com"},
    {id: 3, name: "Mahesh", description: "contact me on this email", email: "mahesh@nextech.com"},
    {id: 4, name: "Jalil", description: "contact me on this email", email: "jalil@nextech.com"}
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {
      Email: "bill@gates.com",
      Importance: true,
      Subject: "New Windows",
      Content: 'Windows XI will launch in year 2100',
    },
    {
      Email: "ada@lovelace.com",
      Importance: true,
      Subject: "Programming",
      Content: "Enchantress of Numbers",
    },
    {
      Email: "john@carmac.com",
      Importance: false,
      Subject: "Updated Algo",
      Content: "New algo for shadow volumes",
    },
    {
      Email: "phil@newel.com",
      Importance: false,
      Subject: "HL3!",
      Content: "Just Kidding...",
    }
  ]
}

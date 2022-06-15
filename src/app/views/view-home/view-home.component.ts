import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css'],
})
export class ViewHomeComponent implements OnInit {
  stats = [
    {
      value: 22,
      label: '# no of users',
    },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];
  items = [
    {
      url: 'assets/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic Couch',
    },
    {
      url: 'assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

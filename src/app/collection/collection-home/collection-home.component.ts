import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent implements OnInit {
  data = [
    { name: 'Rafia', age: 23, job: 'Soft Engineer' },
    { name: 'Zoma', age: 23, job: 'Soft Engineer' },
    { name: 'Rafiya', age: 23, job: 'SQA Engineer' },
  ];
  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    { key: 'job', label: 'Job' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

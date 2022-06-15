import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css'],
})
export class ModalHomeComponent implements OnInit {
  modalOpen = false;
  accordian = [
    {
      title: 'Why sky is blue?',
      content: 'Because of Air',
    },
    {
      title: 'What does an orange taste like?',
      content: 'like an orange',
    },
    {
      title: 'Which Fruit is called the King of All fruits?',
      content: 'Mango',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}

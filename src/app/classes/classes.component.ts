import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  title = 'app';
  Classes = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'},
    {id:4, name:'D'},
    {id:5, name:'E'},
    {id:6, name:'F'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

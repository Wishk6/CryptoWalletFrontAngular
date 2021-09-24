import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  genders = ["male","female","shemale"]

  update = {
    firstname : "",
    gender : ""
  }
  ngOnInit(): void {
  }

  //submit alert si firstname == "" and reset update
testUpdate() {

  this.update.firstname == "" || this.update.firstname == null ? console.log("error firstname") : console.log('updated firstname'),this.update.firstname = "";
  
  this.update.gender == "" || this.update.gender == null ? console.log("error gender") : console.log('updated gender'),this.update.gender = "";
  


}
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lomake',
  templateUrl: './lomake.component.html',
  styleUrls: ['./lomake.component.css']
})
export class LomakeComponent implements OnInit {

  @Output() valmis = new EventEmitter<any>();

  nimi: string;
  supersankari: string;

  vaihtoehdot: string[] = [
    "Superhessu",
    "jotain",
    "Wonder Woman",
    "Teräsmies" ];

  constructor() { }

  ngOnInit() {
  }

  laheta() {
    console.log("Nimi:", this.nimi, "Supersankari:", this.supersankari);
    this.valmis.emit({
      nimi: this.nimi,
      supersankari: this.supersankari
    });
  }


}

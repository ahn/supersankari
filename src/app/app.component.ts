import { Component } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jotain muuta';
  supersankari: string;

  constructor(private dataService: DataService) {}

  onValmis($event: any) {
    this.supersankari = $event.supersankari;
    this.dataService.postSupersankari($event.nimi, $event.supersankari)
      .then(function() {
        alert("tallennettiin");
      }).catch(function(err) {
        alert("ei onnistunut");
      });
  }
}

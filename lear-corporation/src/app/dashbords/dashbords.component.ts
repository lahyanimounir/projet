import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashbords',
  templateUrl: './dashbords.component.html',
  styleUrls: ['./dashbords.component.css']
})
export class DashbordsComponent implements OnInit {
data;
  constructor(private httpClient: HttpClient) {
    }

  ngOnInit() {
  	this.getData();
  }

  getData() {
    this.httpClient
      .get<any[]>('http://localhost/industriel/api/test/read.php')
      .subscribe(
        (response) => {
          this.data = response;
         console.log(this.data)
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
}

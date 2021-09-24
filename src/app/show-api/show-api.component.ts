import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// mettre un output dans le child et y envoyer le sum calculé dans le parent func async ? 
// faire apparaitre le button quand la data est updted 
@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.scss']
})
export class ShowApiComponent implements OnInit {
  cryptoObj: any;
  lis: any[] = [];
  data: any;  //  à changer
  trading = 300;
  dollars = 0;

  constructor(private http: HttpClient) {
  }
  //fait la somme des pnl et des valeurs en dur
  sumTheoric() {
    let sum = this.trading + this.dollars;
    (this.cryptoObj != null ?
      this.cryptoObj.forEach((element: any) => {
        sum += element.TheoricPnl + element.InvestInDollars;
      }
      ) : console.log("wait"));
    this.data = Math.round(sum);
  }
  ngOnInit(): void {
    this.http.post<any>('http://localhost:3000/api/v1/cryptoPrice', {}) // arg vide 
      .subscribe(Response => {
        if (Response) {
          hideloader();
        }
        this.cryptoObj = Response;
        this.sumTheoric();
      });

    // cache le "loading" function visible par tous 
    function hideloader() {
      let dataLoaded = document.getElementById('loading');
      dataLoaded != null ? dataLoaded.style.display = 'none' : 'errorHiding';
    }
  }
}

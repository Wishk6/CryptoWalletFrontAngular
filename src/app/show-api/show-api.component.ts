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
  trading = 320;
  dollars = 0;
  
  constructor(private http: HttpClient) {
  }
  //fait la somme des pnl et des valeurs en dur
  sumTheoric() {
    let sum = this.trading + this.dollars;
    (this.cryptoObj != null ?
      this.cryptoObj.forEach((element: any) => {
        sum += parseInt(element.theoricPnl) + parseInt(element.investInDollars);
      }
      ) : console.log("wait"));
    this.data = Math.round(sum);
  }

//Loading... handler
  hideloader() {
    let dataLoaded = document.getElementById('loading');
    dataLoaded != null ? dataLoaded.style.display = 'none' : 'errorHiding';
  }


  ngOnInit(): void {
 
    this.http.post<any>('http://localhost:3000/api/v1/cryptoData', {}) // arg vide 
      .subscribe(Response => {
        if (Response) {
          this.hideloader();
          this.cryptoObj = Response;
          this.sumTheoric();
        }
      });
  }
}

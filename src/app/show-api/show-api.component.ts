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
  data: any;  //  à changer
  trading = 320;
  dollars = 641;
  sum: any;

  constructor(private http: HttpClient) {
  }
  //fait la somme des pnl et des valeurs en dur
  sumTheoric() {
    let sum = this.trading + this.dollars;
    this.cryptoObj != null ?
      this.cryptoObj.forEach((element: any) => {
        sum += parseInt(element.theoricPnl) + parseInt(element.investInDollars);
      }
      ) : console.log("wait");
    this.data = Math.round(sum);
  }

  //Loading... handler
  hideloader() {
    let dataLoaded = document.getElementById('loading');
    dataLoaded != null ? dataLoaded.style.display = 'none' : 'flex';
  }
  //get cryptoData
 getCryptoData() {

    this.http.post<any>('http://localhost:3000/api/v1/cryptoData', {})
      .subscribe(Response => {
        if (Response) {
          this.cryptoObj = Response;
          this.sumTheoric();
          this.hideloader();
         
        } else {
          console.log('"error get')
        }
      })
  }

  ngOnInit(): any {
  //  this.getCryptoData();
    this.http.post<any>('http://localhost:3000/api/v1/cryptoData/update', {})
    .subscribe(Response => {
      if (Response) {
        this.getCryptoData();
      }
    })
  }
}


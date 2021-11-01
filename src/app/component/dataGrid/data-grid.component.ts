import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  cryptoObj: any;
  data: any;  //  à changer
  trading = 320;
  dollars = 641;
  sum: any;
  userconnected : any;

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
   // this.getCryptoData();
  //   this.http.post<any>('http://localhost:3000/api/v1/cryptoData/update', {})
  //   .subscribe(Response => {
  //     if (Response) {
  //       this.getCryptoData();
  //     }
  //   })
   }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptodataService {
url : string = "https://cryptocrawler.guillaumesaurin.com";
// url : string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  private cryptoData: any;

  getCryptoDatabyUserId(data: any) {
    return this.http.post<any>(this.url + '/api/cryptoData', data)
      .pipe(map(userData => {
        return userData;
      }));
  }

  insertCryptoData(data: any) {
    return this.http.post<any>(this.url +'/api/cryptoData/insert', data)
    .pipe(map(userData => {
      return userData;
    }));
  }

  updateCryptoData(data: any) { /* faire un object qui contient tous les names present dans la grid actuelle  pour pouvori update les bons */
    return this.http.post<any>(this.url +'/api/cryptoData/update', data)
      .pipe(map(userData => {
        return userData;
      }));
  }



  deleteCryptoData(data: any) {
    return this.http.post<any>(this.url +'/api/cryptoData/delete', data)
      .pipe(map(userData => {
        return userData;
      }));
  }
  set UserData(dataObj: any) {
    this.cryptoData = dataObj;
  }

  get UserData(): any {
    return this.cryptoData;
  }
}

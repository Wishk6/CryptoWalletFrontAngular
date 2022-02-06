import { Component, OnInit } from '@angular/core';

import { CryptodataService } from 'src/app/service/cryptodata.service';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss', './data-grid2.component.scss']
})
export class DataGridComponent implements OnInit {
  cryptoObj: any;
  cryptoName: any;
  cryptoQt: any;
  dols: any;
  id: any;
  inUpdate: boolean = false;
  sum: any;
  cryptoAvailable = [
    'Bitcoin', 'Ethereum',
    'Binance-Coin', 'Cardano',
    'Solana', 'XRP', 'Polkadot-New',
    'Terra-Luna', 'Avalanche',
    'Uniswap', 'Chainlink',
    'Litecoin', 'Polygon',
    'Algorand', 'Vechain',
    'Cosmos', 'Theta',
    'PancakeSwap',
    'The-Graph', 'Elrond-egld',
    'Chiliz', 'Swissborg',
    'Wax', 'Band-Protocol',
    'Augur', 'Alien-Worlds',
    'Ternoa', 'Xsl-Labs',
    "Myneighboralice",
    "FTX-token",
    "Binance-USD"
  ]
  open: boolean = false;

  constructor(private dataService: CryptodataService, private userSerivce: UserService, private notifService: NotificationService) {
  }

  async ngOnInit(): Promise<any> {
    this.id = sessionStorage.getItem('id');
    await this.getCryptoData();
  }

  openSelect() {
    this.cryptoAvailable.sort(function (a, b) { // sort asc order 
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;
    });

    this.open ? this.open = false : this.open = true;
  }


  // total actual wallet value 
  sumTheoric() {
    let sum = 0;
    this.cryptoObj != null ?
      this.cryptoObj.forEach((element: any) => {
        sum += parseInt(element.theoricPnl) + parseInt(element.investInDollars);
      }
      ) : console.log("wait");
    this.sum = sum;
    this.userSerivce.userPnl = sum;
  }

  // add data 
  addCrypto() {

    this.cryptoName != undefined && this.cryptoQt != undefined ?
      this.dataService.insertCryptoData([{ name: this.cryptoName, investInCrypto: this.cryptoQt, investInDollars: this.dols, id: this.id }])
        .subscribe((res) => {
          this.notifService.showSuccess(this.cryptoName + " added");
          this.getCryptoData();
        },
          err => {
            console.log(err.error);
          }) : this.notifService.showError(" Please enter correct values");
  }

  //get data
  async getCryptoData() {

    await this.dataService.getCryptoDatabyUserId({ where: { id: this.id }, order: 'CAST(`position` AS UNSIGNED) ASC' })
      .subscribe((res) => {
        this.cryptoObj = res; // an array on the data 
        this.dataService.UserData = this.cryptoObj; // set data in our service 
        this.sumTheoric();
      },
        err => {
          console.log(err.error)
        });
  }

  //update
  async updateData() {
    if (!this.inUpdate) {
      this.inUpdate = true;
      this.dataService.deleteCryptoData(
        {
          where: {
            id: this.id, // delete all user data 
          }
        }).subscribe(() => {
        },
          err => {
            console.log(err.error);
          });

      let index = 0;

      for (let key of this.dataService.UserData) { // boucle dans notre data actuelle 

        this.dataService.insertCryptoData([
          {
            name: key.name, investInCrypto: key.investInCrypto.toString(),
            investInDollars: key.investInDollars.toString(),
            id: this.id
          }
        ])
          .subscribe(() => {
            index++;

            if (index == this.dataService.UserData.length) {
              this.inUpdate = false;
              this.getCryptoData();
              this.notifService.showSuccess("Data updated");
              this.sumTheoric();
            }
          }, err => {
            let index = 0;
            this.cryptoObj = this.dataService.UserData; // reset arr to not loose data  
            for (let key of this.dataService.UserData) { // boucle dans notre data actuelle 

              this.dataService.insertCryptoData([
                {
                  name: key.name, investInCrypto: key.investInCrypto.toString(),
                  investInDollars: key.investInDollars.toString(),
                  id: this.id
                }
              ])
                .subscribe(() => {
                  index++;
      
                  if (index == this.dataService.UserData.length) {
                    this.inUpdate = false;
                    this.getCryptoData();
                    this.notifService.showWarning("I can't scrap, i probably need an update : https://github.com/Wishk6/CryptoWalletFrontAngular");
                    this.sumTheoric();
                  }
                }, err => {
                  this.cryptoObj = this.dataService.UserData; // reset arr to not loose data  
                  console.log(err.error);
                  this.notifService.showError("Error update + error insert data to not lose it");
      
                });
            }
            console.log(err.error);
            this.notifService.showError("Error while updating");

          });
      }
    }
  }
  //delete 
  deleteData(data: any) { // index of cryptoObj 

    this.dataService.deleteCryptoData(
      {
        where: {
          id: this.id,
          name: this.cryptoObj[data].name,
          "convert(investInCrypto,character)": (this.cryptoObj[data].investInCrypto.toString()), // handle float in sql
          investInDollars: this.cryptoObj[data].investInDollars
        }

      }).subscribe((res) => {
        // re get la data pour que l'user puisse voir le changement
        this.dataService.UserData == undefined;
        this.getCryptoData()
      },
        err => {
          console.log(err.error)
        });
  }
}


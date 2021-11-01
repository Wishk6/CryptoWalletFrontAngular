import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-crypto',
  templateUrl: './select-crypto.component.html',
  styleUrls: ['./select-crypto.component.scss']
})
export class SelectCryptoComponent implements OnInit {

  cryptoAvailable = [
    'Bitcoin', 'Ethereum',
    'Binance-Coin', 'Cardano',
    'Solana', 'XRP', 'Polkadot',
    'Terra-Luna', 'Avalanche',
    'Uniswap', 'Chainlink',
    'Litecoin', 'Polygon',
    'Algorand', 'Vechain',
    'Cosmos', 'Theta',
    'PancakeSwap',
    'The-Graph',
    'Chiliz', 'Swissborg',
    'Wax', 'Band-Protocol',
    'Augur', 'Alien-Worlds',
    'Ternoa', 'Xsl-Labs'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

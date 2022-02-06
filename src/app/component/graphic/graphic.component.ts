import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})

export class GraphicComponent implements OnInit, AfterViewInit {

  date: string = "";

  constructor() { }

  ngOnInit() {
    this.date = new Date().toString().substring(4,25);
    setInterval(() => {         //replaced function() by ()=>
      this.date = new Date().toString().substring(4,25);
    }, 1000);
  }

  ngAfterViewInit() {

    new TradingView.widget(
      {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "240",
        "timezone": "Europe/Paris",
        "theme": "dark",
        "style": "1",
        "locale": "fr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "hide_side_toolbar": false,
        "save_image": false,
        "container_id": "tradingview_widget"
      })
  }



}
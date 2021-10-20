import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Alert, AlertType } from "./alert/alert.module";

@Injectable({ providedIn: "root" })
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = "default-alert";

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        type: AlertType.Success,
        message,
        displayAnimation: false,
      })
    );
  }

  error(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        type: AlertType.Error,
        message,
        displayAnimation: false,
      })
    );
  }

  info(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        type: AlertType.Info,
        message,
        displayAnimation: false,
      })
    );
  }

  warn(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        type: AlertType.Warning,
        message,
        displayAnimation: false,
      })
    );
  }

  // main alert method
  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }));
  }
}


// import {
//   Component,
//   OnInit,
//   OnDestroy,
//   Input,
//   ViewEncapsulation,
// } from "@angular/core";
// import { Router, NavigationStart } from "@angular/router";
// import { Subscription } from "rxjs";

// import { Alert, AlertType } from "../../../models/alert.model";
// import { AlertService } from "../../services/alert.service";

// @Component({
//   selector: "alert",
//   templateUrl: "alert.component.html",
//   styleUrls: ["alert.component.css"],
//   encapsulation: ViewEncapsulation.None,
// })
// export class AlertComponent implements OnInit, OnDestroy {
//   @Input() id = "default-alert";
//   @Input() fade = true;
//   @Input() customClass = "";

//   alerts: any[] = [];
//   alertSubscription?: Subscription;
//   routeSubscription?: Subscription;

//   constructor(private router: Router, private alertService: AlertService) {}

//   ngOnInit() {
//     this.alertSubscription = this.alertService
//       .onAlert(this.id)
//       .subscribe((alert) => {
//         if (!alert.message) {
//           this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);
//           this.alerts.forEach((x) => delete x.keepAfterRouteChange);
//           return;
//         }
//         alert.customClass = this.customClass;
//         this.alerts.push(alert);
//         setTimeout(() => {
//           alert.displayAnimation = true;
//           setTimeout(() => {
//             this.removeAlert(alert);
//           }, 4000);
//         }, 300);
//       });

//     this.routeSubscription = this.router.events.subscribe((event) => {
//       if (event instanceof NavigationStart) {
//         this.alertService.clear(this.id);
//       }
//     });
//   }

//   ngOnDestroy() {
//     // unsubscribe to avoid memory leaks
//    this.alertSubscription ? this.alertSubscription.unsubscribe() : null
//    this.routeSubscription ? this.routeSubscription.unsubscribe(): null
//   }

//   removeAlert(alert: Alert) {
//     // check if already removed to prevent error on auto close
//     if (!this.alerts.includes(alert)) return;

//     if (this.fade) {
//       // fade out alert
//   this.alerts.find((x) => x === alert).fade = true

//       // remove alert after faded out
//       setTimeout(() => {
//         this.alerts = this.alerts.filter((x) => x !== alert);
//       }, 250);
//     } else {
//       // remove alert
//       this.alerts = this.alerts.filter((x) => x !== alert);
//     }
//   }

//   getIconClass(alert: Alert) {

//     let classes = ["icon-type"];
//     const alertIconTypeClass = {
//       [AlertType.Success]: "fas fa-check",
//       [AlertType.Error]: "fas fa-times",
//       [AlertType.Info]: "fas fa-info",
//       [AlertType.Warning]: "fas fa-exclamation-triangle",
//     };

//    typeof alert.type != "undefined" ?  classes.push(alertIconTypeClass[alert.type]) :null

//     return classes.join(" ")

//   }

//   cssClass(alert: Alert) {
//     if (!alert) return;
//     const classes = ["alert-dismissable"];

//     const alertTypeClass = {
//       [AlertType.Success]: "customAlert alert-success",
//       [AlertType.Error]: "customAlert alert-danger",
//       [AlertType.Info]: "customAlert alert-info",
//       [AlertType.Warning]: "customAlert alert-warning",
//     };

//     typeof alert.type != "undefined" ?  classes.push(alertTypeClass[alert.type]) : null

//     if (alert.customClass != "") {
//       typeof alert.customClass != "undefined" ?     classes.push(alert.customClass) : null
//     }

//     if (alert.fade) {
//       classes.push("fade");
//     }

//     return classes.join(" ");
//   }
// }
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { Subscription } from "rxjs";
import { AlertService } from "../alert.service";

import { Alert, AlertType } from "./alert.module";

@Component({
  selector: "alert",
  templateUrl: "alert.component.html",
  styleUrls: ["alert.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = "default-alert";
  @Input() fade = true;
  @Input() customClass = "";

  alerts: any[] = [];
  alertSubscription?: Subscription;
  routeSubscription?: Subscription;

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService
      .onAlert(this.id)
      .subscribe((alert) => {
        if (!alert.message) {
          this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);
          this.alerts.forEach((x) => delete x.keepAfterRouteChange);
          return;
        }
        alert.customClass = this.customClass;
        this.alerts.push(alert);
        setTimeout(() => {
          alert.displayAnimation = true;
          setTimeout(() => {
            this.removeAlert(alert);
          }, 4000);
        }, 300);
      });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
   this.alertSubscription ? this.alertSubscription.unsubscribe() : null
   this.routeSubscription ? this.routeSubscription.unsubscribe(): null
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      // fade out alert
  this.alerts.find((x) => x === alert).fade = true

      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter((x) => x !== alert);
    }
  }

  getIconClass(alert: Alert) {

    let classes = ["icon-type"];
    const alertIconTypeClass = {
      [AlertType.Success]: "fas fa-check",
      [AlertType.Error]: "fas fa-times",
      [AlertType.Info]: "fas fa-info",
      [AlertType.Warning]: "fas fa-exclamation-triangle",
    };

   typeof alert.type != "undefined" ?  classes.push(alertIconTypeClass[alert.type]) :null
    console.log(classes, alert.type);
    return classes.join(" ")

  }

  // cssClass(alert: Alert) {
  //   if (!alert) return;
  //   const classes = ["alert-dismissable"];

  //   const alertTypeClass = {
  //     [AlertType.Success]: "customAlert alert-success",
  //     [AlertType.Error]: "customAlert alert-danger",
  //     [AlertType.Info]: "customAlert alert-info",
  //     [AlertType.Warning]: "customAlert alert-warning",
  //   };

  //   typeof alert.type != "undefined" ?  classes.push(alertTypeClass[alert.type]) : null

  //   if (alert.customClass != "") {
  //     typeof alert.customClass != "undefined" ?     classes.push(alert.customClass) : null
  //   }

  //   if (alert.fade) {
  //     classes.push("fade");
  //   }

  //   return classes.join(" ");
  // }
  cssClass2(alert: Alert){
  if (!alert) return;
  const classes = ["alert-dismissable"];

  const alertTypeClass = {
    [AlertType.Success]: "alert alert-custom alert-light-success fade show mb-5",
    [AlertType.Error]: "alert alert-custom alert-light-danger fade show mb-5",
    [AlertType.Info]: "alert alert-custom alert-light-info fade show mb-5",
    [AlertType.Warning]: "alert alert-custom alert-light-warning fade show mb-5",
  };

  typeof alert.type != "undefined" ?  classes.push(alertTypeClass[alert.type]) : null

  if (alert.customClass != "") {
    typeof alert.customClass != "undefined" ?     classes.push(alert.customClass) : null
  }

  if (alert.fade) {
    classes.push("fade");
  }

  return classes.join(" ");
}


 cssSvg(alert: Alert) {
    if (!alert) return;
    const classes = ["alert-dismissable"];

    const alertTypeClass = {
      [AlertType.Success]: "svg-icon svg-icon-success svg-icon-5x",
      [AlertType.Error]: "svg-icon svg-icon-danger svg-icon-5x",
      [AlertType.Info]: "svg-icon svg-icon-info svg-icon-5x",
      [AlertType.Warning]: "svg-icon svg-icon-warning svg-icon-5x",
    };

    typeof alert.type != "undefined" ?  classes.push(alertTypeClass[alert.type]) : null

    if (alert.customClass != "") {
      typeof alert.customClass != "undefined" ?     classes.push(alert.customClass) : null
    }

    if (alert.fade) {
      classes.push("fade");
    }

    return classes.join(" ");
  }
}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NotificationService } from 'src/app/service/notification.service';
import { CryptodataService } from 'src/app/service/cryptodata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: any;
  mdp: any;
  pseudo: any;
  exist: any = false;
  newEmail: any;
  newPassword: any;
  newNickname: any;
  @Output() connectionEvent = new EventEmitter<string>();
  userConnected: any;
  modalClicked: any;
  dataPath : any = false;

  constructor(private userService: UserService, private notificationService: NotificationService, private dataService: CryptodataService, private router : Router) { } // alert services in header 


  async ngOnInit(): Promise<void> {
    
    this.router.url.includes("data") ? this.dataPath = true : this.dataPath = false; //check actual path 

    this.pseudo = await sessionStorage.getItem('pseudo');
    sessionStorage.getItem('connected') !== null ? this.userConnected = this.userConnected = true : this.userConnected = false;

  }


  async signInFunc() {

    await this.userService.loginUser({ email: this.email, mdp: this.mdp })

      .subscribe((res) => {

        sessionStorage.setItem('connected', 'yes');
        sessionStorage.setItem('email', res[0].email);
        sessionStorage.setItem('pseudo', res[0].pseudo);
        sessionStorage.setItem('id', res[0].id);
        this.userConnected = true;
        this.connectionEvent.emit(res[0]);
        this.pseudo = res[0].pseudo;

        this.notificationService.showSuccess('Hello ' + this.pseudo);

      }, err => {
        console.log(err.error,"test");
        this.notificationService.showError('Please retry identification');

      });
  }

  signOutFunc() {

    sessionStorage.clear();
    this.connectionEvent.emit("disconnected");
    this.userConnected = false;
    this.notificationService.showInfo("Bye Bye");

  }

  testUsers() {
      
    if (this.newEmail != undefined && this.newPassword != undefined && this.newNickname != undefined) {
      this.userService.getUser({  //test if pseudo already exist 
        "only": ["email"]
      })
        .subscribe((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].email == this.newEmail) {
              this.notificationService.showError("This Username is already used.");
              this.exist = true;
              i = res.length - 1;
            } else {
              this.exist = false;
            }
          }
          this.signUpFunc(); // exec sign in after setting exist 
        }, (err => {
          console.log(err.error);
        })
        );
    } else { // if emptyy 
      this.notificationService.showWarning("Enter correct values.");
      this.exist = true;
    }
  }

  async signUpFunc() {

    if (!this.exist) {
      this.userService.insertUser({ email: this.newEmail, pseudo: this.newNickname, mdp: this.newPassword })
        .subscribe(() => {
          this.notificationService.showInfo("Welcome " + this.newNickname);
          this.email = this.newEmail;
          this.mdp = this.newPassword;
          this.closeModal();
          this.signInFunc();
        }, (err) => {
          console.log(err.error);
        });
    }
  }


  openModal() {

    this.modalClicked = true;
  }

  closeModal() {
    this.modalClicked = false;
  }

  
}

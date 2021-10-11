import { Component, OnInit } from '@angular/core';
import { ItemService } from './user-services.service';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.scss']
})
export class UserTestComponent implements OnInit {
  
  user :any;
  
  constructor(private objectUser : ItemService) { }

  async ngOnInit() {
   this.user = await this.objectUser.getItem({}).toPromise( );
    console.log(this.user);
  }

}

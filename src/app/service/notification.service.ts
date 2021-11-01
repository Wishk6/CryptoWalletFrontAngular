import { Injectable } from '@angular/core';
import { ToastrIconClasses } from '../../../node_modules/ngx-toastr/toastr/toastr-config'
import { ToastrService } from 'ngx-toastr';
   
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toasterClass: any;
   
  constructor(private toastr: ToastrService) { }
   
  showSuccess(message: string | undefined){
      this.toastr.success(message);
  }
   
  showError(message: string | undefined){

      this.toastr.error(message)
  }
   
  showInfo(message: string | undefined){
      this.toastr.info(message)
  }
   
  showWarning(message: string | undefined){
      this.toastr.warning(message)
  }
   
}
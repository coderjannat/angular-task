import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
userName: string;
userEmail: string;
userAddress: string;
userArray: Array<any> =[ ];

onClick(){
  this.userArray.push({
    "name": this.userName,
    "email": this.userEmail,
    "address": this.userAddress
  });
  console.log(this.userArray)
}

onDelete(i){
  this.userArray.splice(i, 1)
}

}

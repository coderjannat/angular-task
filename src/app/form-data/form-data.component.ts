import { Component } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent {
  postTitle:string;
  postDetail:string;
  imageURL: string;
  postURL: string;
  addBackground:boolean;
}

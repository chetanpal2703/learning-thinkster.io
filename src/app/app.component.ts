import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  btnText="unvote";
  showBtnText="Vote";
  isSelected=-1;
  showhiddentext=true;

  constructor(public service:ServiceService){
   
  }
  onclick(selected:any,event:any){
    if(event.target.innerText=="unvote")
      this.isSelected=-1;
    else
      this.isSelected=selected;
    
  }
  
 
  
}


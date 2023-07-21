import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepper-project';

  count: number = 1;

  bubbles: number[] = [1, 2, 3, 4, 5];

  tests:string = "try one !";


  prev() {
    this.count = this.count - 1;
  }

  next():void {
    this.count++;
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Container, Input, Output Assignment';
  currentDate: Date;
  isChildActive: boolean;
  parentMessage: string;  // Define parentMessage here

  constructor() {
    // Initialize currentDate with the current date
    this.currentDate = new Date();
    this.isChildActive = true;  // Set this value
    this.parentMessage = 'Hello from Parent!';  // Initialize parentMessage
  }

  // Method to receive the message from the child
  onChildMessageReceived(message: string) {
    console.log('Received from child: ', message);
    this.isChildActive = !this.isChildActive; // Toggle child active status
  }
}

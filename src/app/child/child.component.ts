import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentMessage: string = '';
  @Input() isChildActive: boolean = false;  // This will come from parent

  @Output() childMessage: EventEmitter<string> = new EventEmitter();

  sendMessageToParent() {
    this.childMessage.emit('Hello Parent! I am the child component.');
    console.log('Message sent to parent');
    this.isChildActive = !this.isChildActive; // Toggle the child active state
  }
}

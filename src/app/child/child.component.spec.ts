import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';
import { EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChildComponent', () => {
  let fixture: ComponentFixture<ChildComponent>;
  let component: ChildComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent], // Declare the child component
    });

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should receive parentMessage via @Input', () => {
      // Set the input value
      component.parentMessage = 'Hello from Parent!';
      fixture.detectChanges();

      // Get the <h2> element and check if it displays the correct parentMessage
      const messageElement = fixture.nativeElement.querySelector('h2');
      expect(messageElement.textContent).toBe('Hello from Parent!');
    });

    it('should display the initial isChildActive value via @Input', () => {
      // Set the input value
      component.isChildActive = true;
      fixture.detectChanges();

      // Get the <p> element and check if it displays the correct isChildActive value
      const statusElement = fixture.nativeElement.querySelector('p');
      expect(statusElement.textContent).toContain('Child component active: true');
    });

    it('should toggle isChildActive value when sendMessageToParent is clicked', () => {
      // Initially, isChildActive is false
      component.isChildActive = false;
      fixture.detectChanges();

      // Get the button element and click it
      const button = fixture.nativeElement.querySelector('button');
      button.click();

      // Check if the isChildActive value is toggled
      expect(component.isChildActive).toBe(true); // It should be toggled to true
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component'; // Make sure the child component is declared
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, ChildComponent],  // Declare the child component here
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the AppComponent', () => {
            expect(component).toBeTruthy();
        });

        it('should initialize parentMessage, currentDate, and isChildActive correctly', () => {
            expect(component.parentMessage).toBe('Hello from Parent!');
            expect(component.isChildActive).toBe(true);
            expect(component.currentDate).toBeInstanceOf(Date);  // Ensure currentDate is a Date object
        });

        it('should pass the correct data to the child component via @Input', () => {
            const childComponent = fixture.debugElement.query(By.css('app-child')).componentInstance;

            // Check if the parentMessage is passed to the child
            expect(childComponent.parentMessage).toBe(component.parentMessage);
            expect(childComponent.isChildActive).toBe(component.isChildActive);
        });

        it('should toggle the child active state when the button is clicked', () => {
            // Initially, isChildActive should be true
            expect(component.isChildActive).toBe(true);

            // Simulate a button click in the child component
            const button = fixture.nativeElement.querySelector('button');
            button.click();

            // After the click, the state should toggle to false
            expect(component.isChildActive).toBe(false);
        });

        it('should display the correct formatted date in the template', () => {
            const dateElement = fixture.nativeElement.querySelector('p');
            const formattedDate = component.currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            expect(dateElement.textContent).toContain(formattedDate);
        });
    });
});

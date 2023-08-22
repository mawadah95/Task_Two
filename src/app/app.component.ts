import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'To Do List';
  subtitle: string = 'Write something to do in the form';
  userInput: string='';
  todoList: string[] = ['Study Angular', 'Add one elememt', 'Correct typo'];

  onSubmit(): void {
    console.log(this.userInput);
    this.todoList = this.todoList.concat(this.userInput);
  }


  
  deleteItem(userInput: string) {
    this.todoList = this.todoList.filter(item => item !== userInput);
  }
  //onDelete(itemToDelete: string): void {
  // this.todoList = this.todoList.filter((item) => item !== itemToDelete);
 // }
  

  
  //textInput: string = '';
 // isInputInvalid: boolean = false;

  //validateTextInput() {
    // Check for invalid input length
  //  if (this.textInput.length < 4 || this.textInput.length > 200) {
   //   this.isInputInvalid = true;
   // } else {
   //   this.isInputInvalid = false;
   // }
  //}
  textInput: string = '';
  isInputInvalid: boolean = false;

  validateTextInput() {
    // Check for invalid input length
    if (this.textInput.length < 4 || this.textInput.length > 200) {
      this.isInputInvalid = true;
    } else {
      // Check for special characters using regular expression
      if (/^[a-zA-Z0-9\s]*$/.test(this.textInput)) {
        this.isInputInvalid = false;
      } else {
        this.isInputInvalid = true;
      }
    }

  }
}

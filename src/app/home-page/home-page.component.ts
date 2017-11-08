import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import {AF} from "./../providers/af";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewChecked {

  public newMessage: string;
  public testName: string;
  public messages: FirebaseListObservable<any>;
  public items: FirebaseListObservable<any>;
   @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }
  
  sendMessage(){
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  testData(){
    this.afService.testData(this.testName);
    this.testName = '';
  }
  constructor(public afService: AF) {
	this.messages = this.afService.messages;
	this.items = this.afService.items;
	
	
  }

  ngOnInit() {
  
  }
  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }
  clicked: string = null;

    sideNavClick(clicked: string): void {
        this.clicked = this.clicked == clicked ? null : clicked;
    }

}

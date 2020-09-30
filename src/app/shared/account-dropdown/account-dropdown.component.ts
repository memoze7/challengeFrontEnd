import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss']
})
export class AccountDropdownComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit(): void { }

}

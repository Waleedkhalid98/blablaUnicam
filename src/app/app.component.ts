import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, HeaderComponent]
})
export class AppComponent implements OnInit {
  title = 'porcodio';

  isNavbarVisible: boolean = false;

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  ngOnInit(): void {
    initFlowbite();
  }


  
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  
}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderActive: boolean = false;
  isNavbarActive: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderActive = window.scrollY >= 10;
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
    document.body.classList.toggle("active");
  }
}

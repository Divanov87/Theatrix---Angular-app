import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isGoTopActive: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isGoTopActive = window.scrollY >= 500;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

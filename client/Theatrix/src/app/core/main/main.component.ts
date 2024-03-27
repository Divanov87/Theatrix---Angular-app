import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Theatrix'

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      this.renderer.selectRootElement(searchInput).focus();
    }
  }
}


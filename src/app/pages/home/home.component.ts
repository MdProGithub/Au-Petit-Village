import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const image = document.getElementById('bandeBD');
    if (image) {
      image.style.transform = `translateX(${scrollY * -0.2}px)`;
    }
  }
}
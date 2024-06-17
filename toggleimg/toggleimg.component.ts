import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimg',
  templateUrl: './toggleimg.component.html',
  styleUrl: './toggleimg.component.css'
})
export class ToggleimgComponent {

  imageUrl: string = "https://th.bing.com/th/id/OIP.Nfd-_b2A1A1D6AsvReUmgAHaEc?w=258&h=180&c=7&r=0&o=5&pid=1.7";
  imageName: string = "sunny";
  isAlternate: boolean = false;
  alternateImage: string = "https://th.bing.com/th/id/OIP.limoLyohz9TSnwnOH7n64gHaE8?w=273&h=182&c=7&r=0&o=5&pid=1.7";
  alternateText: string = "model";

  toggleImage() {
    this.isAlternate = !this.isAlternate;
    if (this.isAlternate) {
      this.imageUrl = this.alternateImage;
      this.imageName = this.alternateText;
    } else {
      this.imageUrl = "https://th.bing.com/th/id/OIP.Nfd-_b2A1A1D6AsvReUmgAHaEc?w=258&h=180&c=7&r=0&o=5&pid=1.7";
      this.imageName = "sunny";
    }
  }

}

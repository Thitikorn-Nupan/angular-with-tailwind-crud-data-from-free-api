import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  protected isDropdownClicked : boolean = false
  // optional
  protected enteringOrLeaving: string = "";

  protected onDropdownClicked() {
    this.isDropdownClicked = !this.isDropdownClicked
    if (this.isDropdownClicked) {
      this.enteringOrLeaving = "transform opacity-100 scale-100"
    }else {
      this.enteringOrLeaving = "transform opacity-0 scale-95"
    }
  }
}

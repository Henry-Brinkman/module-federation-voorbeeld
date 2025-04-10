import {Component, signal} from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  imports: [RouterModule, NgIf],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'angular-shell';
  showModal = signal<boolean>(false);

  public toggleModal(): void {
    this.showModal.set(!this.showModal());
  }
}

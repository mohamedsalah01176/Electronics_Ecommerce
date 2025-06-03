import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SppinerComponent } from "./component/sppiner/sppiner.component";
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SppinerComponent, NgxSpinnerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}

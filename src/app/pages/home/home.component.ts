import { Component } from '@angular/core';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  imports: [SmallCardComponent, MenuBarComponent, MenuTitleComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

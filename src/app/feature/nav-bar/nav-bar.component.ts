import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  title = 'Dungeons-and-Rulesets';
}

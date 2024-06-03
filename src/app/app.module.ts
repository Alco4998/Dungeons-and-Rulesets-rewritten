import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatList, MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ProfilePageComponent } from './feature/Users/profile-page/profile-page.component';
import { HomeModule } from './feature/home/home.module';
import { CampaignModule } from './feature/campaign/campaign.module';
import { CharacterModule } from './feature/character/character.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavBarComponent } from './feature/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CampaignModule,
    CharacterModule,
    HomeModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    RouterOutlet,
    ScrollingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout'
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignLinkComponent } from './campaign-link/campaign-link.component';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CharacterModule } from '../character/character.module';
import { RestHelperService } from 'src/app/Common/data-service/rest-helper.service';

@NgModule({
  declarations: [
    CampaignDetailsComponent,
    CampaignLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule,
    CharacterModule,
  ],
  providers: [RestHelperService],
  exports: [
    CampaignDetailsComponent,
    CampaignLinkComponent,
  ]
})
export class CampaignModule { }

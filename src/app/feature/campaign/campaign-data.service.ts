import { Injectable, inject as Inject } from '@angular/core';
import { Campaign } from './campaign';
import { of } from 'rxjs';

/**
 * provides an interface for calling campaign data from server
 * 
 * TODO: Reimplement Restful service after major changes broken current non-dummy version
 */
@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {
  private campaigns: Campaign[] = [
    {
      campaign_id: 1,
      name: "Campaign 1",
      description: "",
      players: [
        {campaign_id:1 ,character_id: 1}, 
        {campaign_id:1 ,character_id:2}, 
        {campaign_id:1 ,character_id:3}
      ]
    }
  ]

  constructor(
    // private restHelperService: RestHelperService,
    // private http: HttpClient,
  ) { }

  public getCampaignsAll() {
    return of(this.campaigns)
    // return this.restHelperService.get<Campaign>(CampaignRequest.readAll)
  }

  public getCampaignById(campaignId: number) {
    // TODO: Update for Demo
    // return this.restHelperService.get<Campaign>(CampaignRequest.read + id).pipe(
    //   map((items) => {
    //     if (!items) { return; }
    //     return items[0]
    //   })
    // );
    let campaign = this.campaigns.find(c => c.campaign_id == campaignId)
    return of(campaign)
  }

  public getCharactersByCampaignId(campaignId: number) {
    let campaign = this.campaigns.find(c => c.campaign_id == campaignId)
    return of(campaign!.players)
    // return this.restHelperService.get<Character>(CampaignRequest.readCharacters + campaignId);
  }

  public updateCampaign(campaign: Campaign) {
    let index = this.campaigns.findIndex(c => c.campaign_id == campaign.campaign_id)
    this.campaigns[index] = campaign
    return of(campaign)
    // return this.restHelperService.put<Campaign>(CampaignRequest.readCharacters + campaign.campaign_id, campaign);
  }
}

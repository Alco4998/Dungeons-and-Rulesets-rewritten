import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from '../character-data.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss']
})
export class CharacterDetailsComponent implements OnChanges, OnInit {
  public character?: Character;
  public isEditing = false;

  constructor(
    private characterDataService: CharacterDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const character_Id = this.route.snapshot.params["id"]
    this.characterDataService.getCharacterById(character_Id)
      .subscribe((items) => this.character = items);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const character_Id = this.route.snapshot.params["id"]
    this.characterDataService.getCharacterById(character_Id)
      .subscribe((items) => this.character = items);
  }

  public get characterHealthPercent() {
    if (this.character?.statistics?.hitpoints && this.character?.statistics?.hitpoints_max) {
      return (this.character?.statistics?.hitpoints / this.character?.statistics?.hitpoints_max) * 100
    }
    else
    {
      throw Error("Character Statistics is undefined or null")
    }
  }

  public DebugLog(){
    console.log(this.character)
  }
}

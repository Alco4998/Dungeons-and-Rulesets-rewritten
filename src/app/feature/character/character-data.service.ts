import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHelperService } from 'src/app/Common/data-service/rest-helper.service';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Character } from './models/character';
import { CharacterRequest } from './models/character-requests';
import { Ability } from './models/ability'
import { of } from 'rxjs';

/**
 * provides an interface for calling character data from server
 * 
 * TODO: Reimplement Restful service after major changes broken current non-dummy version
 */
@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private characters: Character[] = [
    {
      character_id: 1,
      campaign_id: 1,
      name: "Telvias",
      statistics: {
        abilities: [
          {
            ability_score_id: 1,
            name: "Strength",
            score: 10,
            offset: 0
          },
          {
            ability_score_id: 1,
            name: "Dexterity",
            score: 12,
            offset: 0
          },
          {
            ability_score_id: 1,
            name: "Constitution",
            score: 14,
            offset: 0
          },
          {
            ability_score_id: 1,
            name: "Dexterity",
            score: 20,
            offset: 0
          },
          {
            ability_score_id: 1,
            name: "Wisdom",
            score: 14,
            offset: 0
          },
          {
            ability_score_id: 1,
            name: "Charisma",
            score: 9,
            offset: -1
          },
        ],
        hitpoints: 39,
        hitpoints_max: 39,
      }
    },
    {
      character_id: 2,
      campaign_id: 1,
      name: "grindlwall",
      statistics: {
        abilities: [
          {
            ability_score_id: 2,
            name: "Strength",
            score: 11,
            offset: 0
          }
        ]
      }
    }]
  constructor(
    // public restHelperService: RestHelperService,
    // private http: HttpClient
  ) { }

  public getAllCharacters() {
    return of(this.characters);
    // return this.restHelperService.get<Character>(CharacterRequest.readAll)
  }

  public getCharacterById(id: number) {
    return of(this.characters.find(c => c.character_id == id));
    //   return this.restHelperService.get<Character>(CharacterRequest.read + id.toString())
    //     .pipe(
    //       map((items) => items ? items[0] : undefined),
    //       map((character) => {
    //         if (!character) {
    //           throw new Error("Cannot Find Character")
    //         }
    //         if (!character.abilities) {
    //           return;
    //         }

    //         // Oracle won't let us return a normal JSON object so we have to turn the JSON string to the object
    //         character.abilities = JSON.parse(character.abilities as unknown as string) as Ability[];
    //         return character
    //       }),
    //     )
  }
}

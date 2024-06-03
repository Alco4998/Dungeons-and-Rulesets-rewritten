import { Ability } from "./ability"
import { CharacterStatistics } from "./character-Statistics"

/**
 * Definition for the Player Character
 * Player character is currently specific to some who plays that character
 * but this will be expanded to include NPCs
 * 
 * @property {Number} character_id - Unique Id for the character
 * @property {Number} campaign_id - Linking Id to link characters to campaigns the are apart of
 * @property {String} name - name of the character
 * @property {Ability[]} Abilities - A Normalised version of attributes a character has for example: Strength
 * @property {CharacterStatistics} Statistics - A sub-object of character that hold common data and optional extras that are generic
 */

export class Character {
    character_id!: number
    campaign_id!: number
    name?: string
    statistics?: CharacterStatistics
    
    // Character details WIP
    /* characterExtras?: CharacterExtra
    inventory?: CharacterInventory */
}
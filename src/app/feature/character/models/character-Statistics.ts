import { Ability } from "./ability"
import { Feature } from "./feature"
import { PlayerClass } from "./player-class"
import { Bonus } from "./bonus"
import { Race } from "./race"
import { Skill } from "./skill"

/**
 * Character Statistics
 * 
 * This stores all the complicated details of the character.
 * This is present so that there is no separate linking ID external to the character
 * the character will have all of the relevant data upfront and then this can be retrieved later for more detail
 * 
 * @class Character Statistics
 * 
 * @property {number} hitpoints_max - Max number of hitpoints this character can have
 * @property {number} hitpoints - number of hitpoints this character has
 * @property {Ability[]} abilities -all of the major stats this character has. In D&D 5e this one of these would be 'Strength'
 * @property {Skill[]} skills - all the minor stats a character has. In D&D 5e of these would be 'Slight of Hand'
 * @property {Race} race - this is race of character and has any associated modifiers that would go along with this (Strength for example)
 * @property {Bonus} bonuses -a generic list of bonuses that this character has
 * @property {number} proficiency_bonus - a modifier that is applied to all the characters bonuses
 * @property {PlayerClass} class - stores the characters attributes related to their parties roles
 * @property {Feature} feature - stores the characters that are misc compared to their class or race
 */

export class CharacterStatistics {
    hitpoints_max?: number
    hitpoints?: number
    abilities?: Ability[]
    skills?: Skill[]
    race?: Race
    bonuses?: Bonus[]
    proficiency_bonus?: number
    class?: PlayerClass
    features?: Feature[]
}
import { Bonus } from "./bonus"

export class Feature {
    name!: string
    description?: string
    bonuses?: Bonus[]
}
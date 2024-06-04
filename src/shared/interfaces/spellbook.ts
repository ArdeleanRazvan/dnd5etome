import { Spell } from "./spell";

export interface Spellbook {
  name: string | undefined;
  id: string;
  spells: Spell[];
  isSelected: boolean;
  jsonFileName: string;
  isLoaded: boolean;
}

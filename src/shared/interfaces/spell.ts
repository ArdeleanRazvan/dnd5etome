export interface Spell {
  name: string; // name of spell
  source: string; // source material of spell
  page: number; // page number where the spell is found in source material
  srd: boolean | string; // is part of system reference document(SRD)
  basicRules: boolean; // is part of basic rules
  level: number; // level of the spell
  school: string; // school of magic
  subschool: string; // subschool of magic
  time: Array<SpellTime>; // casting options
  range: SpellRange; // spell range
  components: SpellComponents; // spell components
  duration: Array<SpellDuration>; // spell duration
  entries: Array<Entry | string>; // spell text paragraphs
  entriesHigherLevel: Array<Entry>; // higher level text
  scalingLevelDice: ScalingLevelDice; // how the spell scales at higher leves
  conditionInflict: Array<string>; // conditions that are applied after cast
  savingThrow: Array<string>; // saving throw used
  affectsCreatureType: Array<string>; //creatures affected by the spell
  damageInflict: Array<string>; // damage type inflicted
  canSelectDamageType: boolean; // if spell can do different types of damage
  damage: Array<Damage>; //array with damage types and values
  abilityCheck: Array<string>; // ability checks needed for spell
  meta: Meta; // prerequisites
  damageResist: Array<string>; // damage resists the spell gives
  conditionImmune: Array<string>; // condition immunities the spell gives
  damageImmune: Array<string>; // spells that give you damage immunities
  areaTags: Array<string>; // Not Known
  spellAttack: Array<string>; // spell attack
  otherSources: Array<Source>; // other sources
  damageVulnerable: Array<string>; // spells that give damage vulnerability
  additionalSources: Array<Source>; // other sources where the spell is found
}

export interface Damage {
  type: string; // type of damage
  value: string; // value in die rolls
  conditional: boolean; // if DC saving throw is needed
}

interface Source {
  source: string; // source name
  page: number; // page number where spell is found
}

interface Meta {
  ritual: boolean; // is ritual spell
}

interface SpellTime {
  number: number; // number of times the action/reaction can be used
  unit: string; // minutes | hour | bonus | action | reaction
}

interface SpellRange {
  type: string; // point | sphere | special | radius | line | hemisphere | cube | cone
  distance: SpellDistance;
}

interface SpellDistance {
  type: string; // feet | self | point | sight | touch | unlimited
  amount: number;
}

interface SpellComponents {
  s: boolean; // is somatic component required
  m: string | Material; // required material component
  v: boolean; // is verbal spell
  r: boolean; // don't know
}

interface Material {
  text: string; // text of material
  cost: number; // cost of material
  consume: boolean; // is the material consumed on use
}

interface SpellDuration {
  type: string; // instant | timed | special | permanent
  duration: Duration;
}

interface Duration {
  type: string;
  amount: number;
}

interface Entry {
  type: string;
  entries: Array<string>;
  by: string;
}

interface ScalingLevelDice {
  label: string;
  scaling: Scaling;
}
interface Scaling {
  1: string; // level 1 : xDiceValue
  5: string; // level 5 : xDiceValue
  11: string; // level 11 : xDiceValue
  17: string; // level 17 : xDiceValue
}

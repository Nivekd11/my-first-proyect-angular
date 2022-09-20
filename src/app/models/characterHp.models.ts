export interface CharacterHp{
    name: string,
    hp: number,
    live: boolean,
    skills: string[],
    color: string,
    healthPoints: number,
    showHP():void
}
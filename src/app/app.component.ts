import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { CharacterHp } from './models/characterHp.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){
    console.log("Hola mundo");
    this.arraysAndObjects();
    this.whileStatement();
  }

  basicTypes(){

    const VIDEO_GAME= 'Smash Bros';
    console.log(VIDEO_GAME);

    let characterName : String = 'Mario';
    console.log(characterName);

    let hp: number = 100;
    console.log(hp);

    const TITLE : string =`
    Game : ${VIDEO_GAME}
    Character : ${characterName}
    hp: ${hp}
    `



  }

  arraysAndObjects(){
    let skills : string[] = ['punch','kick','damage','special mov'];
    console.log(skills);

    const character : Character = {
      name : 'luigi',
      hp: 100,
      live : true,
      skills: skills,
      color: 'green'
    }

    character.name = 'Mario';
    character.color = 'red';
    
    console.log(character);
  }

  ifStatement(){
    console.log('ifStatement');
    let x: number = 20, y : number = 10;
    if(x>y){
      console.log("x es mayor a y");

    }
    else if (y> x){
      console.log("y es mayor que x");
    }
    else{
      console.log('son iguales');
    }
  }

  switchStatement(){

    let a: number= 20, b: number =15;

    switch (a-b) {
      case 0:
        console.log('Result: 0')
        break;
        
      case 5:
        console.log('Result: 5')
        break;
      case 10:
          console.log('Result: 5')
          break;
      default:
          console.log("Is NAN")
        break;
    }
  }

  whileStatement(){
    let counter: number = 0;
    while(counter <=5){
      console.log('Ejecución número: '+ counter);
      counter++;
    }
    let i :number =6
    do{
      console.log('do Ejecución número: ' + i);
      i++

    }while(i <= 5);
  }

  forStatement(){
    let arr : number[] = [10,20,30,40,50,60];
  
    for (const INDEX in arr){
      console.log(INDEX, '-', arr[INDEX]);
    }
  
    for (let i: number = 0; i<5; i++){
      console.log(i)
    }
  
    arr.forEach(function(value,index){
      console.log(index +'-'+ value);
    });
  }
  
  tryCatchStatement(){
    try{
      throw "Se presento un error";
    }catch(e){
      console.log(e)
    }
  }
  
  basicFunction(){
    function sumNumbers(a:number, b:number){
      return a + b;
    }
    
    console.log(sumNumbers(2,3))
  
    const ARROW_NUM = (a: number, b: number) : number =>{ return a + b}
  
    console.log(ARROW_NUM(1,8));
  
    function multiplyNumbers(a:number, b:number, c?:number){
      return a * b * (c??1);
    }
  
    console.log(2,3,4)
  }
  
  healCharacter(character:CharacterHp){
    character.healthPoints=100;
  }
  
  otherFunction(){
    let skills : string[] = ['punch', 'kick', 'damage', 'special mov'];
    const character: CharacterHp ={
      name: 'Luigi',
      live: true,
      skills: skills,
      color: 'green',
      healthPoints: 50,
      showHP() {
        console.log(this.healthPoints);
      },
      hp: 0
    }
  
    character.showHP();
    this.healCharacter(character);
    character.showHP();
  }

  
}

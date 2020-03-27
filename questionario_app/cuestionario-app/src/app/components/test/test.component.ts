import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string; 
  public answers: any[];
  public answerCorrect: boolean;
  public answerChoosed:boolean;

  constructor() { 
    this.question='¿Cúal es la capital de españa?';
    this.answers=[{
      'answer' : 'Zaragoza',
      'correct': false
    },
    {
      'answer' : 'Barcelona',
      'correct': false
    },
    {
      'answer' : 'Madrid',
      'correct': true
    },
    {
      'answer' : 'Sevilla',
      'correct': false
    }
  ];

  this.answerCorrect=false;
  this.answerChoosed=false;

  }

  ngOnInit() {
  }

  checkAnswerIndex(index){
    this.answerCorrect=this.answers[index].correct;
    this.answerChoosed=true;
  }

  checkAnswerObj(obj){
    this.answerCorrect=obj.correct;
    this.answerChoosed=true;
  }

  checkAnswerQuestion(){
    if(!this.question){
      return false;
    }

    if(!this.answers || !Array.isArray(this.answers)){
      return false;
    }else{

      if(!(this.answers.length >= 2 && this.answers.length<=4)){
        return false;
      }


      const correctAnswers = this.answers.filter(answer => answer.correct);
      
      /*
      const correctAnswers=this.answers.filter(function (answer){
        return answer.correct;
      } 
        
      }*/

      if(correctAnswers.length !== 1){
        return false;
      }

    }

    return true;

  }

}

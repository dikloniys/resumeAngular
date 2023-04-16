import { Component } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.sass']
})
export class AbilityComponent {
  abilities=[
    {
      screen:'/assets/imgs/abilit/github.png',
      abilityName:'github',
      description:'',
    },
    {
      screen:'/assets/imgs/abilit/bem.png',
      abilityName:'bem',
      description:'',
    },
    {
      screen:'/assets/imgs/abilit/sass.png',
      abilityName:'sass',
      description:'',
    },
    {
      screen:'/assets/imgs/abilit/photoshop.png',
      abilityName:'photoshop',
      description:'',
    },
    {
      screen:'/assets/imgs/abilit/figma.png',
      abilityName:'figma',
      description:'',
    },
    {
      screen:'/assets/imgs/abilit/jquery.png',
      abilityName:'jquery',
      description:'',
    },
    {
      screen:'/assets/imgs/abilit/angular.png',
      abilityName:'angular',
      description:'',
    },
  ]
}

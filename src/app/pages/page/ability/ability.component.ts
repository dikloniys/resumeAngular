import { Component } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.sass']
})
export class AbilityComponent {
  abilities=[
    {
      screen:'/assets/imgs/github.png',
      abilityName:'github',
      description:' ',
    },
    {
      screen:'/assets/imgs/bem.png',
      abilityName:'bem',
      description:'',
    },
    {
      screen:'/assets/imgs/sass.png',
      abilityName:'sass',
      description:'',
    },
    {
      screen:'/assets/imgs/photoshop.png',
      abilityName:'photoshop',
      description:'',
    },
    {
      screen:'/assets/imgs/figma.png',
      abilityName:'figma',
      description:'',
    },
    {
      screen:'/assets/imgs/jquery.png',
      abilityName:'jquery',
      description:'',
    },
    {
      screen:'/assets/imgs/angular.png',
      abilityName:'angular',
      description:'',
    },
  ]

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent {
  sites=[
    {
      link:'miami/index.html',
      screen:'/assets/imgs/gallery.png',
      sitenName:'"miami"',
      description:'о клубной жизни в Miami',
    },
    {
      link:'resume/index.html',
      screen:'/assets/imgs/resume.png',
      sitenName:'"resume"',
      description:'Одна страница собравшая в себе все часто используемые элементы',
    },
    {
      link:'valo/index.html',
      screen:'/assets/imgs/valo.png',
      sitenName:'"VALO"',
      description:'Одна страница презентующая элитную гостиницу',
    },
    {
      link:'move/index.html',
      screen:'/assets/imgs/transportation.png',
      sitenName:'"MOVE"',
      description:'предоставляющий услуги перевозок',
    },
    {
      link:'novinka-hotel/index.html',
      screen:'/assets/imgs/novinka.png',
      sitenName:'"Новинка"',
      description:'отеля на побережье Азовского моря',
    },
    {
      link:'odigo/index.html',
      screen:'/assets/imgs/japan.png',
      sitenName:'"odigo"',
      description:'о путишествии по Японии',
    },
    {
      link:'bicycle/index.html',
      screen:'/assets/imgs/bicycle.png',
      sitenName:'"bicycle"',
      description:'Страница созданная для теста способностей за 4 часа',
    },
    {
      link:'gold/index.html',
      screen:'/assets/imgs/goldy.png',
      sitenName:'"Goldy Store"',
      description:'ювелирного магазина',
    },
  ]
}

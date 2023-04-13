import { MenuItem } from "./service/menu.service";

export const AppMenuItems:Array<MenuItem> = [
    {
        text:'Главная',
        icon:'srs/imgs/home.png',
        route:'/home'
    },
    {
        text:'Обо мне',
        icon:'srs/imgs/about.png',
        route:'/about'
    },
    {
        text:'Наыки',
        icon:'srs/imgs/ability.png',
        route:'/ability'
    },
    {
        text:'Портфолио',
        icon:'srs/imgs/portfolio.png',
        route:'/portfolio'
    },
    {
        text:'Контакты',
        icon:'srs/imgs/contacts.png',
        route:'/contacts'
    }
];
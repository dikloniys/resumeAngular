import { Injectable } from "@angular/core";

export interface MenuItem {
    text:string;
    icon:string;
    route:string;
}

@Injectable()
export class MenuService {
    items: Array<MenuItem> = [];
    isVertical = false
}
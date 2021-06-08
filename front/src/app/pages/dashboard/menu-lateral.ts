export const MENU_LATERAL_ITEMS:menu[] = [
    {link:'/dashboard',title:'List Users',icon:'list',left:true},
    {link:'/dashboard/types',title:'List Types',icon:'list',left:true},
];
export interface menu{
    link:string
    title?:string
    icon?:string
    left:boolean
}
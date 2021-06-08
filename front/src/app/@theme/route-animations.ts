import{
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations'


export const animacaoDeRota =
    trigger('routeAnimations',[
      transition('* <=> *', slideTo('right')),
      transition('void <=> *', slideTo('right')),
      transition('* <=> void', slideTo('right')),

    ])
    export const authRoute =
    trigger('authRoute',[
      transition('* <=> *', slideTo('right')),
      transition('login <=> cadastro', slideTo('right')),
      transition('* <=> void', slideTo('right')),

    ])
function slideTo(direction){
  const optional = {optional : true}
  return [
    query(':enter',[
      style({
        position: 'absolute',
        top: 0,
        // [direction]: 0,
        width: '100%',
        opacity:0
      })
    ], optional),
    // query(':enter',[
    //   // style({[direction]: '-100%'})
    // ], optional),
    group([
      // query(':leave',[
      //   animate('2s ease', style({opacity:1,position:'relative'}))
      // ], optional),
      query(':enter',[
        animate('1s ease', style({opacity:1,position:'relative'}))
      ],optional)
    ])
  ]
}

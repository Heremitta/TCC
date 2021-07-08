import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const animacaoDeRota = trigger('routeAnimations', [
  transition('* <=> *', opacityEfect()),
  transition('void <=> *', opacityEfect()),
  transition('* <=> void', opacityEfect()),
]);
export const authRoute = trigger('authRoute', [
  transition('* <=> *', slideTo('right')),
  transition('auth => home', slideTo('left')),
  // transition('home <= auth', slideTo('left')),
  // transition('auth <= home', slideTo('left')),
]);
function opacityEfect() {
  const optional = { optional: true };
  return [
    query(
      ':enter',
      [
        style({
          position: 'absolute',
          top: 0,
          width: '100%',
          opacity: 0,
        }),
      ],
      optional,
    ),
    group([
      query(
        ':enter',
        [animate('1s ease', style({ opacity: 1, position: 'relative' }))],
        optional,
      ),
    ]),
  ];
}

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional,
    ),
    query(':enter', [style({ [direction]: '-100%' })], optional),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional,
      ),
      query(
        ':enter',
        [animate('600ms ease', style({ [direction]: '0%' }))],
        optional,
      ),
    ]),
  ];
}

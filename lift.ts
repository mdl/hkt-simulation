import {Morphism, Curried2, Curried3} from "./types";
import {Type, URIS} from "./hkt";
import {Functor} from "./functor";
import {Applicative} from "./applicative";

export const liftA1 = <F extends URIS>({map}: Functor<F>) =>
  <A, B>(fn: Morphism<A, B>) => map(fn)

export const liftA2 = <F extends URIS>({map, ap}: Applicative<F>) =>
  <A, B, C>(fn: Curried2<A, B, C>) =>
    (a: Type<F, A>) => (b: Type<F, B>): Type<F, C> =>
      ap(map(fn)(a))(b)

export const liftA3 = <F extends URIS>({map, ap}: Applicative<F>) =>
  <A, B, C, D>(fn: Curried3<A, B, C, D>) =>
    (a: Type<F, A>) => (b: Type<F, B>) => (c: Type<F, C>): Type<F, D> =>
      ap(ap(map(fn)(a))(b))(c)
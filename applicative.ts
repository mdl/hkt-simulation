import {Type, URIS} from "./hkt";
import {Morphism} from "./types";
import {Functor} from "./functor";

export type Applicative<F extends URIS> = Functor<F> & {
  ap: <A, B>(ab: Type<F, Morphism<A, B>>) => (a: Type<F, A>) => Type<F, B>
  of: <A>(a: A) => Type<F, A>
}
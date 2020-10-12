import {Type, URIS} from "./hkt";
import {Morphism} from "./types";

export type Functor<F extends URIS> = {
  map: <A, B>(ab: Morphism<A, B>) => (fa: Type<F, A>) => Type<F, B>
}
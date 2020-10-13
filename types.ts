export type Morphism<A,B> = (x: A) => B
export type Curried2<A, B, C> = Morphism<A, Morphism<B, C>>
export type Curried3<A, B, C, D> = Morphism<A, Curried2<B, C, D>>
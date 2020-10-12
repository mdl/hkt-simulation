import {Functor} from "./functor";

type None = {_tag: 'None'}
type Some<T> = {_tag: 'Some', value: T}
type Option<T> = None | Some<T>
type OptionFunctor = Functor<'Option'>

// hkt boilerplate
declare module './hkt' {
  interface URIToType<A> {
    Option: Option<A>
  }
}

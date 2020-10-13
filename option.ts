import {Functor} from "./functor";
import {Applicative} from "./applicative";

type None = {_tag: 'None'}
type Some<T> = {_tag: 'Some', value: T}
type Option<T> = None | Some<T>
type OptionFunctor = Functor<'Option'>
type OptionApplicative = Applicative<'Option'>

// hkt boilerplate
declare module './hkt' {
  interface URIToType<A> {
    Option: Option<A>
  }
}

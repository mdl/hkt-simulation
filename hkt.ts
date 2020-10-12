export interface URIToType<A> {}

export type URIS = keyof URIToType<any>

export type Type<URI extends URIS, A> = URIToType<A>[URI]
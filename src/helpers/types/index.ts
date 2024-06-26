export type Merge<T, U> = {
  [K in keyof T]: T[K];
} & {
  [K in keyof U]?: K extends keyof T ? T[K] : U[K];
}

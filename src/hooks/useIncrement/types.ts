export type PropsTypes = {
  minValue?: number
  maxValue?: number
  initial: number
  step?: number
}

export type ReturnTypes = [
  number,
  {
    increment: () => void
    decrement: () => void
    reset: () => void
  }
]

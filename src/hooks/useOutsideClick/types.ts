import { RefObject, SyntheticEvent } from 'react';

export type PropsTypes = {
  elementRef: RefObject<HTMLElement>
  closed: (event: SyntheticEvent) => void
  isOpen: boolean
}

export type ReturnTypes = void

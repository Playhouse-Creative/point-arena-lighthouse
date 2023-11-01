import { StudioColorValue } from '../colorListComponents/ColorListInput'

export const isEqual = (a: StudioColorValue, b: StudioColorValue): boolean =>
  a?.value === b?.value && a?.title === b?.title
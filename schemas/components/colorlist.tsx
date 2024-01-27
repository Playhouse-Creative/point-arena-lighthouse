import { ObjectDefinition } from 'sanity'

import { ColorListInput, ColorListOptions } from './colorListComponents/ColorListInput'

const colorTypeName = 'colorlist' 

/**
 * @public
 */
export interface ColorDefinition extends Omit<ObjectDefinition, 'type' | 'fields' | 'options'> {
  type: typeof colorTypeName
  options?: ColorListOptions
}

declare module '@sanity/types' {
  // makes type: 'color' narrow correctly when using defineTyp/defineField/defineArrayMember
  export interface IntrinsicDefinitions {
    colorlist: ColorDefinition
  }
}

const colorObject = {
  name: colorTypeName,
  type: 'object',
  title: 'Color',
  ...({ components: { input: ColorListInput } }),
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'value',
      type: 'string',
    },
  ],
}

export default colorObject

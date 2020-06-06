import { string } from '../../common/schemas/string';
import { unixTimeRef } from '../../common/schemas/unixTime';
import { idRef } from '../../common/schemas/id';
import { integer } from '../../common/schemas/integer';
import {
  AllowRef,
  inlineRef,
  Schema,
  schemaRef,
} from '@kojidev/openapi-ts';

const paperBookType = 'paperBook' as const;
const audioBookType = 'audioBook' as const;

const bookTypeSchema: Schema = {
  enum: [paperBookType, audioBookType],
  type: 'string',
};

const baseBookSchemaRef = schemaRef('Book');

const paperBookSchemaRef = schemaRef('PaperBook', {
  allOf: [
    baseBookSchemaRef,
    {
      properties: {
        pageCount: integer,
      },
      type: 'object',
    },
  ],
});

const audioBookSchemaRef = schemaRef('AudioBook', {
  allOf: [
    baseBookSchemaRef,
    {
      properties: {
        length: {
          ...integer,
          description: 'Audio book duration in minutes',
        },
        narrator: string,
      },
      type: 'object',
    },
  ],
});

baseBookSchemaRef.value = {
  discriminator: {
    mapping: {
      [paperBookType]: inlineRef(paperBookSchemaRef),
      [audioBookType]: inlineRef(audioBookSchemaRef),
    },
    propertyName: 'type',
  },
  properties: {
    author: string,
    createdAt: unixTimeRef,
    id: idRef,
    title: string,
    type: bookTypeSchema,
  },
  type: 'object',
};

export const anyBookSchema: AllowRef<Schema> = {
  oneOf: [
    paperBookSchemaRef,
    audioBookSchemaRef,
  ],
};

import {
  NumberSchema,
  schemaRef,
} from '@kojidev/openapi-ts';

export const unixTime: NumberSchema = {
  example: 1514808000,
  format: 'unix-time',
  type: 'number',
};

export const unixTimeRef = schemaRef('unixTime', unixTime);

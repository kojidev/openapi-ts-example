import { json } from './json';
import {
  AllowRef,
  Ref,
  Responses,
  Schema,
} from '@kojidev/openapi-ts';

export const ok = (schema: Ref<'responses'> | AllowRef<Schema>): AllowRef<Responses> => (
  { 200: json('OK', schema) }
);

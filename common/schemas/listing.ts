import { ok } from '../responses/ok';
import {
  AllowRef,
  Ref,
  Responses,
  Schema,
} from '@kojidev/openapi-ts';

export function listing(item: AllowRef<Schema> | Ref<'schemas'>): AllowRef<Responses> {
  return ok({
    properties: {
      items: {
        items: item,
        type: 'array',
      },
    },
    type: 'object',
  });
}

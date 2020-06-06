import {
  AllowRef,
  Ref,
  Response,
  Schema,
} from '@kojidev/openapi-ts';

export function json(
  description: string,
  schema: Ref<'responses'> | AllowRef<Schema>,
): AllowRef<Response> {
  return {
    content: {
      'application/json': {
        schema,
      },
    },
    description,
  };
}

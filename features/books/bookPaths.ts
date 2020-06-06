import { anyBookSchema } from './schemas';
import { listing } from '../../common/schemas/listing';
import {
  AllowRef,
  Paths,
} from '@kojidev/openapi-ts';

export const bookPaths: AllowRef<Paths> = {
  '/v1/books': {
    get: {
      description: 'Get books',
      responses: {
        ...listing(anyBookSchema),
      },
    },
  },
};

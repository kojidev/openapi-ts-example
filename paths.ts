import { bookPaths } from './features/books/bookPaths';
import {
  AllowRef,
  Paths,
} from '@kojidev/openapi-ts';

export const paths: AllowRef<Paths> = {
  ...bookPaths,
};

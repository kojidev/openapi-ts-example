import * as fs from 'fs';
import * as path from 'path';
import { title } from './title';
import { version } from './version';
import { paths } from './paths';
import {
  Components,
  openapi,
  OpenAPI,
  resolveRefs,
} from '@kojidev/openapi-ts';

const description = fs
  .readFileSync(path.resolve(__dirname, 'description.md'))
  .toString();

const components: Components = {};

export const spec: OpenAPI = {
  components,
  info: {
    description,
    title,
    version,
  },
  openapi,
  paths: resolveRefs(paths, components),
};

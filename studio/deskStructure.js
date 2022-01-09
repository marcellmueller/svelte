import S from '@sanity/desk-tool/structure-builder';

import { HomeMenuItem, PageMenuItem, PostMenuItem } from './structure/index';

export default () =>
  S.list().title('Content').items([HomeMenuItem, PageMenuItem, PostMenuItem]);

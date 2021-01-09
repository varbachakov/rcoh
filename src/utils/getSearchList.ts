import { HooksTypes } from '@/other/home-types';

export function getSearchList(debounceValue: string, hooks: HooksTypes): HooksTypes | []{
  return debounceValue.length < 4 ? [] : hooks.filter(hook => hook.hookName.indexOf(debounceValue) !== -1);
}

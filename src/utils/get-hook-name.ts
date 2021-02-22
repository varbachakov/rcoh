export const getHookName = (hooksDB: {hookName: string}[]): string[] => {
  return hooksDB.reduce((acc: string[], hook: { hookName: string; }) => acc.concat(hook.hookName), []);
};

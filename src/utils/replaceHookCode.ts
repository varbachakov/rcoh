export function replaceHookCode(hookCode: string): string {
  const resOne = hookCode.replace(/~~~js/g, '');

  return resOne.replace(/~~~/g, '').trim();
}

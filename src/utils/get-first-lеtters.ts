export function getFirstLetters(name: string): string {
  return name.split(' ').reduce((acc, name ) => name[0] + acc, '');
}

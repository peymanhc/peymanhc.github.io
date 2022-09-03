export function addComma(text:string) {
  return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function removeCharacter(text: string, char:string) {
  return text.toString().replaceAll(char, '');
}
export const persianNumberToEnglish = (s: any) =>
  s?.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

import isEmpty from './valid/is-empty';

function replaceAll(text: string, regStr: string, subStr: string) {
  if (isEmpty(text)) return text;
  const reg = new RegExp(`${regStr}`, 'gi');
  return text.replace(reg, subStr);
}

export default replaceAll;

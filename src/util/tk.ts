import ReactHtmlParser from 'react-html-parser';

/**
 * 내용안에서 검색어를 찾아 highlight 해주는 함수
 * @param content 내용
 * @param keyword 검색어
 * @param isGlobal (optional) 내용에서 겹치는 모든 검색어 찾기여부
 */
function highlight(content: string, keyword: string, isGlobal?: boolean) {
  if (keyword === '') return content;
  try {
    if (isGlobal) {
      return ReactHtmlParser(content.replace(new RegExp(keyword, 'ig'), wrapKeywordWithHtml(keyword)));
    }
    return ReactHtmlParser(content.replace(keyword, wrapKeywordWithHtml(keyword)));

  } catch(err) {
    return content;
  }
}

function wrapKeywordWithHtml(keyword: string) {
  return `<span class="highlight">${keyword}</span>`;
}

export default highlight;

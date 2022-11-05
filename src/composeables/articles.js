import CommonPrinterProblems from '../raw_html/common_printer_problems.html?raw'


const articles = [
  {
    id: 'common-printer-problems',
    title: 'Most Common Printer Problems and Their Solutions',
    date: 'Nov 04, 2022',
    html: CommonPrinterProblems
  }
]

export function getArticle(id){
  return articles.find(x => x.id)
}

export function getAllArticles(){
  return articles.map(x => {
    return {
      id: `/article/${x.id}`,
      title: x.title
    }
  })
}

export function getRecentPosts(){
  return articles.slice(0, 3).map(x => {
    return {
      id: `/article/${x.id}`,
      title: x.title,
      description: x.html.substr(0, 200)
    }
  })
}
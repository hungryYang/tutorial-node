const axios = require('axios')
const cheerio = require('cheerio')
!async function(){
  const res = await axios.get('https://www.jianshu.com/p/92248150148d')
  const html = res.data
  const $ = cheerio.load(html)
  const article = $('.show-content').children()
  const content = []
  function getContent(article,content){
    for (let i=0;i<article.length;i++){
      if(article.eq(i).attr('class') === 'image-package'){
        content.push(article.eq(i).find('img').attr('data-original-src'))
      }else(
        content.push(article.eq(i).text())
      )
    }
  }
  getContent(article,content)
 console.log(content)
}()
  .then(r =>{
    process.exit(0)
  })
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
const axios = require('axios')
const cheerio = require('cheerio')

!async function (){
  const res = await axios.get('http://www.acfun.cn/a/ac4120051')
  const html = res.data;

  const $ = cheerio.load(html)

  const articleCotent = $('.article-content')
  // const doms = articleCotent.find('p, p>img,div,div>img')
  const content = getTextOrImg(articleCotent,[])

  // doms.map((i,d)=>{
  //   const text = $(d).text()
  //   if(text){
  //     content.push(text)
  //   }else if (d.name === 'img'){
  //     const src = $(d).attr('src')
  //     content.push(src)
  //   }
  // })
  function getTextOrImg(dom,arr){
    const d = $(dom)
    const children = d.children()
    if(d.text()){
      arr.push(d.text())
    }
    if(children.length === 0){   
      if(d[0].name === 'img'){
        arr.push(d.attr('src'))
      }
    } else {
      for (let i = 0;i<children.length;i++){
        const child = children[i]
        getTextOrImg(child,arr)
      }
    }

    return arr
  }

  console.log(content)
}()
  .then(r => {
    process.exit(0)
  })
  .catch(e => {
    console.log(e)
    process.exit(1)
  })


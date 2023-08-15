d2=document.querySelector('.d2')
d3=document.querySelector('.d3')
var languages=[
 {
   name:"Amharic",
   code:"am"
 },
 {
   name:"Arabic",
   code:"ar"
 },
 {
   name:"Chinese",
   code:"zh"
 },
 {
   name:"Dutch",
   code:"nl"
 },
 {
   name:"French",
   code:"fr"
 },
 {
   name:"Portuguese",
   code:"pt"
 },
 {
   name:"Russian",
   code:"ru"
 },
 {
   name:"Spanish",
   code:"es"
 }
  ]
var target_source={
  name:"English",
  code:"en"
}
a_tags=document.querySelectorAll('.d2 a')
a_tags2=document.querySelectorAll('.d3 a')
texts=document.querySelectorAll('.text')
a_tags.forEach((at)=>{
  at.onclick=()=>{
    texts.forEach(async(t)=>{
     translated=await translate(
    pick(at.innerHTML),target_source.code,t.innerText)
    target_source={
      name:at.innerHTML,
      code:pick(at.innerHTML)
    }
    d2.style.display='none'
    d3.style.display='none'
     t.innerHTML=translated
    })
  }
})

a_tags2.forEach((at) => {
      at.onclick = () => {
        texts.forEach(async (t) => {
          translated = await translate(
            pick(at.innerHTML), target_source.code, t.innerText)
          target_source = {
            name: at.innerHTML,
            code: pick(at.innerHTML)
          }
          d3.style.display = 'none'
          d2.style.display='none'
          t.innerHTML = translated
        })
      }
    })

const url = 'https://text-translator2.p.rapidapi.com/translate';

async function translate(tl,sl,ttx){
try {
  const response = await fetch(url,{
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '6bb8c202d8mshfdd04cdd380e1b1p1ca3e2jsn24d50fa64398',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  body: new URLSearchParams({
    source_language: sl,
    target_language: tl,
    text:ttx
  })

  });
  const result = await response.json();
  return result.data.translatedText
} catch (error) {
  return error
}  
}
function pick(name){
  switch (name) {
    case 'Amharic':
      return "am"
      break;
    case 'Arabic':
      return "ar"
      break;
    case 'Russian':
        return "ru"
        break;
    case 'Portuguese':
          return "pt"
          break;
    case 'French':
          return "fr"
          break;
    case 'Spanish':
          return "es"
          break;
    case 'Dutch':
          return "nl"
          break;
    case 'Chinese':
          return "zh"
          break;
    
    
  }
}
pick("Amharic")
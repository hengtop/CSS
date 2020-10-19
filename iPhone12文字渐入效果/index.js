const h1 = document.querySelector('h1');
const element = document.documentElement;
console.log(element.scrollHeight,element.clientHeight,element.scrollTop);
document.addEventListener('scroll' ,(e) => {
  let scrolled = element.scrollTop/
  (element.scrollHeight - element.clientHeight)//滚动条总高度
  console.log(scrolled);//输出范围0-1
  h1.style.setProperty('--percentage',`${scrolled*100}%`)//设置css的变量名，赋值变量
});

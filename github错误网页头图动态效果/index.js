document.querySelector('html').addEventListener('mousemove',function(e) {
      
  let window_width = document.documentElement.clientWidth;
  let window_height = document.documentElement.clientHeight;//当前网页宽高
  let bgWidth = parseInt(getComputedStyle(document.querySelector('#parallax_wrapper')).width);
  let bgHeigth = parseInt(getComputedStyle(document.querySelector('#parallax_wrapper')).height);
  let move_x = e.clientX / window_width;//计算比例
  let move_y = e.clientY / window_height;
  //给每个图片设置位移
  document.querySelector('#parallax_bg').style.transform = calcTransform(move_x,move_y,-5,-2);
  document.querySelector('#parallax_cat').style.transform = calcTransform(move_x,move_y,10,2);
  document.querySelector('#parallax_not_found').style.transform = calcTransform(move_x,move_y,15,2);
  document.querySelector('#parallax_bed').style.transform = calcTransform(move_x,move_y,10,2);
  document.querySelector('#parallax_cat_shadow').style.transform = calcTransform(move_x,move_y,10,2);
  document.querySelector('#parallax_bed_shadow').style.transform = calcTransform(move_x,move_y,10,2);
  document.querySelector('#parallax_house_big').style.transform = calcTransform(move_x,move_y,-12,-2);
  document.querySelector('#parallax_house_small').style.transform = calcTransform(move_x,move_y,-12,-2);
});
function calcTransform(x,y,translateX,translateY){//三个参数：水平位移与图片宽度的比值，竖直位移与高度的比值，移动程度
  return `translate(${x *translateX/0.5}px,${y*translateY/0.5}px)`;
}
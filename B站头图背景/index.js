

let x = 0;
let x_new = 0;
let x_offset = 0;
let b_new;
let l_new;
let banner = document.querySelector('.banner');
let images = document.querySelectorAll('.image');

let window_width = document.documentElement.clientWidth; //整个窗口的宽度
let step = window_width / 2 / 5;//设置移动的幅度
let data_images = [{
    x: 0,
    b: 4
},
{
    x: 0,
    b: 0
},
{
    x: 0,
    b: 1
},
{
    x: 0,
    b: 4
},
{
    x: 0,
    b: 5
},
{
    x: 0,
    b: 6
},
]

//初始样式设置
let init = () => {
    for (const key in images) {
        if (images.hasOwnProperty(key)) { //有效避免扩展本地原型而引起的错误
            const element = images[key];
            const element_data = data_images[key];
            element.children[0].style = 'translate(' + element_data.x + 'px); filter: blur(' + element_data.b + 'px);';
        }
    }
}

banner.addEventListener('mouseover', (e) => {
    x = e.clientX; //鼠标移入时的位置
});
banner.addEventListener("mousemove", (e) => {
    x_new = e.clientX; //监听鼠标移入后左右移动后的水平坐标
    x_offset = x - x_new; //移动的距离
    for (const key in images) {
        if (images.hasOwnProperty(key)) {
            let level = (images.length - parseInt(key)) * 10;//这里设置的level是越在外层的图片越小，当然level越小移动的就越快，给人物体近的移动快，物体远的移动慢的效果
            const element = images[key];
            const element_data = data_images[key];
            b_new = Math.abs(element_data.b + (x_offset / step)); //这里当移动距离为step时才加1px，要幅度大一点就减小step，图片效果由模糊变清晰再变模糊（就是blur减小变为零后再变大）
            l_new = 0 - (x_offset / level);
            element.children[0].style = 'transform:translate(' + l_new + 'px); filter: blur(' + b_new + 'px);';
        }
    }

});

//鼠标移出还原成原来的样式
banner.addEventListener("mouseout", (e) => {
    for (const key in images) {
        if (images.hasOwnProperty(key)) { //有效避免扩展本地原型而引起的错误
            const element = images[key];
            const element_data = data_images[key];
            element.children[0].style = 'transition: .2s linear; transform: translate(' + element_data.x + 'px); filter: blur(' + element_data.b + 'px);';
        }
    }
});
//眨眼效果
let blink_index = 0;
let timeout = 1000;
let blink = () => {
    if (blink_index == 4) {
        blink_index = 1;
        timeout = 4000;
    } else {
        blink_index += 1;
        timeout = 75;
    }

    images[1].children[0].src = 'images/girl' + blink_index + '.png';
    let time = setTimeout(() => {
        clearTimeout(time);
        blink();
    }, timeout);
}

window.onload = () => {
    init();
    blink();
}
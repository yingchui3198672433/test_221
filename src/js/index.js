/*
 * @Author: ZXY 
 * @Date: 2019-02-21 09:10:59 
 * @Last Modified by: ZXY
 * @Last Modified time: 2019-02-21 09:49:56
 */


var cont = new BScroll('.cont');
var list = new BScroll('.list-box')

//请求数据
ajax({
    url: '/api/list',
    dataType: 'json',
    success: function(rs) {
        if (rs.code == 1) {
            render(rs.data)
        }
    }
});

//渲染
var arr = [];

function render(data) {
    data.map(function(item, i) {
        for (var k in item) {
            arr.push(k);
            renderList(arr);
            renderpro(item[k], i);
        }
    })
};
//渲染列表
function renderList(k) {
    var list = document.querySelector('.list');
    list.innerHTML = k.map(function(item, i) {
        return i == 0 ? `<li class='active'>${item}</li>` : `<li>${item}</li>`;
    })
};
//渲染商品
function renderpro(data, i) {
    var lis = [...document.querySelectorAll('.pro li')];
    // var index = lis.hasClass('.active').index();
    // console.log(index)
    var pro = document.querySelector('.pro');
    pro.innerHTML = data.map(function(item) {
        return `<li>
                    <p class='img'><img src='${item.url}'></p>
                    <p class='font'><span>${item.money}</span><span>${item.money}</span></p>
                </li>`
    })
}
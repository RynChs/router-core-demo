// 原生js实现hashRouter主要是监听它的hashchange事件的变化，然后拿到对应的location.hash更新对应的视图
function hashInit() {
    changeHashView();

    window.addEventListener('hashchange', function() {
        changeHashView();
    });
}

function changeHashView() {
    document.getElementById('hashRouter').innerHTML = `当前地址：${window.location.hash}`;
}

hashInit();


/**
 * 能够实现history路由跳转不刷新页面得益与H5提供的pushState(),replaceState()等方法，
 * 这些方法都是也可以改变路由状态（路径），但不作页面跳转，我们可以通过location.pathname来显示对应的视图
 */

function browserInit() {
    changeBrowserView();

    window.addEventListener('popstate', function() {
        changeBrowserView();
    });

    document.getElementById('browserUl').addEventListener('click', function(e) {
        if(e.target.nodeName === 'A'){
            e.preventDefault();
            history.pushState(null, "", e.target.getAttribute('href'));
            changeBrowserView();
        }
    });
}

function changeBrowserView() {
    document.getElementById('browserRouter').innerHTML = `当前地址：${window.location.pathname}`;
}

browserInit();
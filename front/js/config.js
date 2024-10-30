
var projectName = '流浪动物救助及领养管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '宠物教学',
	url: './pages/chongwujiaoxue/list.jsp'
}, 
{
	name: '领养宠物',
	url: './pages/lingyangchongwu/list.jsp'
}, 
{
	name: '宠物认领',
	url: './pages/chongwurenling/list.jsp'
}, 
{
	name: '感谢信',
	url: './pages/ganxiexin/list.jsp'
}, 

{
	name: '公告信息',
	url: './pages/news/list.jsp'
},
{
	name: '留言板',
	url: './pages/messages/list.jsp'
}
]

var adminurl =  "http://localhost:8080/jspm2bs49/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"发布者","menuJump":"列表","tableName":"fabuzhe"}],"menu":"发布者管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除","查看评论"],"menu":"宠物教学","menuJump":"列表","tableName":"chongwujiaoxue"}],"menu":"宠物教学管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"领养宠物","menuJump":"列表","tableName":"lingyangchongwu"}],"menu":"领养宠物管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","删除","查看评论"],"menu":"宠物认领","menuJump":"列表","tableName":"chongwurenling"}],"menu":"宠物认领管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"类型","menuJump":"列表","tableName":"leixing"}],"menu":"类型管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除","审核"],"menu":"领养申请","menuJump":"列表","tableName":"lingyangshenqing"}],"menu":"领养申请管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","删除"],"menu":"认领信息","menuJump":"列表","tableName":"renlingxinxi"}],"menu":"认领信息管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","删除","查看评论"],"menu":"感谢信","menuJump":"列表","tableName":"ganxiexin"}],"menu":"感谢信管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","查看评论"],"menu":"宠物教学列表","menuJump":"列表","tableName":"chongwujiaoxue"}],"menu":"宠物教学模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看评论","查看","领养"],"menu":"领养宠物列表","menuJump":"列表","tableName":"lingyangchongwu"}],"menu":"领养宠物模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["认领","查看评论","查看"],"menu":"宠物认领列表","menuJump":"列表","tableName":"chongwurenling"}],"menu":"宠物认领模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","查看评论"],"menu":"感谢信列表","menuJump":"列表","tableName":"ganxiexin"}],"menu":"感谢信模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除"],"menu":"领养申请","menuJump":"列表","tableName":"lingyangshenqing"}],"menu":"领养申请管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除"],"menu":"认领信息","menuJump":"列表","tableName":"renlingxinxi"}],"menu":"认领信息管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除","查看评论"],"menu":"感谢信","menuJump":"列表","tableName":"ganxiexin"}],"menu":"感谢信管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["修改","查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","查看评论"],"menu":"宠物教学列表","menuJump":"列表","tableName":"chongwujiaoxue"}],"menu":"宠物教学模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看评论","查看","领养"],"menu":"领养宠物列表","menuJump":"列表","tableName":"lingyangchongwu"}],"menu":"领养宠物模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["认领","查看评论","查看"],"menu":"宠物认领列表","menuJump":"列表","tableName":"chongwurenling"}],"menu":"宠物认领模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","查看评论"],"menu":"感谢信列表","menuJump":"列表","tableName":"ganxiexin"}],"menu":"感谢信模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除","查看评论"],"menu":"宠物认领","menuJump":"列表","tableName":"chongwurenling"}],"menu":"宠物认领管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","审核"],"menu":"认领信息","menuJump":"列表","tableName":"renlingxinxi"}],"menu":"认领信息管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","查看评论"],"menu":"宠物教学列表","menuJump":"列表","tableName":"chongwujiaoxue"}],"menu":"宠物教学模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看评论","查看","领养"],"menu":"领养宠物列表","menuJump":"列表","tableName":"lingyangchongwu"}],"menu":"领养宠物模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["认领","查看评论","查看"],"menu":"宠物认领列表","menuJump":"列表","tableName":"chongwurenling"}],"menu":"宠物认领模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","查看评论"],"menu":"感谢信列表","menuJump":"列表","tableName":"ganxiexin"}],"menu":"感谢信模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"发布者","tableName":"fabuzhe"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

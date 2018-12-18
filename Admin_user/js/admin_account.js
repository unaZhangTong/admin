//导航栏跳转
$("nav div").each(function (index,item) {
    //$(item).attr("myIndex","index");
    $(item).mouseover(function () {
        $(this).css("cursor", "pointer");
    })
})

//点击个人信息，跳转到个人信息页面
$("#personal_information").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/admin_index.html?uname="+uname1;

})

//点击高校信息，跳转到高校信息页面
$("#school_Information").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/school_Information.html?uname="+uname1;

})

//点击公告管理，跳转到公告管理页面
$("#announcement").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/announcement.html?uname="+uname1;

})


// pages/home/home.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        navList:["正在热映","即将上映"],
		select:[true,false],
		imageList:[
			"../../image/1.jpg",
			"../../image/2.jpg",
			"../../image/3.jpg",
			"../../image/4.jpg"
		]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    // 跳转到电影的详情页面
    toDetail(){
        wx.navigateTo({
          url: '/pages/movieDetail/movieDetail',
        })
    },
    // 切换导航栏时(获取点击时自定义的样式)
    navClick(e){
        let index = e.currentTarget.dataset.index;
        if(index === 0){
            this.setData({
                select:[true,false]
            })
        }else{
            this.setData({
                select:[false,true]
            })
        }
        console.log(index);
    }
    
})
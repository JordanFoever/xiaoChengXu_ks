// commopent/toTop/toTop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        go_top_show: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 获取滚动条当前位置
        onPageScroll: function (e) {
            // console.log(e)
            if (e.scrollTop > 300) {
                this.setData({
                    go_top_show: true
                })
            } else {
                this.setData({
                    go_top_show: false
                })
            }
        },
        // 回到顶部
        goTop: function (e) {
            if (wx.pageScrollTo) {
                wx.pageScrollTo({
                    scrollTop: 0
                })
            } else {
                wx.showModal({
                    title: '提示',
                    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                })
            }
        }
    }
})
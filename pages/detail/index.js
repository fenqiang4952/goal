Page({
    data: {
        list: [],
        item: {
            id: '',
            name: '',
            des: '',
            link: '',
            lastTime: ''
        },
        showItemModal: false,
        addItemColor: '#7de151'
    },
    props: {
        id: '',
        isUpdateItem: false
    },
    onLoad: function (options) {
        this.props.id = options.id
        this.getList()
    },
    getList() {
        const self = this
        wx.getStorage({
            key: this.props.id,
            success: function (res) {
                self.setData({
                    list: res.data
                })
            },
            fail: function () {
                wx.showToast({
                    title: '获取失败',
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    },
    inputName(e) {
        this.data.item.name = e.detail.value        
        const self = this
        self.setData({
            item: self.data.item
        })
    },
    inputLink(e) {
        this.data.item.link = e.detail.value        
        const self = this
        self.setData({
            item: self.data.item
        })
    },
    inputDes(e) {
        this.data.item.des = e.detail.value        
        const self = this
        self.setData({
            item: self.data.item
        })
    },
    addItem() {
        this.props.isUpdateItem = false
        this.setData({
            showItemModal: !this.data.showItemModal,
            addItemColor: !this.data.showItemModal?'red':'#7de151'
        })
    },
    updateItem(e) {
        this.props.isUpdateItem = true
    },
    sureItem() {
        const self = this
        if(this.props.isUpdateItem) {

        }else {
            let time =new Date()
            self.data.item.id = `${self.data.item.name}${(new Date()).getTime()}`
            self.data.item.lastTime = `${time.getFullYear}/${time.getMonth+1}/${time.getDay} ${time.getHours}:${time.getMinutes}:${time.getSeconds}`
            self.data.list.unshift(self.data.item)
            // wx.getStorage({
            //     key: self.props.id,
            //     success: function (res) {
            //         self.setData({
            //             list: self.data.list
            //         })
            //     },
            //     fail: function () {
            //         self.setData({
            //             list: self.data.list
            //         })
            //     },
            //     complete: function() {
                    
            //     }
            // })
            self.setData({
                list: self.data.list,
                showItemModal: false
            })
            wx.setStorage({
                key: self.props.id,
                data: self.data.list,
                success: function(res) {

                }
            })
        }
    },
    goLink(e) {
        console.log( e.currentTarget.dataset.link)
    }
});
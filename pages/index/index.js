Page({
    data: {
        list: [
            {
                id: 'widget',
                name: '最近',
                url: 'http://www.baidu.com'
            }
        ]
    },
    kindToggle: function (e) {
        console.log(e);
        const url = e.currentTarget.dataset.url;
        console.log(url);
        wx.navigateTo({
            url,
        })
    }
});

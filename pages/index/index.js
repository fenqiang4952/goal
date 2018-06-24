Page({
    data: {
        list: [
            {
                id: 'widget',
                name: '最近',
                url: '/pages/detail/index'
            }
        ]
    },
    kindToggle: function (e) {
        console.log(e);
        const item = e.currentTarget.dataset.item;
        wx.navigateTo({
            url: `${item.url}?id=${item.id}`,
        })
    }
});

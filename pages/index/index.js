Page({
    data: {
        list: [
            {name: 'coupon', text: '优惠券'},
            {name: 'edit', text: '编辑'},
            {name: 'like', text: '喜欢'},
            {name: 'create', text: '创作'},
            {name: 'glass', text: '眼睛'},
            {name: 'eastereggs', text: '彩蛋'},
            {name: 'safe', text: '安全'},
            {name: 'help', text: '帮助'},
        ],
        list2: [
            {name: 'coupon', text: '优惠券', size: 30},
            {name: 'edit', text: '编辑', size: 50},
            {name: 'like', text: '喜欢', size: 80},
        ]
    },

    onLoad(query) {
        // 页面加载
        console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    },
    onReady() {
        // 页面加载完成
    },
    onShow() {
        // 页面显示
    }
});

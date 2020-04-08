Component({
    mixins: [],
    data: {
        tabList: [],
        tabItems: [],
        currentIndex: 0,
        activeKey: 0,
    },
    props: {
        tabList: Array,
        // activeKey: 'changeCurrent',// 默认激活tabs的key
        activeKey: 0,// 默认激活tabs的key
        placement: 'top',// 选项卡位置,top/left/right/bottom
        scrollable: false,// 是否滚动选项卡
        hasLine: true,// 设置是否显示选项卡下的装饰线
        animatedForLine: false,// 是否使用动画切换装饰线
        activeColor: '#49a9ee',// 设置激活状态选项卡的文本和图标颜色
        inactiveColor: '#bbbbbb',// 设置未激活状态选项卡的文本和颜色
        equalWidth: true,// 设置是否是等宽或等高标签
        even: true,
        width: Number,// 设置选项卡整体的宽度
        height: Number,// 设置选项卡整体的高度
        itemHeight: Number,// 设置选项卡子项的高度
        itemWidth: Number,// 设置选项卡子项的宽度
        onTabChange: (e) => console.log('onTabChange e:', e),
    },
    didMount() {
        console.log('segment didMount this.data.tabList:', this.props.tabList);
        this.initTabs(this.props.tabList);
    },
    didUpdate() {
        console.log('segment didUpdate this.data.tabList:', this.props.tabList);
        console.log('segment didUpdate this.data.tabItems:', this.data.tabItems);
        this.initTabs(this.props.tabList);
    },
    didUnmount() {
    },
    methods: {
        /**
         * 初始化选项卡
         * @param tabList
         */
        initTabs(tabList) {
            const tabItems = tabList.map((item, index) => {
                return {
                    index: index,
                    cell: item
                }
            });
            this.setData({
                tabItems: tabItems,
                childNum: tabItems.length
            });
        },

        handleChange(e) {
            console.log('handleChange e:', e);
            this.setData({
                activeKey: e.currentTarget.dataset.index
            });
            this._popDataChange(e);
        },

        _popDataChange(e) {
            this.props.onTabChange(e);
        }
    },
});

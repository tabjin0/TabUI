import scrollCenter from "../mixins/scrollCenter";

Component({
    mixins: [scrollCenter],
    data: {
        tabList: [],
        currentIndex: 0,
        transformX: 0,
        transformY: 0,
    },
    /**
     * 组件的属性列表
     */
    props: {
        activeKey: {// 默认激活tabs的key
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        placement: {// 标签位置,top/left/right/bottom
            type: String,
            value: 'top'
        },
        animated: Boolean,// 是否使用动画切换标签
        swipeable: Boolean,// 是是否支持滑动切换标签
        scrollable: Boolean,// 是否滚动标签栏
        hasLine: {// 设置是否显示标签下的装饰线
            type: Boolean,
            value: true
        },
        animatedForLine: Boolean,// 是否使用动画切换装饰线
        activeColor: {// 设置激活状态标签的文本和图标颜色
            type: String,
            value: '#333333'
        },
        inactiveColor: {// 设置未激活状态标签的文本和颜色
            type: String,
            value: '#bbbbbb'
        },
        equalWidth: {
            type: Boolean,
            value: true
        }
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        initTabs(val = this.data.activeKey) {
            let items;// TODO
            if (items.length > 0) {
                let activeKey = val,
                    currentIndex = this.data.currentIndex;
                const tab = items.map((item, index) => {
                    activeKey = !val && index == 0 ? item.data.key : activeKey;
                    currentIndex = item.data.key === activeKey ? index : currentIndex;
                    return {
                        tab: item.data.tab,
                        key: item.data.key,
                        icon: item.data.icon,
                        iconSize: item.data.iconSize,
                        image: item.data.image,
                        picPlacement: item.data.picPlacement
                    };
                });
                this.setData({
                    tabList: tab,
                    activeKey,
                    currentIndex,
                }, () => {
                    if (this.data.scrollable) {
                        this.queryMultipleNodes();
                    }
                });
            }
        }
    },
    swiperChange(e) {
        const {
            source,
            current
        } = e.detail;
        if (source == 'touch') {
            const currentIndex = current;
            const activeKey = this.data.tabList[current].key;
            this._setChangeData({
                activeKey,
                currentIndex
            });
        }
    },
    handleChange(e) {
        const activeKey = e.currentTarget.dataset.key;
        const currentIndex = e.currentTarget.dataset.index;
        this._setChangeData({
            activeKey,
            currentIndex
        })
    },
    _setChangeData({
                       activeKey,
                       currentIndex
                   }) {
        this.setData({
            activeKey,
            currentIndex
        }, () => {
            if (this.data.scrollable) {
                this.queryMultipleNodes();
            }
        });

    }
});

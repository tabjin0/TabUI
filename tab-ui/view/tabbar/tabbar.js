let app = getApp();
Component({
    mixins: [],
    data: {
        tabBar: [],
        childNum: 0,
        currentIndex: -1,
        currentCell: null,
        localList: []
    },
    props: {
        // position: "bottom",
        // show: true,
        // active: false,
        // color: "#808080",
        // activeColor: "#44C5F3",
        // borderStyle: "#ffffff",
        // iconSize: 50,
        // imageMode: "scaleToFill",
        // backgroundColor: "#F5F5F8",
        // backgroundImage: "",
        // fontSize: 24,
        // isRedirectToTab: true,
        // isNav: true,
        // list: [],
        position: {type: String, value: "bottom"},
        show: {type: Boolean, value: true},
        // active: {type: Number, value: 0},
        active: 0,
        // color: {type: String, value: "#808080"},
        color: "#808080",
        // activeColor: {type: String, value: "#44C5F3"},
        activeColor: "#D40029",
        borderStyle: {type: String, value: "#ffffff"},
        iconSize: {type: Number, value: 50},
        imageMode: {type: String, value: "scaleToFill"},
        backgroundColor: {type: String, value: "#F5F5F8"},
        backgroundImage: {type: String, value: ""},
        fontSize: {type: Number, value: 24},
        isRedirectToTab: {type: Boolean, value: true},
        isNav: {type: Boolean, value: true},
        list: {type: Array, value: []},
        zIndex: {type: Number, value: 999},

        // list: Array,// tabBar数组
        // color: "#808080",// 默认颜色
        // activeColor: "#49a9ee",// 选中颜色
        // backgroundColor: "#F5F5F8",
        onTabChange: (e) => console.log(e),
    },
    didMount() {
        this.initTabBar(this.props.list);
    },
    didUpdate() {
        this.initTabBar(this.props.list);
    },
    didUnmount() {
    },
    methods: {
        initTabBar(list) {
            if (!this.props.list) {
                console.log('tabbar组件数据异常');
            }
            if (this.data.childNum == list.length) return; // 这可能导致数据不能变更
            const tabBar = list.map((item, index) => {
                return {
                    index: index,
                    cell: item
                }
            });
            this.setData({
                tabBar: tabBar,
                active: app.tabBar.active ? app.tabBar.active : 0,
                childNum: tabBar.length
            });
        },

        tapTabBarItem(e) {
            const tabBarIndex = e.target.dataset.index;
            const path = e.target.dataset.path;
            if (tabBarIndex === undefined) {
                console.log('点击单个item没有抓取到index');
            } else {
                // switchTab
                this.data.isNav && (this.data.isRedirectToTab, dd.switchTab({url: path})), this.showItem({
                    tabBarIndex,
                    path
                });

                this.setData({
                    active: app.tabBar.active ? app.tabBar.active : 0,
                    currentCell: this.data.tabBar[tabBarIndex].cell,
                });
            }
            app.tabBar = app.tabBar || {};
            app.tabBar.active = app.tabBar.active || 0;
            app.tabBar.active = tabBarIndex;
            dd.switchTab({url: path});
            console.log('app.tabBar.active', app.tabBar.active);

            // console.log('currentIndex', this.data.currentIndex);
            // TODO 处理操作相关，例如页面跳转，将具体逻辑操作抛给页面来做
            this._popData({
                index: tabBarIndex,
                path: path
            });
        },

        showItem(e) {
            this.setData({
                active: e.tabBarIndex,
                path: e.path
            });
            let event = {
                index: e.tabBarIndex,
                path: e.path
            };
            // console.log(event);
        },

        _resetStatus() {
            this.setData({
                currentIndex: -1,
                currentCell: -1
            })
        },

        _popData(e) {
            this.props.onTabChange(e);
        }
    }
});

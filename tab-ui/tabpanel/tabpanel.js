/**
 * 选项卡容器
 */
Component({
    mixins: [],
    /**
     * 组件的初始数据
     */
    data: {
        isCurrent: false,
        index: 0,
        parent: null
    },
    props: {
        tab: String,// 标签栏显示的文字,设置是否显示标签下的装饰线
        subTab: String,// 混合选项卡时，选项卡竖向显示文字
        subKey: String,// 混合选项卡时，选项卡竖向key
        key: String,// 每个标签栏的标识,对应 tabs 中的 active-key
        icon: String,// 设置标签栏图标类型
        iconSize: {// 设置标签栏图标的大小
            type: String,
            value: '20'
        },
        image: Object,// 设置标签栏图片资源
        picPlacement: {// 设置图片、图标的相对于文字的位置,top/left/right/bottom
            type: String,
            value: 'top'
        }
    },
    didMount() {
    },
    didUpdate() {
        this.updateData();
    },
    didUnmount() {
    },
    methods: {
        updateData() {
            let parent = this.data.parent;
            if (!parent) return;
            parent.initTabs();
        }
    },
});

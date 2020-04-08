Component({
    mixins: [],
    data: {},
    props: {
        text: '进度',
        percent: "40",// 百分比
        showInfo: true,// 在右侧显示百分比值
        strokeWidth: "6",// 线的粗细，单位px
        activeColor: '#09BB07',// 已选择的进度条颜色
        backgroundColor: String,// 未选择的进度条颜色
        active: true,// 从左往右是否进行加载动画

    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {},
});

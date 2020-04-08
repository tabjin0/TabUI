Component({
    mixins: [],
    data: {},
    props: {
        type: 'primary',// 卡片类型，primary、avatar、cover可设置不同类型的卡片布局。默认值为primary。当type为avatar时可通过describe属性设置额外描述
        position: 'left',// 卡片内图片的位置,left/right
        image: String,// 卡片内图片的路径（头像）
        title: String,// 卡片的标题（昵称）
        describe: String,// 卡片的描述
        plainText: false,// 卡片是否为纯文字卡片
        full: false// 卡片是否为通栏卡片
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {},
});

Component({
    mixins: [],
    data: {},
    props: {
        show: false,// 显示与隐藏,控制弹出层的显示
        animation: 'show',// 动画效果的显示和隐藏,控制弹出层有无动画
        contentAlign: 'center',// slot的位置,控制弹出层内容区域的位置
        zIndex: 777,// 组件的页面层级
        locked: false,// 锁定,弹出层是否设定为锁定态
        onPopupChange: (e) => console.log(e)
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        _init() {

        },

        /**
         * 阻止滑动
         */
        doNothingMove() {

        },

        /**
         * 点击事件
         */
        onPopupTap() {
            console.log(`onPopupTap: `);
            // let detail = true;
            // let option = {bubbles: true, composed: true};
            // if (this.data.locked !== true) {
            //     this.setData({
            //         show: !this.data.show
            //     });
            // }
            //
            // this.triggerEvent('lintap', detail, option);
        },

        doNothingTap() {
            console.log(`doNothingTap`)
        },

        _popData() {
            this.props.onPopupChange();
        }
    },


});

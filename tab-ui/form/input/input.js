Component({
    mixins: [],
    data: {
        value: '',
    },
    props: {
        // 表单标题（label）的文本
        label: '',
        // 是否隐藏label
        hideLabel: false,
        // 是否自定义label部分
        labelCustom: false,
        // 是否显示下划线
        showRow: true,
        // 是否必选
        required: false,
        // 占位文本
        placeholder: '',
        // 输入框类型,钉钉端有效值text、search
        type: 'text',
        // 输入框值
        value: '',
        // 是否需要冒号
        colon: false,
        // 获取焦点
        focus: false,
        // 是否显示清除按钮
        clear: false,
        // 最大输入长度
        maxLength: 140,
        // 表单项的宽度，单位rpx
        width: 750,
        // 表单项标题部分的宽度，单位rpx
        labelWidth: 200,
        // label标题的显示位置 left top right
        labelLayout: 'left',
        // 是否禁用
        disabled: false,
        // 占位文字的样式
        placeholderStyle: '',
        onInputChange: (e) => console.log(e),
        onInputFocus: (e) => console.log(e),
        onInputBlur: (e) => console.log(e),
        onInputConfirm: (e) => console.log(e),
        onInputClear: (e) => console.log(e),
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        handleInputChange(event) {
            console.log('handleInputChange e', event);
            const {detail = {}} = event;
            const {value = ''} = detail;// 拿到输入值
            this.setData({
                value
            });
            // TODO 抛出拿到的输入值event.detail
        },
        handleInputFocus(e) {
            console.log('handleInputFocus e', e);
            // TODO 抛出当前输入框获取到焦点时的值event.detail
        },
        handleInputBlur(e) {
            console.log('handleInputBlur e', e);
            // TODO 抛出当前输入框失去焦点时的值event.detail

        },
        handleInputConfirm(event) {
            console.log('handleInputConfirm e', event);
            const {detail = {}} = event;
            const {value = ''} = detail;
            this.setData({
                value
            });
            // TODO 抛出当前输入框点击提交时的值event.detail
        },
        onClearTap(event) {
            this.setData({
                value: ''
            });
            // TODO 抛出当前输入框清除时的值event.detail
        },
    },
});

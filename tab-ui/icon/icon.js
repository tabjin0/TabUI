Component({
    mixins: [],
    data: {
        default: {
            size: 40,
            color: '#45526B'
        }
    },
    props: {
        name: String,
        color: String,
        size: String
    },
    didMount() {
        console.log('didMount', this.props.name);
        if (!this.props.name) {
            console.error('请传入Icon组件的name属性');
        }
    },
    didUpdate() {
        console.log('this.data.name', this.props.name)

    },
    didUnmount() {
    },
    methods: {},
});

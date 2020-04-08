Component({
    mixins: [],
    data: {
        _this: null
    },
    props: {
        name: '',
        isSubmitValidate: true
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        _init() {
            a.tab = a.tab || {};
            a.tab.forms = a.tab.forms || {};
            a.tab.forms[this.props.name] = this;
            a.tab.initValidateForm = (_this) => {
                a.tab._instantiation = _this;
            };
            a.tab.submitForm = function (name) {
                a.tab.forms[name].submit();
            };
            a.tab.resetForm = function (name) {
                a.tab.forms[name].reset();
            }
        }
    },
});

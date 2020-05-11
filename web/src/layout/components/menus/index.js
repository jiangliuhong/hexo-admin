import menus from '@/js/menus'

export default {
    name: "asideIndex",
    data() {
        return {
            menus: menus
        };
    },
    props:{
        collapse: Boolean
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted() {

    }
}
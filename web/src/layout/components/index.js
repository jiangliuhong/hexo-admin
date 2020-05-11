import AppMenus from "./menus/index.vue";
import AppBottom from "./bottom/index.vue";
import AppMain from "./main/index.vue";
import AppNavbar from "./navbar/index.vue"
export default {
    name: 'pageIndex',
    components: {
        AppMenus,
        AppBottom,
        AppMain,
        AppNavbar
    },
    data() {
        return {
            collapse: false,
            asideWidth: '200px'
        }
    },
    methods:{
        changeCollapse(collapse){
            this.collapse = collapse;
            if(this.collapse){
                this.asideWidth = '60px';
            }else{
                this.asideWidth = '200px';
            }
        }
    }
}
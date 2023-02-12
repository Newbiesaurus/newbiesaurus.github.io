export default {
    template: `
        <button v-if="tabSet.name != title" @click="tabS" class="bg-blue-500 hover:bg-blue-600 rounded p-2">{{ title }} ({{infusions.length}})</button>
        <button v-else @click="shrinkTab" class="bg-blue-200 rounded p-2 border-t border-blue-500">{{ title }} ({{infusions.length}})</button>
    `,


    methods: {
        tabS() {
            this.tabSet.name = this.title;


        },
        shrinkTab() {
            this.tabSet.name = null;
        }
    },
   
    props: {
        title: Array,
        tabSet: Array,
        infusions: Array,
    }
}

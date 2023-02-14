export default {
    template: `
        <button v-if="tabSet.name != title" @click="tabS" class="bg-blue-500 hover:bg-blue-600 rounded p-2">{{ title }} ({{infusions.length}})</button>
        <button v-else @click="shrinkTab" class="bg-blue-200 rounded p-2 border-t-4 border-blue-600">{{ title }} ({{infusions.length}})</button>
    `,

    methods: {
        tabS() {
            this.tabSet.name = this.title;
            localStorage.setItem("tab", this.title)

        },
        shrinkTab() {
            this.tabSet.name = null;
            localStorage.removeItem("tab")
        }
    },

    mounted() {
        this.tabSet.name = localStorage.getItem("tab")
    }, 
    
    props: {
        title: Array, 
        tabSet: Array, 
        infusions: Array, 
    }
}

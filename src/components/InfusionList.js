import Infusion from "./Infusion.js";


export default {
    components: { Infusion },


    template: `
        <section v-show="tabSet.name === title" class="bg-blue-200">
            <ul>
                <infusion
                    v-for="infusion in infusions"
                    :key="infusion.id"
                    :infusion="infusion"
                    @saveToList="saveToList">
                </infusion>
            </ul>
        </section>
    `,
   
    methods: {
        saveToList() {
            this.$emit('save')
        }
    },


    props: {
        infusions: Array,
        title: String,
        tabSet: Array,
    }
}

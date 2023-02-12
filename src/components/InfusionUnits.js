export default {
    template: `
        <label v-if="infusion.units < 2">mL</label>
        <label v-else-if="infusion.units < 3">g</label>
        <label v-else-if="infusion.units < 4">mg</label>
        <label v-else-if="infusion.units < 5">g</label>
        <label v-else>u</label>
    `,


    props: {
        infusion: Object
    }
}

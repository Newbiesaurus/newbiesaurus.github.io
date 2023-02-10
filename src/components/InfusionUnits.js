export default {
    template: `
        <label v-if="infusion.units < 2">mL</label>
        <label v-else-if="infusion.units < 3">mg/mL</label>
        <label v-else-if="infusion.units < 4">mcg/mL</label>
        <label v-else>u/mL</label>
    `,

    props: {
        infusion: Object
    }
}

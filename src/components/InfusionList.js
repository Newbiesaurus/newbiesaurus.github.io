import Infusion from "./Infusion.js";

export default {
    components: { Infusion },
    template: `
        <section v-show="infusions.length">
            <h2 class="p-2 font-bold"> {{ title }} ({{ infusions.length }})</h2>
            <div class=" grid grid-cols-5 gap-4 p-2 flex items-center">
                <div class="col-span-2 pl-24">Infusion (units)</div>
                <div>Rate (mL/hr)</div>
                <div>Volume (mL)</div>
                <div>Favorites</div>
            </div>
            <ul class="border border-white divide-y divide-white">
                <infusion 
                    v-for="infusion in infusions"
                    :key="infusion.id"
                    :infusion="infusion"
                ></infusion>
            </ul>

        </section>
    `,

    props: {
        infusions: Array,
        title: String,
    }
}
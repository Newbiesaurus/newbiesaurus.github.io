import InfusionUnits from './InfusionUnits.js'


export default {
    components: { InfusionUnits },


    template: `
        <div class="border-8 border-blue-200">
        <div class="border border-blue-300"><label>Infusion:</label> <label class="text-blue-800 text-2xl">{{infusion.name}}
            <label v-if="infusion.units > 1">{{infusion.concentration}}</label>
            (<infusion-units :infusion="infusion"></infusion-units>
            <label v-if="infusion.units > 1">/mL</label>)</label></div>


        <div class="border border-blue-300"><label>Dose: <input class="p-2 border border-gray-800 text-black" v-model="correctedRate" placeholder="Dose..." /> <infusion-units :infusion="infusion"></infusion-units>
        <label v-show="infusion.weight > 1">/kg</label>/hr</label> </div>


        <div class="border border-blue-300"><label>Volume:</label> <input class="p-2 border border-gray-800 text-black" v-model ="correctedVolume" placeholder="Volume..." /> mL</div>
        <div class="border border-blue-300"><lavel>Volume to complete:</label><select class="p-2 border border-gray-800 text-black"name="correctedCompleted" v-model="correctedCompleted" placeholder="1" class="p-2 text-black">
            <option value="1">100%</option>
            <option value="0.75">75%</option>
            <option value="0.50">50%</option>
            <option value="0.25">25%</option>
        </select></div>


        <div class="border border-blue-300 flex justify-between">
            <button class="text-white bg-blue-600 hover:bg-blue-800
            rounded px-7 py-2 p-2" @click="corrected">Save</button>


            <div>Favorites: <input type="checkbox" v-model="infusion.favorites" /></div>
        </div>
    </div>
    `,


    props: {
        infusion: Object
    },


    data() {
        return {
            correctedRate: (this.infusion.rate * this.infusion.concentration)/this.infusion.weight,
            correctedVolume: this.infusion.volume,
            correctedCompleted: 1,
        }
    },


    methods: {
        corrected() {
            this.infusion.edit = false;
            this.infusion.rate = this.corCalcRates
            this.infusion.volume = this.corCalcVolume
            this.infusion.end = Date.now();
            this.$emit('save')        
        }
    },


    computed: {
        corCalcRates() {
            return (this.correctedRate * this.infusion.weight)/this.infusion.concentration
        },
        corCalcVolume() {
            return this.correctedVolume * this.correctedCompleted
        }


    }
}

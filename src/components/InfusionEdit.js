import InfusionUnits from './InfusionUnits.js'

export default {
    components: { InfusionUnits },
    template: `
        <div class="grid grid-cols-5 gap-4 p-2 flex items-center">
            <div class="col-span-2 p-2">
                <button @click="corrected" class="bg-gray-400 hover:bg-gray-800 
                    rounded px-7 py-2 p-2">Save</button>
                {{ infusion.name }} <label v-show="infusion.units > 1"> 
                {{ infusion.concentration }}</label>(<InfusionUnits :infusion="infusion"></InfusionUnits>)
            </div>
            <div class="p-2 border-l"><input class="p-2 text-black" v-model="correctedRate" placeholder="Rate..."/>
                u<label v-show="infusion.weight > 1">/kg</label>/hr</div>
            <div class="p-2 border-l">
                <input class="p-2 text-black" v-model="correctedVolume" placeholder="Volume..."/> 
                mL
                <select name ="corrected Completed" v-model="correctedComplete" placeholder="1" class="p-2 text-black">
                    <option value="1">100%</option>
                    <option value="0.75">75%</option>
                    <option value="0.5">50%</option>
                    <option value="0.25">25%</option>
                </select>
            </div>

            <div class="p-2 border-l"><input type="checkbox" v-model="infusion.favorites" /></div>
        </div>
    `,
    
    props: {
        infusion: Object
    },

    data() {
        return {
            correctedRate: (this.infusion.rate * this.infusion.concentration)/this.infusion.weight,
            correctedVolume: this.infusion.volume,
            correctedComplete: 1,
        }
    },

    methods: {
        corrected() {
            this.infusion.rate = this.corCalcRates;
            this.infusion.volume = this.corCalcVolume;
            this.infusion.volumeDec = this.corCalcVolumeDec;
            this.infusion.edit = false;
        }
    },

    computed: {
        corCalcRates() {
            return (this.correctedRate * this.infusion.weight)/this.infusion.concentration
        },
        corCalcVolumeDec() {
            return this.corCalcRates / 3600
        },
        corCalcVolume() {
            return this.correctedVolume*this.correctedComplete
        },
    }

}
export default {
    template: `
        <div class="space-y-8 grid grid-col-1 place-items-center border-8 border-blue-300">
            <button v-show="addInfusion != true" @click="addInfusion = true" class="text-white bg-blue-600 hover:bg-blue-800
            rounded px-7 py-2 p-2">New Infusion</button>
        </div>
        <div v-show="addInfusion != false">
            <form  @submit.prevent="add">
                <div class="text-black space-y-2 grid grid-col-1 place-items-center">
                    <div>Infusion</div>
                    <div><input class="border border-gray-800" v-model="newInfusion" placeholder="Medication..." class="p-2"/></div>
                    <div>Rate</div>
                    <div><input v-model="newRate" placeholder="Rate..." class="p-2 border border-gray-800"/></div>
                    <div>Units</div>
                    <select name="units" v-model="newUnits" placeholder="1" class="p-2 border border-gray-800">
                        <option value="1">mL/hr</option>
                        <option value="2">g/hr</option>
                        <option value="3">mg/hr</option>
                        <option value="4">mcg/hr</option>
                        <option value="5">u/hr</option>


                    </select>
                    <div>Weight based: <input type="checkbox" v-model="weightBased"></div>
                   
                    <div v-show="newUnits > 1">Concentration u/mL</div>
                    <div v-show="newUnits > 1"><div><input v-model="newU" placeholder="U..." class="p-2 border border-gray-800"/></div>
                        <div><input v-model="newML" placeholder="mL..." class="p-2 border border-gray-800"/></div>
                    </div>
                   
                    <div v-show="weightBased === true">Weight</div>
                    <div><input v-show="weightBased === true" v-model="newWeight" placeholder="kg..." class="p-2 border border-gray-800"/></div>
                   
                    <div>Volume</div>
                    <div><input v-model="newVolume" placeholder="Volume..." class="p-2 border border-gray-800"/></div>
                    <div>Percent to Complete</div>
                    <div><select name="Percent Completed" v-model="percentComplete" placeholder="1" class="p-2 border border-gray-800">
                        <option value="1">100%</option>
                        <option value=".75">75%</option>
                        <option value=".5">50%</option>
                        <option value=".25">25%</option>
                    </select></div>
                    <button type="submit" class="text-white bg-blue-600 hover:bg-blue-800
                    rounded px-7 py-2 p-2">Add</button>
                </div>
            </form>
            <div class="space-y-2 grid grid-col-1 place-items-center p-2">
                <button @click="addInfusion = false" class="text-white bg-blue-600 hover:bg-blue-800
                rounded px-7 py-2 p-2">Cancel</button>
            </div>
        </div>
    `,
    props: {
        Infusions: Array,
    },
    data() {
        return {
            addInfusion: false,
            newInfusion: '',
            newRate: '',
            newConcentration: 1,
            newWeight: 1,
            newUnits: 1,
            newU: 1,
            newML: 1,
            newVolume: '',
            percentComplete: '1',


            weightBased: false,
        }
    },
    methods: {


        add() {
            this.$emit('add', this.newInfusion, this.calcConcentration, this.newUnits, this.calcRates, this.calcVolume, this.newWeight)
           
            this.newInfusion = '';
            this.newRate = '';
            this.newConcentration = 1;
            this.newWeight= 1,
            this.newUnits = 1;
            this.newU = 1;
            this.newML = 1;
            this.newVolume = '';
            this.percentComplete = 1;
            this.addInfusion = false;
            this.weightBased = false;
        }
    },
   
    computed: {
        calcConcentration () {
            return this.newU/this.newML
        },
        calcRates() {
            return (this.newRate * this.newWeight)/this.calcConcentration
        },
        calcVolume() {
            return this.newVolume*this.percentComplete
        },
    }
   
}

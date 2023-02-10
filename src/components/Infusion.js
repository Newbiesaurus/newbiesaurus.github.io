import InfusionEdit from './InfusionEdit.js'
import InfusionUnits from './InfusionUnits.js'
import InfusionTimer from './InfusionTimer.js'

export default {
    components: { InfusionEdit, InfusionUnits, InfusionTimer },
    template: `
        <li v-if="infusion.edit != true">
            <div class="grid grid-cols-5 gap-4 p-2 flex items-center overflow-hidden">
                <div class="col-span-2 p-2">
                    <button class="bg-gray-400 hover:bg-gray-800 
                        rounded px-7 py-2 p-2" @click="infusion.edit = true">Edit</button>
                    {{ infusion.name }} <label v-show="infusion.units > 1"> 
                    {{ infusion.concentration }}</label>(<InfusionUnits :infusion="infusion"></InfusionUnits>)
                </div>
                <div class="p-2 border-l">{{ infusion.rate }} 
                    mL/hr</div>
                <div class="p-2 border-l"><infusion-timer :infusion="infusion"></infusion-timer></div>

                <div class="p-2 justify-between border-l">
                    <input type="checkbox" class="pr-2"v-model="infusion.favorites" /> 
                    <button class="bg-gray-400 hover:bg-gray-800 
                    rounded px-7 py-2 p-2" @click="deleteDrip">Delete</button>
                </div>
            </div>
        </li>
        <li v-else>
            <infusion-edit :infusion="infusion"></infusion-edit>
        </li>
    `,
     
    methods: {
        deleteDrip() {
            this.infusion.delete = true;
            localStorage.clear();
        }
    },
    props: {
        infusion: Object
    }
}
import InfusionUnits from "./InfusionUnits.js"
import InfusionEdit from "./InfusionEdit.js";
import InfusionTimer from "./InfusionTimer.js";

export default {
    components: { InfusionUnits, InfusionEdit, InfusionTimer },

    template: `
    <li v-if="!infusion.edit">
	    <div class="border-b-8 border-blue-300">
        	<div class="border-b-4 border-blue-300">Infusion:  
			<label class="text-blue-800 text-2xl">{{ infusion.name }}
            			<label v-if="infusion.units > 1">{{ infusion.concentration }}</label>
            			(<infusion-units :infusion="infusion"></infusion-units>
            			<label v-if="infusion.units > 1">/mL</label>)
			</label>
		    </div>

        	<div class="border-b-4 border-blue-300">Rate: 
			    <label class="text-blue-800 md:text-l text-2xl">{{infusion.rate}} mL/hr</label>
		    </div>
            
        	<div class="border-b-4 border-blue-300" v-show="infusion.units > 1">
			    <label>Dose: {{ Dose }} <infusion-units :infusion="infusion"></infusion-units>
        			<label v-show="infusion.weight > 1">/kg</label>
                    <label v-if="infusion.time > 1">/min</label>
                    <label v-else>/hr</label>
			    </label>
		    </div>

        	<div><infusion-timer :infusion="infusion" @save="save"></infusion-timer></div>

        	<div class="border-4 border-blue-200 flex justify-between">
            		<button class="text-white bg-blue-600 hover:bg-blue-800 
            		rounded px-7 py-2 p-2" @click="infusion.edit = true">Edit</button>

            		<div>Favorites: <input type="checkbox" @change="save" v-model="infusion.favorites" /></div>

            		<button @click="deleteDrip" class="text-white bg-blue-600 hover:bg-blue-800 
            		rounded px-7 py-2 p-2">Delete</button>
        	</div>
        </div>
    </li>

    <li v-else><infusion-edit :infusion="infusion" @save="save"></infusion-edit></li>
    `,
    
    methods: {
        deleteDrip() {
            this.infusion.active = false; 

            delete this.infusion.name;
            delete this.infusion.concentration;
            delete this.infusion.units;
            delete this.infusion.time;
            delete this.infusion.rate;
            delete this.infusion.volume;
            delete this.infusion.volumeDec;
            delete this.infusion.weight;
            delete this.infusion.start;
            delete this.infusion.edit;
            delete this.infusion.running;
            delete this.infusion.completed;
            delete this.infusion.favorites;
            delete this.infusion.active;
            delete this.infusion.id;

            this.save()
        },

        save() {
            this.$emit('saveToList')
        }

    },

    computed: {
        Dose() {
            return (((this.infusion.rate * this.infusion.gttF)/this.infusion.time) * this.infusion.concentration)/this.infusion.weight 
        },
    },

    props: {
        infusion: Object
    }
}

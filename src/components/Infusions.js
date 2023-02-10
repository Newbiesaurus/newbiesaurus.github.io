import InfusionList from "./InfusionList.js"
import InfusionEdit from "./InfusionEdit.js"
import InfusionCreate from "./InfusionCreate.js"
import InfusionTimer from "./InfusionTimer.js"


export default {
    components: { InfusionList, InfusionEdit, InfusionCreate, InfusionTimer },

    template: `
        <section class="space-y-6">
            <infusion-list :infusions="filters.infusing" title="Infusing"></infusion-list>
            <infusion-list :infusions="filters.completed" title="Completed"></infusion-list>
            <infusion-list :infusions="filters.favorites" title="favorites"></infusion-list>

            <infusion-create @add="add" :infusions="infusions"></infusion-create>
        </section>
    `,
    
    data() {
        return {
            infusions: [ {
                name: 'Heparin', 
                concentration: '50',
                units: '4',
                rate: '27',
                volume: '500', 
                volumeDec: '0.0075',
                weight: '75',
                edit: false,
                running: false,
                completed: false,
                favorites: false,
                delete: false,
                id: 1,
            }],
        }
    },
    
    computed: {
        filters() {
            return {
                infusing: this.infusions.filter(infusion => !infusion.complete && !infusion.delete),
                completed: this.infusions.filter(infusion => infusion.complete && !infusion.delete && !infusion.favorites),
                favorites: this.infusions.filter(infusion => infusion.favorites && !infusion.delete),
            }
        }
    },

    methods: {
        add(infusion, concentration, units, rate, volume, volumedec, weight) {
            this.infusions.push({
                name: infusion, 
                concentration: concentration,
                units: units,
                rate: rate,
                volume: volume,
                volumeDec: volumedec,
                weight: weight,
                edit: false,
                running: false,
                completed: false,
                favorites: false,
                delete: false,
                id: this.infusions.length +1,
            });
        },
    }
}
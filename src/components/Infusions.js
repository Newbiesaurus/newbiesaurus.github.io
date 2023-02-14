import InfusionTab from "./InfusionTab.js"
import InfusionList from "./InfusionList.js"
import InfusionEdit from "./InfusionEdit.js";
import InfusionCreate from "./InfusionCreate.js";

export default {
    components: { InfusionTab, InfusionList, InfusionEdit, InfusionCreate },

    template: `
        <div class="space-y-6 bg-blue-400">
            <infusion-tab title="Infusing" :tabSet="tabSet" :infusions="filters.infusing"></infusion-tab>
            <infusion-tab title="Completed" :tabSet="tabSet" :infusions="filters.completed"></infusion-tab>
            <infusion-tab title="Favorites" :tabSet="tabSet" :infusions="filters.favorites"></infusion-tab>
        </div>

        <div>
            <infusion-list title="Infusing" :tabSet="tabSet" :infusions="filters.infusing" @save="save"></infusion-list>
            <infusion-list title="Completed" :tabSet="tabSet" :infusions="filters.completed" @save="save"></infusion-list>
            <infusion-list title="Favorites" :tabSet="tabSet" :infusions="filters.favorites" @save="save"></infusion-list>
        </div>

        <div class="space-y-6"><infusion-create @add="add" :infusions="infusions"></infusion-create></div>
    `,

    data () {
        if (!localStorage.getItem("infusions")) {var infusionP = []}
        else {var infusionP = JSON.parse(localStorage.getItem("infusions"))}
        return {
            infusions: infusionP,
            tabSet:[{name: "Infusing"}]
        }
    }, 

    computed: {
        filters() {
            return {
                infusing: this.infusions.filter(infusion => !infusion.complete && infusion.active),
                completed: this.infusions.filter(infusion => infusion.complete && infusion.active && !infusion.favorites),
                favorites: this.infusions.filter(infusion => infusion.favorites && infusion.active),
            }
        }
    }, 

    methods: {
        save() {
            var tempInfusion = this.infusions;
            localStorage.removeItem("infusions")
            localStorage.setItem("infusions",
            JSON.stringify(tempInfusion));
        },

        add(name, concentration, units, gttF, time, rate, volume, weight) {
            this.infusions.push({
                name: name, 
                concentration: concentration,
                units: units,
                gttF: gttF,
                time: time,
                rate: rate,
                volume: volume,
                weight: weight,
                end: 1,
                running: false,
                completed: false,
                favorites: false,
                active: true,
                id: this.infusions.length +1,
            });
            this.save()
        },
    }
}


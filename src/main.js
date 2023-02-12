import Infusions from './components/Infusions.js'


export default {
    components: { Infusions },
   
    template: `
        <h2 class="font-serif font-bold text-2xl
            text-red-600 bg-sky-600"><div class ="justify-center">
            <label class="bg-blue-400 rounded p-2 border-8 border-sky-600 text-center">
            Infusi<label class="text-blue-600">o</label>n Timer</label></div>
        </h2>
        <infusions></infusions>
    `,
}

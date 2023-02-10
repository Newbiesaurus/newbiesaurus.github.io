export default {
    template: `
        <div class="overflow-hidden"><span :class="infusion.running && 'text-red-600'">{{ infusion.volume }}</span> mL
        <button
            v-show="!infusion.complete || infusion.favorites"
            v-if="!infusion.running"
            @click="countDownTimer()"
            v-model="infusion.complete"
            class="bg-gray-400 hover:bg-gray-800 rounded px-5 py-2"
        >Start
        </button></div>
    `,
    data() {
        return {
            countDownTimer() {
                this.infusion.running = true;
                if (this.infusion.volume > 0) {
                    setTimeout(() =>{
                        this.infusion.volume -= this.infusion.volumeDec
                        this.countDownTimer();
                    }, 1000)
                }
                else {
                    if (!this.infusion.favorites) {this.infusion.complete = true};
                    this.infusion.running = false,
                    alert (this.infusion.name + " is completed. ")
                }
            }
        }
    },

    props: {
        infusion: Object,
    }
}
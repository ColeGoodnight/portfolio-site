<template>
  <div id="home">
    <img id="headshot" src="@/assets/headshot.jpg"/>
    <contact/>
    <p id="changeQuote" ref="quote"></p>
    
  </div>
</template>

<script>
import contact from '@/components/Contact.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    contact,
  },
  data () {
        return {
            firstQuoteCycle: 0,
            quotes: [
                "\"Your first design sucks.\" - James Wilson",
                "\"A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.\" - Hitchhiker’s Guide to The Galaxy",
                "\"One is always a long way from solving a problem until one actually has the answer.\" - Stephen Hawking",
                "\"Experience is critical, for it determines how fondly people remember their interactions.\" - Don Norman",
                "\"That thing wasn't even fully paid off yet!\" - Emperor Palpatine",
                "\"Life is too short, I will never learn all that exist in our tiny galaxy let alone the rest of the universe.\" - Catherine Halsey",
                "\"Obstacles are found everywhere, and in overcoming them we nourish ourselves.\" - David Belle",
                "\"I try to not ruin biking and keep it the same fun it has always been. I try to make obstacles or projects that keep me stoked.\" - Brandon Semenuk",
                "\"Success depends on forethought, dispassionate calculation of probabilities, accounting for every stray variable.\" - Robert House",
                "\"Only on the hard path can you actualize your potential, grow, mature, have peak human experiences and enjoy epiphanies.\" - Thomas Stark",
                "\"We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.\" - Stephen Hawking",
                "\"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.\" - Carl Sagan",
                "\"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.\" - Issac Asimov",
                "\"Abstraction is one of the greatest visionary tools ever invented by human beings to image, decipher, and depict the world.\" - Jerry Saltz",
                "\"Computer Science is a science of abstraction - creating the right model for a problem and devising the appropriate mechanizable techniques to solve it\" - Alfred Aho",
                
            ],
            animationTiming: 8
        }
    },
    created() {
      this.interval = setInterval(this.getQuoteText, this.animationTiming * 1000);
    },
    mounted() {
      this.$refs.quote.innerHTML =  "Hi there, my name is Cole. I design software (amongst other things)."
    },
    methods: {
      getQuoteText() {
        var nextQuote =  this.quotes[Math.trunc(Math.random() * this.quotes.length)]
        while (nextQuote === this.$refs.quote.innerHTML) {
          nextQuote =  this.quotes[Math.trunc(Math.random() * this.quotes.length)]
        }
        this.$refs.quote.innerHTML = nextQuote
      }
    },
    computed: {
      animationTimingString() {
        return 'fade infinite ' + this.animationTiming.toString() +'s'
      }
    },
    setup() {
      const quote = ref(null)

      return {
        quote
      }
    },
}
</script>

<style>
  p {
    max-width: 60ch;
    margin: 0 auto;
    height: 54px;
    font-weight: 400;
  }

  #headshot {
      border-radius: 50%;
      width: 300px;
      margin: auto
  }

  #home {
    margin-top: 5%;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

#changeQuote{
  opacity: 0;
  animation: v-bind(animationTimingString);
}

@keyframes fade{
  20%{
    opacity: 1;
  }
  80%{
    opacity: 1;
  }
}
</style>

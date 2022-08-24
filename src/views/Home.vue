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
            ]
        }
    },
    created() {
      this.interval = setInterval(this.getQuoteText, 8000);
    },
    mounted() {
      this.$refs.quote.innerHTML =  "Hi there, my name is Cole. I engineer software (amongst other things)."
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
      max-width: 65ch;
      margin: 0 auto;
    }

    #headshot {
        border-radius: 50%;
        width: 300px;
        margin: auto
    }

    #home {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 40px;
    }

#changeQuote{
  opacity: 0;
  animation: fade infinite 8s;
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

<template>
    <div id="main">
        <SlidingInfoVue title="Cloud Blog App" >
            <template v-slot:image>
            
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <p>The cloud blog app was a small application built by a team of 2 to explore the capabilites of AWS and a first-foray into web development, which included learning Node.js. The main AWS features utilized included AWS RDS to store both posts and authentication information (using an ORM to interface, as well as custom Passport.js strategies for authentication), ElastiCache to cache posts, and EC2 to host the app. </p>
                    <br>
                    <p>This project provided a unique challenge as I had limited JavaScript experience prior, especially on the backend. Not only was I learning the ins and outs of how requests are handled, but I was also integrating with AWS services as I went. This resulted in a functional and scalable application that was legitimately challenging to implement. My partner and I both grew greatly during this project, both in technical skill and project management.</p>
                </div>
            </template>
        </SlidingInfoVue>
        <SlidingInfoVue title="Portfolio Site" >
            <template v-slot:image>
            
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <p>This project (the site you're on!) is meant to serve as a single point-of-contact (github, email, linkedin, etc.), a way to detail my experiences more than what's offered by my resume, and try some new technologies in the form of Vue, Go, and Google Cloud. You can find the source code <a href="https://github.com/ColeGoodnight/portfolio-site" target="_blank">here on Github</a>.</p>
                    <br>
                    <p>While I found some challenges in the form of learning curve, new technolgies, etc., I learned primarily about UX/UI concepts in creating this site. I explored several different concepts in Figma before settling on the current design, <a href="https://www.figma.com/file/p8BwwlT6EjlYCho5GoDR5b/Portfolio-Site?node-id=64%3A261" target="_blank">all of which can be seen here</a>.</p> 
                </div>
            </template>
        </SlidingInfoVue>
    </div>
</template>

<script>
import SlidingInfoVue from '../components/SlidingInfo.vue';

export default {
    setup() {
        return {};
    },
    components: { SlidingInfoVue }
}
</script>

<style scoped>
    p {
        text-align: left;
        height: 100%
    }

    .textContainer {
        max-width: 70ch;
        align-self:center;
    }

    #main {
        margin-top: 5%;
        
    }
</style>
<template>
    <div id="main">
        <SlidingInfoVue title="Cloud Blog App" >
            <template v-slot:image>
            
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <p>The cloud blog app was a small application built by a team of 2 to explore the capabilites of AWS and a first-foray into web development, which included learning Node.js. Given an existing Node app, we were tasked with converting it to use AWS features in place of the functionality afforded by the MongoDB database. The main AWS features utilized included AWS RDS to store both posts and authentication information (using an ORM to interface, as well as custom Passport.js strategies for authentication), ElastiCache to cache posts, and EC2 to host the app. At this link you can find the <a href="https://github.com/ColeGoodnight/cloudBlogApp" target="_blank">source code for this project</a>.</p>
                    <br>
                    <p>This project provided a unique challenge as I had limited JavaScript experience prior, especially on the backend. Not only was I learning the ins and outs of how requests are handled, but I was also integrating with AWS services as I went. This resulted in a functional and scalable application that was legitimately challenging to implement. My partner and I both grew greatly during this project, both in technical skill and project management.</p>
                    <br>
                    <p>One of the big challenges I faced during this project was the lack of documentation on how the existing application worked. As Node is a very flexible framework, there are many ways to achieve the same end goal. This made it difficult to figure out the structure of the application at times, but I believe resulted in a deeper understanding of how everything worked in the end.</p>
                </div>
            </template>
        </SlidingInfoVue>
        <div class="bottomItem">
            <SlidingInfoVue title="Portfolio Site" >
                <template v-slot:image>
                
                </template>
                <template v-slot:content>
                    <div class="textContainer">
                        <p>This project (the site you're on!) is meant to serve as a single point-of-contact (github, email, linkedin, etc.), a way to detail my experiences more than what's offered by my resume, and try some new technologies in the form of Vue, Docker, and Google Cloud. You can find the source code <a href="https://github.com/ColeGoodnight/portfolio-site" target="_blank">here on Github</a>.</p>
                        <br>
                        <p>While I found some challenges in the form of learning curve, new technolgies, etc., I learned primarily about UX/UI concepts in creating this site. I explored several different concepts in Figma before settling on the current design, <a href="https://www.figma.com/file/p8BwwlT6EjlYCho5GoDR5b/Portfolio-Site?node-id=64%3A261" target="_blank">all of which can be seen here</a>.</p> 
                        <br>
                        <p>In addition to the above, this website is built and served through a CI/CD pipeline on Google Cloud. Upon pushing to the release branch, Google Cloud Build automatically builds a Docker container using the Dockerfile in the repo. From there it is sent to Google Cloud Run, which runs the container and serves the webpage through Google Domains.</p>
                    </div>
                </template>
            </SlidingInfoVue>
        </div> 
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
        height: 100%;
        font-size: 20px;
        
    }

    .textContainer {
        max-width: 70ch;
        align-self:center;
        margin: 0 20px;
        line-height: 1.4;
    }

    #main {
        margin-top: 5%;
    }

    .bottomItem {
        margin-bottom: 40px;
    }
</style>

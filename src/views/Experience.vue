<template>
    <div id = "main">
        <SlidingInfoVue title="Polaris Inc. - Software Development Intern" >
            <template v-slot:image>
                <PolarisLogo />
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <h2>Summer 2022</h2>
                    <p>During my 12 week internship with Polaris I was in charge of developing Customer Analytics Twin, an application to visualize customer analytics information. This tool is projected to increase return customer sales by 0.01%, generating $13.8M of value over the next 3 years. While CAT is primarily targeted at sales people in Polaris dealerships, there are a variety of other internal use cases in customer relations and marketing.</p>
                </div>
                <img src="@/assets/DemoDataScreenshot.png" />
                <div class="textContainer">
                    <p>The resulting product is an MVC application with a frontend built in a hybrid of Vanilla.js and C# Blazor pages. The backend is implemented in ASP.NET Core, interfacing with a Snowflake database. This application is deployed to a CI/CD pipeline using Azure DevOps. On the frontend the analytics page utilizes an SPA-esque pattern; when a new customer's information is retrieved from the database via REST, on screen information is updated without a page reload.</p>
                    <br>
                    <p>Funtionality that is not pictured above includes a "Pull List" function, allowing end users to generate lists of customers fitting certain criteria for marketing purposes. This includes filters for various attributes such as location, generalized demographics info, and existing productline owners. This then generates and executes a dynamic SQL query to retrieve customer's information, which can be displayed within the application or downloaded for use elsewhere.</p>
                    <br>
                    <p>My time at Polaris offered the unique experience to take full ownership of a project with real world effects (and actual end users!). One of the big challenges was the system design aspect of this project, specifically working within the constraints of an existing organization's previous technology choices. While I was not familiar with C# or the .NET framework prior to this, it made sense to build and deploy the application in a similar fashion to others in the Polaris ecosystem. </p>
                </div>
            </template>
        </SlidingInfoVue>

        <SlidingInfoVue title="Western Washington University - Teacher's Assistant" >
            <template v-slot:image>
                <WWULogo />
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <h2>Fall 2021</h2>
                    <p>During this period as Teacher's Assistant I was TAing for WWU's UNIX Software Development and Multithreading class. The main topics in this class include multithreading, low level C concepts, and process management/control. I was primarily responsible for grading, helping students with conceptual understanding, and helping students debug code. To make my own grading work more efficient, I develop a series of Python scripts to partially automate assignment grading. These scripts resulted in an 80 percent reduction in grading time on average, and also reduced the error rate. This was compared to a baseline of the first two weeks, where I manually graded assignments.</p>
                    <br>
                    <h2>Spring 2022</h2>
                    <p>More recently I have TAed for WWU's introductory programming course, Programming Fundamentals in C++. This class is starting from scratch, teaching students fundamental ideas such as variables, control flow, and code reuse. With this course the professor already had a CI/CD pipeline to automate grading, so my focus was on helping students with conceptual understanding and code. This class was particularly challenging as students were less experienced than those in my previous TA position, as well as a much larger amount of them. I often found myself having to create analogies and other creative methods to describe difficult concepts.</p>
                    <br>
                    <h2>Fall 2022</h2>
                    <p>I am currently a TA for WWU's introductory web development course, primary topics include basic HTML/CSS and some JavaScript.</p>
                </div>
            </template>
        </SlidingInfoVue>
        
        <div class="bottomItem">
            <SlidingInfoVue class="bottomItem" title="Western Washington University - Lead Tutor" >
                <template v-slot:image>
                    <WWULogo />
                </template>
                <template v-slot:content>
                    <div class="textContainer">
                        <h2>Winter 2021 - Present</h2>
                        <p>As Lead Tutor at WWU I am primarily responsible for managing our tutoring staff as well as tutoring students myself. The tutoring program covers a wide variety of topics including but not limited to Data Structures, Systems, Formal Languages, and Databases. Throughout my 2 years of tutoring I have answered more than 300 questions (and saved countless due-night-of assignments). Tutoring can be challenging due to the wide variety of experience levels that we receive, as well as some of the problems being legitimately quite difficult to solve; we service some more advanced classes that work with languages like C and Assembly, where hard to debug problems often arise.</p>
                    </div>
                </template>
            </SlidingInfoVue>
        </div>
    </div>
</template>

<script>
import SlidingInfoVue from '../components/SlidingInfo.vue';
import WWULogo from '../components/WWULogo.vue';
import PolarisLogo from '../components/PolarisLogo.vue';

export default {
    components: {
    SlidingInfoVue,
    WWULogo,
    PolarisLogo
},
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .bottomItem {
        margin-bottom: 40px;
    }

    #main {
        margin-top: 5%;
        
    }

    h2 {
        text-align: left;
    }

    p {
        text-align: left;
        height: 100%
    }

    img {
        width: 100%
    }

    .textContainer {
        max-width: 70ch;
        align-self:center;
    }
</style>
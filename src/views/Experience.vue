<template>
    <div id = "main">
        <SlidingInfo title="Software Engineer Intern" employer="Polaris Inc." >
            <template v-slot:image>
                <PolarisLogo/>
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <h2>Summer 2022</h2>
                    <p>During my 12 week internship with Polaris I was in charge of developing Customer Analytics Twin, an application to visualize consumer statistics information. This tool is projected to increase return customer sales by 0.01%, generating $13.8M of value over the next 3 years. While CAT is primarily targeted at sales people in Polaris dealerships, there are a variety of other internal use cases in customer relations and marketing.</p>
                </div>
                <img src="@/assets/DemoDataScreenshot.png" />
                <div class="textContainer">
                    <p>The resulting product is an MVC application with a frontend built in a hybrid of Vanilla.js and C# Blazor pages. The backend is implemented in ASP.NET Core, interfacing with a Snowflake database. This application is deployed to a CI/CD pipeline using Azure DevOps. On the frontend the analytics page utilizes an SPA-esque pattern; when a new customer's information is retrieved from the database via REST, onscreen information is updated without a page reload.</p>
                    <br>
                    <p>Functionality that is not pictured above includes a "Pull List" function, allowing end users to generate lists of customers fitting certain criteria for marketing purposes. This includes filters for various attributes such as location, generalized demographic information, and existing product line owners. This then generates and executes a dynamic SQL query to retrieve customer information, which can be displayed within the application or downloaded for use elsewhere.</p>
                    <br>
                    <p>My Polaris internship offered the unique experience to take full ownership of a project with real world effects (and actual end users!). A substantial challenge was the system design aspect of this project. I was not familiar with C# or ASP.NET prior to this, which were existing standard technologies at Polaris. It made sense to build and deploy the application similarly to others within the organization.</p>
                </div>
            </template>
        </SlidingInfo>

        <SlidingInfo title="Teacher's Assistant" employer="Western Washington University" >
            <template v-slot:image>
                <WWULogo/>
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <h2>Fall 2021</h2>
                    <p>During this period as Teacher's Assistant I was TAing for WWU's UNIX Software Development and Multithreading class. The main topics in this class include multithreading, low level C concepts, and process management/control. I was primarily responsible for grading assignments, helping students with conceptual understanding, and assisting students with code debugging. To make my own grading work more efficient, I developed a series of Python scripts to partially automate assignment grading. This reduced grading time by 80 percent decreased the error rate compared to the first two weeks, where I was manually grading.</p>
                    <br>
                    <h2>Spring 2022</h2>
                    <p>More recently I assisted with WWU's introductory programming course, Programming Fundamentals in C++. This class starts from scratch, teaching students fundamental ideas such as variables, control flow, and code reuse. This professor already had a CI/CD pipeline to automate grading, so my primary focus was running labs and helping students with conceptual understanding. As there were many more students with much less experience in this class, I often found myself challenged to create analogies and utilize other creative methods to describe difficult concepts.</p>
                    <br>
                    <h2>Fall 2022</h2>
                    <p>During this period I performed similar duties as Teacher's Assistant for WWU's introductory web development course. The primary topics of this class include basic HTML/CSS and some JavaScript. My responsibilities included running weekly labs and grading student assignments.</p>
                    <br>
                    <h2>Winter 2022</h2>
                    <p>This quarter I am TAing for WWU's introductory systems course. Topics of this course include low level C and ASM programming. My responsibilities include running weekly labs and grading student assignments.</p>
                
                </div>
            </template>
        </SlidingInfo>
        
        <SlidingInfo title="Lead Tutor" employer="Western Washington University" >
            <template v-slot:image>
                <WWULogo/>
            </template>
            <template v-slot:content>
                <div class="textContainer">
                    <h2>Winter 2021 - Present</h2>
                    <p>As Lead Tutor at WWU I am primarily responsible for managing our tutoring staff, while also tutoring students myself. The tutoring program covers a wide variety of topics including but not limited to Data Structures, Systems, Formal Languages, and Databases. Throughout my two years of tutoring I have answered more than 300 questions (and saved countless due-night-of assignments). Tutoring is often challenging due to the wide variety of experience levels that I work with. Some students struggle with basic concepts, but we also service some advanced classes that work with languages like C and Assembly. It is fulfilling to assist with legitimately hard debugging problems that are quite difficult to solve.</p>
                </div>
            </template>
        </SlidingInfo>

        <div class="bottomItem">
            <SlidingInfo class="bottomItem" title="Developer" employer="Western Washington University" >
                <template v-slot:image>
                    <WWULogo/>
                </template>
                <template v-slot:content>
                    <div class="textContainer">
                        <h2>Spring 2022 - Present</h2>
                        <p>I am one of four developers working on an augmented reality tour guide app to help students navigate WWU's campus. This application has multiple components. It is primarily an Android application implemented in Kotlin for the primary tour guide functionality. There is also an administrative portal developed in React.js and Express.js that allows administrators to update, add, or remove building information. Our team works with Agile methodologies, utilizing Mocha Chai/JUnit 5 to implement test-driven development and using Cucumber for behavior-driven development.</p>
                    </div>
                </template>
            </SlidingInfo>
        </div>
    </div>
    
</template>

<script>
import SlidingInfo from '../components/SlidingInfo.vue';
import WWULogo from '../components/WWULogo.vue';
import PolarisLogo from '../components/PolarisLogo.vue';

export default {
    components: {
    SlidingInfo,
    WWULogo,
    PolarisLogo,
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
        height: 100%;
        font-size: 20px;
        line-height: 1.4;
    }

    img {
        width: 100%;
        margin: 5px;
    }

    .textContainer {
        max-width: 70ch;
        align-self:center;
        margin: 0 20px;
    }
</style>
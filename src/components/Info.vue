<template>
    <div id="header">
        <div v-if="$isMobile()" id="mobileName">
            <router-link class="routerLink" to='/'>
                COLE GOODNIGHT
            </router-link>
        </div>
        <div v-else id="name">
            <router-link class="routerLink" @click='none' to='/'>
                COLE GOODNIGHT
            </router-link>
        </div>

        
        <div v-if="$isMobile()" id="slide">
            <SidebarMenu v-slot="scope">
                    <div id="flexCol">
                        <router-link class="routerLink" to='/' @click="scope.toggle">HOME</router-link>
                        <router-link class="routerLink" to='/experience/' @click="scope.toggle">EXPERIENCE</router-link>
                        <router-link class="routerLink" to='/projects/' @click="scope.toggle">PROJECTS</router-link>
                        <router-link class="routerLink" to='/about' @click="scope.toggle">ABOUT</router-link>
                    </div>
            </SidebarMenu>
        </div> 
        <div v-else id="nav">
            <router-link class="routerLink" to='/'>HOME</router-link>
            <router-link class="routerLink" to='/experience/'>EXPERIENCE</router-link>
            <router-link class="routerLink" to='/projects/'>PROJECTS</router-link>
            <router-link class="routerLink" to='/about'>ABOUT</router-link>
        </div>
        
    </div>

</template>

<script>
import SidebarMenu from './SidebarMenu.vue'

export default {
    data() {
        return {
            menu: [
                {
                    header: 'test'
                }
            ]
        }
    },
    components: {
        SidebarMenu
    },
    setup () {
        

        return {}
    },
    methods: {
        copyToClip(s) {
            navigator.clipboard.writeText(s)
        },
    }
}
</script>

<style scoped>
    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: auto;
    }

    #nav {
        display: flex;
        gap: 25px;
        justify-self: end;
        padding: 0;
        margin: 40px;  
    }

    div a {
        color: var(--default-link-color);
        font-size: 27px;
        font-weight: 600;
    }

    div a:hover:active {
        color: var(--default-link-hover-color);
    }

    #name {
        display: flex;
        margin: 40px;
    }

    .routerLink {
        text-decoration: none;
    }

    #name a {
        display: flex;
        flex-direction: row;
        gap: 5px;
        text-decoration: none;
    }

    #mobileName {
        display: flex;
        margin: 20px;
    }

    #mobileName a {
        display: flex;
        flex-direction: row;
        gap: 5px;
        text-decoration: none;
        font-size: 1.5em
    }

    #flexCol {
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: left;
        padding-left: 20px;
    }

</style>
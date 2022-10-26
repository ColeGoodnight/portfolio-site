<template>
    <div id="header">
        <div v-if="$isMobile()" id="mobileName">
            <router-link to='/'>
                Cole Goodnight
            </router-link>
        </div>
        <div v-else id="name">
            <router-link @click='none' to='/'>
                Cole Goodnight
            </router-link>
        </div>

        
        <div v-if="$isMobile()" id="slide">
            <SidebarMenu v-slot="scope">
                    <div id="flexCol">
                        <router-link to='/' @click="scope.toggle">Home</router-link>
                        <router-link to='/experience/' @click="scope.toggle">Experience</router-link>
                        <router-link to='/projects/' @click="scope.toggle">Projects</router-link>
                        <router-link to='/about' @click="scope.toggle">About</router-link>
                    </div>
            </SidebarMenu>
        </div> 
        <div v-else id="nav">
            <router-link to='/'>Home</router-link>
            <router-link to='/experience/'>Experience</router-link>
            <router-link to='/projects/'>Projects</router-link>
            <router-link to='/about'>About</router-link>
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
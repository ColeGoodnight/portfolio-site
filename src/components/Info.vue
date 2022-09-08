<template>
    <div id="header">
        <div id="name">
            <router-link to='/'>
                Cole Goodnight
            </router-link>
        </div>

        

        <div id="nav">
            <router-link to='/'>Home</router-link>
            <router-link to='/experience/'>Experience</router-link>
            <router-link to='/projects/'>Projects</router-link>
            <router-link to='/about'>About</router-link>
        </div>
    </div>

</template>

<script>
export default {
    
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

    div a:hover {
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

</style>
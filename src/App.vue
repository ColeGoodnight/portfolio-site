<template>
  
  <div id="main">
    <info />
    <router-view/>
  </div>
  
</template>

<script>
  import info from '@/components/Info.vue'

 export default {
   components: {
     info
   },
 }
</script>

<style>
#visible {
    visibilty: visible;
}

#invisible {
    visibilty: hidden;
}

:root {
        --default-link-color: hsl(229deg 4% 35%);
        --default-link-hover-color: #5C7196;
    }

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--default-link-color);
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--default-link-color);
}

#nav a:hover {
  font-weight: bold;
  color: var(--default-link-hover-color);
}

#nav a.router-link-exact-active {
  color: var(--default-link-hover-color);
}

#main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 40px;
}

body {
  margin: 0;
  overflow-y: scroll;
}


</style>

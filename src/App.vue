<template>
  <info/>
  <router-view/>
</template>

<script>
  import info from '@/components/Info.vue'

 export default {
   components: {
     info
   },
   methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
   }
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
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--default-link-color);
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
</style>

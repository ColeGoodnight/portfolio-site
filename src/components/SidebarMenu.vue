<template>
    <div>
        <div style="text-align: right">
            <button class="toggle" @click="openDrawer">
                <HamburgerButton />            
            </button>
        </div>
        <div
            class="right-drawer"
            :style="{
            width: drawerVisible ? '75vw' : '0',
            paddingLeft: drawerVisible ? '10px' : '0',
            }"
        >
            <div style="text-align: right; margin: 5px">
                <button class="close" @click="closeDrawer">
                    <HamburgerCloseButton />
                </button>
            </div>
            <slot :toggle="closeDrawer">
            
            </slot>
        </div>
        <!-- We will make the mask fill the screen while the menu is visible. Because its z-index is 1 less than that of the menu, the menu will still be displayed on top of it -->
        <div
            class="drawer-mask"
            :style="{
                width: drawerVisible ? '100vw' : '0',
                opacity: drawerVisible ? '0.6' : '0',
            }"
            @click="closeDrawer"
        >
    
        </div>
    </div>
</template>

  <script>
import HamburgerButton from './HamburgerButton.vue';
import HamburgerCloseButton from './HamburgerCloseButton.vue';
  export default {
    data() {
        return {
            drawerVisible: false,
        };
    },
    methods: {
        closeDrawer() {
            this.drawerVisible = false
        },
        openDrawer() {
            this.drawerVisible = true
        }
    },
    components: { HamburgerButton, HamburgerCloseButton }
};
  </script>
  
  <style scoped>
  #app {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    color: #0ca3a3;
  }
  
  h1 {
    color: teal;
  }
  
  a {
    color: tomato;
  }
  
  .toggle {
    background: white;
    color: tomato;
    border: 0;
    padding: 24px 20px;
    cursor: pointer;
  }
  
  .close {
    background: white;
    border: 0;
    padding: 20px 20px;
    cursor: pointer;
  }
  
  .right-drawer {
    position: absolute;
    top: 0;
    right: 0;
    width: 0; /* initially */
    overflow: hidden;
    height: 100vh;
    padding-left: 0; /* initially */
    border-left: 1px solid whitesmoke;
    background: white;
    z-index: 200;
    transition: all 0.2s;
  }
  
  .drawer-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 0; /* initially */
    height: 100vh;
    background: #000;
    opacity: 0.3;
    z-index: 199;
    transition: opacity 0.2s;
  }

  * >>> #svg8 {
    width: 40px;
    height: 20px;
  }
  </style>
  
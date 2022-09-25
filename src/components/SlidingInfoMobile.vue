<template>
    <div id="info">
        <div id="flex" @mouseenter="toggleFill()" @mouseleave="toggleFill()" @click="toggleContentVis()">
            <slot name="image" id="companyImg"></slot>
            <h1>{{ title }}</h1>
            <dropdown id="dropdown" />
        </div>
        <div id="content">
            <slot name="content">
            
            </slot>
        </div>
    </div>
</template>

<script>
import dropdown from '@/components/DropDownArrow.vue'
export default {
    components: {
        dropdown,
    },
    props: {
        title: String,
    },
    data() {
        return{
            fillToggle: true,
            contentToggle: true
        }
    },
    setup () {

        return {}
    },
    computed: {
        headerFill() {
            if (this.fillToggle) {
                return 'var(--default-link-color)'
            } else {
                return 'var(--default-link-hover-color)'
            }
        },
        contentVis() {
            if (this.contentToggle) {
                return 'none'
            } else {
                return 'flex'
            }
        }
    },
    methods: {
        toggleFill() {
            this.fillToggle = !this.fillToggle
        },
        toggleContentVis() {
            this.contentToggle = !this.contentToggle
        }
    },
}
</script>

<style scoped>
    /*#main {
        margin-top: -10%;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }*/

    #flex >>> #svg38 {
        display: inline-block;
        height: 60px;
        width: 86px;

    }

    .hidden {
        display: none;
    }

    #flex {
        display: flex;
        gap: 40px;
        align-items: center;
        cursor: pointer;
    }

    #info {
        width: 120ch;
        margin: 0px auto;
        padding: 0 10px;
    }

    img {
        height: 60px;
    }

    #dropdown {
        height: 30px;
        width: auto;
        margin-left: auto;
    }

    #flex >>> #svg38 path, #flex >>> svg g path {
        fill: v-bind(headerFill);
    }

    h1 {
        color: v-bind(headerFill);
    }

    #content {
        display: v-bind(contentVis);
        flex-direction: column;
        gap: 20px;
    }
</style>
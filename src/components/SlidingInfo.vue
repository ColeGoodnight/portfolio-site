<template>
    <div :class="$isMobile() ? 'mobileInfo' : 'info'">
        <div id="flex" @mouseenter="!$isMobile() ? toggleFill() : null" @mouseleave="toggleFill()" @click="toggleContentVis()">
            <div :class="$isMobile() ? 'hidden' : ''">
                <slot name="image" id="companyImg"></slot>
            </div>
            
            <div :class="$isMobile() ? '' : 'hidden'">
                <h1 :class="'mobileh1'">{{ employer }}</h1>
                <h1 :class="'mobileh1'">{{ title }}</h1>
            </div>
            
            <h1 :class="$isMobile() ? 'hidden' : ''">{{ headerContent }}</h1>
            <dropdown :class="$isMobile() ? 'dropdownMobile' : 'dropdown'" />
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
        employer: String
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
        },
        headerContent() {
            if (this.employer != null) {
                return this.employer + ' - ' + this.title
            } else {
                return this.title
            }
        }
    },
    methods: {
        toggleFill() {
            this.fillToggle = !this.fillToggle
        },
        toggleContentVis() {
            this.toggleFill()
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
        margin: 0 20px;
    }

    .info {
        margin: 0px auto;
        padding: 0 10px;
        width: 120ch;
    }

    @media (max-width: 1088px) {
        .info {
            margin: 0px auto;
            padding: 0 10px;
            width: 100%
        }
    }


    .mobileInfo {
        width: 100%;
        /*height: 100px;*/
    }

    img {
        height: 60px;
    }

    .dropdown {
        height: 30px;
        width: 40px;
        margin-left: auto;
    }

    .dropdownMobile {
        width: 30px;
        height: 30px;
        margin-left: auto;
        flex-shrink: 0;
        flex-basis: 30px;
    }

    #flex >>> #svg38 path, #flex >>> svg g path {
        fill: v-bind(headerFill);
    }

    h1 {
        color: v-bind(headerFill);
        text-align: left;
    }

    .mobileh1 {
        font-size: 20px;
        text-align: left;
    }

    #content {
        display: v-bind(contentVis);
        flex-direction: column;
        gap: 20px;
    }
</style>
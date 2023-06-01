<template>
    <div
        class="flex  fixed justify-center items-center gap-3 top-0 z-50 w-full h-[100px] bg-[#fce5c5]   drop-shadow-md  text-[25px]">
        <img src="@/assets/lggg.png" class=" h-[80px]"/>
    </div>
</template>


<script >

import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
import VueCookies from 'vue-cookies'


export default {

    setup() {
        const counter = useCounterStore();
        return { counter }
    },
    mounted: function () {
    },
    methods:{
      Search_All(){
        if (this.counter.Style_Book=='Book name'){
            this.counter.F_titile_books();
        };
        if (this.counter.Style_Book=='Description'){
            this.counter.F_description_books();
        };
      },
      scrollBehavior(){window.scrollTo(0,0);},
    },
}
</script>



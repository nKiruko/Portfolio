<script lang="ts">
   import Typewriter from 'svelte-typewriter'
   import { fly, draw, scale, fade } from 'svelte/transition';
	import { quadIn, quintOut } from 'svelte/easing';
   import { onMount } from 'svelte';

   let ready = false;
   onMount(() => ready = true);


</script>

<section class="pt-64 pl-52">
      <div class="w-[40%]" >
         {#if ready}
            <div class="ml-80">
               <svg width="391" height="391" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-[27.5%] -top-40 -rotate-12">
                  <circle cx="195.5" cy="195.5" r="194.5" stroke="#AFE0FF" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
                  <circle cx="195.5" cy="195.5" r="183" stroke="#252F36" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-[31%] -top-24 -rotate-45" >
                  <circle cx="132.5" cy="132.5" r="131.5" stroke="#252F36" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
                  </svg>
               <svg width="200" height="500" viewBox="0 0 100 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 left-[33%]">
                  <line x1="0" y1="0" x2="0" y2="400" stroke="#AFE0FF" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <img src="/CircleBlueRectangle.svg" class="absolute left-[31%] -top-24 " alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
            </div>
            <div class="opacity-60">
               <svg width="469.2" height="469.2" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -left-28 top-[25%] rotate-180">
                  <circle cx="195.5" cy="195.5" r="194.5" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
                  <circle cx="195.5" cy="195.5" r="183" stroke="#7432fa" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <svg width="318" height="318" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -left-9 top-[33%] rotate-180" >
                  <circle cx="132.5" cy="132.5" r="131.5" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
                  </svg>
               <svg width="700" height="200" viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-[33%]">
                  <line x1="0" y1="0" x2="700" y2="0" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <img src="/CirclePurpleRectangle.svg" class="absolute -left-9 top-[33%] " alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
            </div>
               <Typewriter delay={2000} mode=loop interval={100} cursor={false}>
                     <h1 class="font-heading font-bold text-6xl">Hi! I'm Nick 
                     <span>Full Stack Developer</span>
                     <span>Front-end Developer</span>
                     <span>Back-end Developer</span>
                  </h1>
               </Typewriter>
         {/if}
      </div>
      <div class="">
         {#if ready}
            <img class="absolute right-[10%] top-[30%] z-30 h-[30%]" in:fly="{{ x: 200, y:-100, duration: 1000, delay: 1000}}" src="/TopCard.png" alt="">
            <img class="absolute right-[10%] top-[39%] z-20 h-[30%]" in:fly="{{ x: 200, y:-100, duration: 1000, delay: 1500}}" src="/MiddleCard.png" alt="">
            <img class="absolute right-[10%] top-[48%] z-10 h-[30%]" in:fly="{{ x: 200, y:-100, duration: 1000, delay: 2000}}" src="/LowerCard.png" alt="">
         
         <div class="absolute right-[30%] top-[45%] z-1 gradient-purple-middle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
         <div class="absolute right-[20%] top-[40%] z-2 gradient-white-middle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
         <div class="absolute right-[5%] top-[30%] z-1 gradient-orange-middle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
         {/if}
      </div>
</section>


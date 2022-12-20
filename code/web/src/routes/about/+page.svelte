<script lang="ts">
   import { fly, draw, scale, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
   import { onMount } from 'svelte';
   let ready = false;
   onMount(() => ready = true);

   let innerWidth = 0
   let innerHeight = 0

   
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<div>
   {#if ready}
   <section class="z-10 mx-[12.3%]">
      <svg width="{innerWidth}" height="585" viewBox="0 0 {innerWidth} 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
         <path d="M442.757 129.382C293.085 134.171 80.3398 234.473 0 287.684V585H2560V207.868C2484.76 187.914 2305.44 134.481 2197.8 103.442C2142.54 85.2613 2022.83 42.9144 1940.81 18.9695C1858.78 -4.97541 1753.72 -7.63595 1682.48 18.9695C1594.59 41.5841 1469.42 130.047 1344.92 196.561C1198.44 274.812 1027.11 249.772 943.438 229.818C829.586 196.561 592.429 124.593 442.757 129.382Z" fill="#f3f0fa"/>
         </svg>
      <div class="bg-neutral text-base-100 py-10">
         <div class="mx-64">
            <h1 class="font-heading font-bold text-5xl py-5">About</h1>
            <p class="font-sans">Hey!
               My name is Nick Bulen and I am a full stack developer. At the moment I am 20 years old.</p>
               <h1 class="font-heading font-bold text-2xl py-5">Studies</h1>
               <p>
                  At the moment I'm studying <span class="font-bold">Applied Computer Science</span> at the <span class="font-bold">Thomas More University of Applied Sciences</span> in Geel, Belgium. This is a bachelors degree which I have started in 2021.
               </p>
         </div>
      </div>
      <div class="">
         <svg width="1918" height="585" viewBox="0 0 1920 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="-scale-x-[-1] rotate-180">
            <path d="M442.757 129.382C293.085 134.171 80.3398 234.473 0 287.684V585H2560V207.868C2484.76 187.914 2305.44 134.481 2197.8 103.442C2142.54 85.2613 2022.83 42.9144 1940.81 18.9695C1858.78 -4.97541 1753.72 -7.63595 1682.48 18.9695C1594.59 41.5841 1469.42 130.047 1344.92 196.561C1198.44 274.812 1027.11 249.772 943.438 229.818C829.586 196.561 592.429 124.593 442.757 129.382Z" fill="#f3f0fa"/>
            </svg>
      </div>
      <h1 class="font-sans text-3xl absolute top-[85%] left-[14%]"><span class="mr-5 text-secondary align-top">03</span><span class="text-5xl font-medium underline underline-offset-8 decoration-2 align-bottom text-base-100">02</span><span class="ml-5 text-secondary align-top">01</span></h1>
</section>
   <div class="-z-20 opacity-60">
      <svg width="469.2" height="469.2" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -left-28 2xl:top-[20%] xl:top-[23%] lg:top-[25%] rotate-180">
         <circle cx="195.5" cy="195.5" r="194.5" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
         <circle cx="195.5" cy="195.5" r="183" stroke="#7432fa" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
      </svg>
      <svg width="318" height="318" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -left-9 2xl:top-[26%] xl:top-[33%] lg:top-[33%] rotate-180" >
         <circle cx="132.5" cy="132.5" r="131.5" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
         </svg>
      <img src="/CirclePurpleRectangle.svg" class="absolute -left-9 2xl:top-[26%] xl:top-[33%] lg:top-[33%] " alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
   </div>
   <svg width="{innerWidth/1.8}" height="200" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 2xl:top-[33%] xl:top-[40%] opacity-100">
      <line x1="0" y1="0" x2="{innerWidth/1.8}" y2="0" stroke="#7432fa"  transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
   </svg>
   <div class="-z-20">
      <svg width="391" height="391" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute 2xl:left-[83%] xl:left-[71%] 2xl:top-[60%] xl:top-[85%] lg:top-[25%] rotate-90">
         <circle cx="195.5" cy="195.5" r="194.5" stroke="#fab632" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
         <circle cx="195.5" cy="195.5" r="183" stroke="#fab632" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
      </svg>
      <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute 2xl:left-[85.5%] 2xl:top-[65%] xl:top-[95%] xl:left-[75%] lg:top-[33%] rotate-90" >
         <circle cx="132.5" cy="132.5" r="131.5" stroke="#fab632" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
         </svg>
      <svg width="{innerWidth*0.5}" height="200" viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-[50%]">
         <line x1="{innerWidth*0.5}" y1="0" x2="0" y2="0" stroke="#fab632" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
      </svg>
      <img src="/CircleOrangeRectangle.svg" class="absolute 2xl:left-[85.5%] 2xl:top-[65%] xl:top-[95%] xl:left-[75%] lg:top-[33%]" alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
   </div>


{/if}
</div>
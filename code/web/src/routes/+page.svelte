<script lang="ts">
   import Typewriter from 'svelte-typewriter'
   import { fly, draw, scale, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
   import { onMount } from 'svelte';

   let ready = false;
   onMount(() => ready = true);

   let innerWidth = 0
   let innerHeight = 0

</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<section>
      <div class="w-[40%] pt-64 pl-52">
         {#if ready}
            <div>
               <svg width="391" height="391" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-[27.5%] -top-40 -rotate-12">
                  <circle cx="195.5" cy="195.5" r="194.5" stroke="#AFE0FF" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
                  <circle cx="195.5" cy="195.5" r="183" stroke="#252F36" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute xl:left-[30%] lg:left-[31%] -top-24 -rotate-45" >
                  <circle cx="132.5" cy="132.5" r="131.5" stroke="#252F36" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
                  </svg>
               <svg width="200" height="500" viewBox="0 0 100 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 xl:left-[31%] lg:left-[33%]">
                  <line x1="0" y1="0" x2="0" y2="350" stroke="#AFE0FF" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <img src="/CircleBlueRectangle.svg" class="absolute xl:left-[30%] lg:left-[31%] -top-24 " alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
            </div>

            <div class="-z-20 opacity-60">
               <svg width="469.2" height="469.2" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -left-28 xl:top-[20%] lg:top-[25%] rotate-180">
                  <circle cx="195.5" cy="195.5" r="194.5" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
                  <circle cx="195.5" cy="195.5" r="183" stroke="#7432fa" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <svg width="318" height="318" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -left-9 xl:top-[26%] lg:top-[33%] rotate-180" >
                  <circle cx="132.5" cy="132.5" r="131.5" stroke="#7432fa" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
                  </svg>
               <img src="/CirclePurpleRectangle.svg" class="absolute -left-9 xl:top-[26%] lg:top-[33%] " alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
            </div>
            <svg width="{innerWidth/1.8}" height="200" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-[33%] opacity-100">
               <line x1="0" y1="0" x2="{innerWidth/1.8}" y2="0" stroke="#fab632"  transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
            </svg>
            <div class="-z-20">
               <svg width="391" height="391" viewBox="0 0 391 391" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-[40%] xl:top-[60%] lg:top-[25%] rotate-90">
                  <circle cx="195.5" cy="195.5" r="194.5" stroke="#fab632" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:500}}"/>
                  <circle cx="195.5" cy="195.5" r="183" stroke="#fab632" stroke-opacity="0.3" stroke-width="25" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-[42.5%] xl:top-[65%] lg:top-[33%] rotate-90" >
                  <circle cx="132.5" cy="132.5" r="131.5" stroke="#fab632" stroke-width="2" transition:draw="{{duration: 1500, easing: quintOut, delay:1500}}"/>
                  </svg>
               <svg width="{innerWidth*0.5}" height="200" viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-[20%]">
                  <line x1="{innerWidth*0.5}" y1="0" x2="0" y2="0" stroke="#7432fa" transition:draw="{{duration: 1500, easing: quintOut, delay:1000}}"/>
               </svg>
               <img src="/CircleOrangeRectangle.svg" class="absolute left-[42.5%] xl:top-[65%] lg:top-[33%] " alt="" transition:scale="{{duration: 1500, easing: quintOut, delay:1500}}"/>
            </div>
            <div class="absolute" transition:scale="{{duration:1000, easing: quintOut, delay:2000}}">
               <Typewriter delay={2000} mode=loop interval={100} cursor={true}>
                     <h1 class="font-heading font-bold text-6xl">Hi! I'm Nick 
                     <span>Full Stack Developer</span>
                     <span>Frontend Developer</span>
                     <span>Backend Developer</span>
                  </h1>
               </Typewriter>
            </div>
            
            <div class="mt-28" transition:scale="{{duration:1000, easing: quintOut, delay:2000}}">
               <!-- <button class="absolute border-2 border-primary py-2 pl-10 rounded-lg" >Learn More <span class="bg-primary py-3 px-6 ml-5 bg-opacity-20">></span></button> -->

               <a href="./about"  class="btn2 absolute border-2 border-primary py-2 pl-10 rounded-lg overflow-hidden">
                  <span class="absolute inset-0 bg-primary bg-opacity-20"></span>
                  <span class="absolute inset-0 flex justify-center items-center pr-9">Learn More</span>
                  Learn More<span class="bg-primary py-3 px-6 ml-5 bg-opacity-20">></span>
                </a>

               <h1 class="font-sans text-3xl absolute mt-40"><span class="mr-5 text-secondary align-top">03</span><span class="mr-5 text-secondary align-top">02</span><span class="text-5xl font-medium underline underline-offset-8 decoration-2 align-bottom">01</span></h1>
            </div>
         {/if}
      </div>
      <div>
         {#if ready}
            <img class="absolute right-[10%] top-[25%] z-30 h-[25%]" transition:fly="{{ x: 200, y:-100, duration: 1000, delay: 1000}}" src="/TopCard.png" alt="topcard">
            <img class="absolute right-[10%] top-[33%] z-20 h-[25%]" transition:fly="{{ x: 200, y:-100, duration: 1000, delay: 1500}}" src="/MiddleCard.png" alt="midcard">
            <img class="absolute right-[10%] top-[42%] z-10 h-[25%]" transition:fly="{{ x: 200, y:-100, duration: 1000, delay: 2000}}" src="/LowerCard.png" alt="lowcard">
         {/if}
      </div>
</section>

<section class="z-10">
      <svg width="{innerWidth-17}" height="585" viewBox="0 0 {innerWidth} 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[10%] scale-x-[1]">
         <path d="M442.757 129.382C293.085 134.171 80.3398 234.473 0 287.684V585H2560V207.868C2484.76 187.914 2305.44 134.481 2197.8 103.442C2142.54 85.2613 2022.83 42.9144 1940.81 18.9695C1858.78 -4.97541 1753.72 -7.63595 1682.48 18.9695C1594.59 41.5841 1469.42 130.047 1344.92 196.561C1198.44 274.812 1027.11 249.772 943.438 229.818C829.586 196.561 592.429 124.593 442.757 129.382Z" fill="#f3f0fa"/>
         </svg>
      <div class="bg-neutral text-base-100 ">
         <h1 class="font-heading font-bold text-5xl pl-52">Projects</h1>
         <div class="mx-52">
            <div class="mt-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-16 gap-10">
               <div class="my-5 max-w-[500px]">
                  <img src="/Placeholder.png" alt="placeholder">
                  <h1 class="font-medium text-4xl mt-3">Placeholder Title</h1>
                  <p class="text-lg my-3">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                  <p class="text-xs">November 21, 2022</p>
               </div>
               <div class="my-5 max-w-[500px]">
                  <img src="/Placeholder.png" alt="placeholder">
                  <h1 class="font-medium text-4xl mt-3">Placeholder Title</h1>
                  <p class="text-lg my-3">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                  <p class="text-xs">November 21, 2022</p>
               </div>
               <div class="my-5 max-w-[500px]">
                  <img src="/Placeholder.png" alt="placeholder">
                  <h1 class="font-medium text-4xl mt-3">Placeholder Title</h1>
                  <p class="text-lg my-3">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                  <p class="text-xs">November 21, 2022</p>
               </div>
               
            </div>
         </div>
      </div>
      <div class="">
         <svg width="{innerWidth-16.5}" height="585" viewBox="0 0 {innerWidth} 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="cale-x-[-1] rotate-180">
            <path d="M442.757 129.382C293.085 134.171 80.3398 234.473 0 287.684V585H2560V207.868C2484.76 187.914 2305.44 134.481 2197.8 103.442C2142.54 85.2613 2022.83 42.9144 1940.81 18.9695C1858.78 -4.97541 1753.72 -7.63595 1682.48 18.9695C1594.59 41.5841 1469.42 130.047 1344.92 196.561C1198.44 274.812 1027.11 249.772 943.438 229.818C829.586 196.561 592.429 124.593 442.757 129.382Z" fill="#f3f0fa"/>
            </svg>
      </div>
</section>

<section>
   {#if ready}
      <div class="absolute right-[30%] top-[45%] z-1 gradient-purple-middle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute right-[20%] top-[40%] z-2 gradient-white-middle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute right-[5%] top-[30%] z-1 gradient-orange-middle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute right-0 top-[65%] -z-10 gradient-orange-middleRight" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute right-0 top-[70%] -z-10 gradient-purple-middleRight" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute -left-40 top-[70%] -z-10 gradient-purple-middleLeft" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute -left-64 top-[70%] -z-10 gradient-blue-middleLeft" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>


      <div class="absolute -left-16 top-[155%] -z-10 gradient-orange-middleRight" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute -left-16 top-[150%] -z-10 gradient-purple-middleRight" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>



      <div class="absolute left-[20%]  -z-10 gradient-purple-bottomLeft " transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute left-[50%] -bottom-[55%] -z-10 gradient-purple-bottomMiddle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute left-[40%] -bottom-[65%] -z-10 gradient-white-bottomMiddle" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>

      <div class="absolute right-0 -bottom-[65%] -z-10 gradient-purple-bottomRight" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
      <div class="absolute right-0 -bottom-[70%] -z-10 gradient-blue-bottomRight" transition:fade="{{duration:1000, easing: quintOut, delay:2000}}"/>
   {/if}
</section>


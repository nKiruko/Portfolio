<script lang="ts">

   import Motion from 'svelte-motion/src/motion/MotionSSR.svelte'

   const variants = {
      visible: { 
         opacity: 1, 
         y: 0,
         transition:{ 
            type: 'spring', 
            stiffness: 80, 
            delay: 1  
         },
      },
      hidden: { 
         opacity: 0, 
         y: -50,
         transition:{
            type: 'spring',
            stiffness: 300,
            damping: 140,
         },
      },
   };
   let current = 'Home';
</script>

<Motion
   {variants}
   initial="hidden"
   animate="visible"
   let:motion
   >
   <div class="navbar bg-base-100 mt-5" use:motion>
      <div class="absolute w-[50%] h-28 -top-72 -left-96 inset-0 gradient-blue-top"/>
      <div class="absolute w-[40%] h-28 -top-96 -left-96 inset-0 gradient-purple-top"/>
      <div class="flex-1 lg:ml-48 md:ml-24">
         <a href="/"><img class="h-16" src="/logo.png" alt="Logo"></a>
      </div>
      <div class="flex-none lg:mr-72 md:mr-36">
      <div class="tabs font-bold">
         <a class="{current === 'Home' ? 'tab tab-lg tab-active tab-bordered mx-5 px-2' : 'tab tab-lg tab-bordered mx-5 px-2'}"  on:click="{() => current = 'Home'}" href="/">Home</a>
         <a class="{current === 'About' ? 'tab tab-lg tab-active tab-bordered mx-5 px-2 ' : 'tab tab-lg tab-bordered mx-5 px-2'}"  on:click="{() => current = 'About'}" href="./about">About</a>
         <a class="{current === 'Contact' ? 'tab tab-lg tab-active tab-bordered mx-5 px-2 ' : 'tab tab-lg tab-bordered mx-5 px-2'}" on:click="{() => current = 'Contact'}" href="./contact">Contact</a>
         <a class="tab tab-lg btn rounded-xl py-0 text-base-100 font-bold" href="/">Subscribe</a>
      </div>

      </div>
   </div>
</Motion>
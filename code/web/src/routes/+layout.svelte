<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import  Navbar  from '../components/Navbar.svelte';
  import  Footer  from '../components/Footer.svelte';


</script>
{#if !$page.error}
  <Navbar />
{/if}


<main class="font-sans">
  <slot />
</main>


{#if !$page.error}
  <Footer />
{/if}

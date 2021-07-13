<script>
  import { page } from '@inertiajs/inertia-svelte'

$: console.log("$page in layout", $page)
</script>
  
<h1 class="bg-green-300">Layout thingy</h1>
 
<slot />
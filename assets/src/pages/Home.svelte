<script context="module">
  import Layout from './Layout.svelte'
  export const layout = Layout
</script>

<script lang="ts">
  import {page} from "@inertiajs/inertia-svelte"
  export let msg: string
  let count = 0

  $: console.log("$page in component", $page)
</script>

<h1 class="bg-blue-500">From phoenix controller: {msg}</h1>
<div class="p-4 bg-blue-100" on:click={() => count++}>count: {count}</div>
<h3 class="testing text-black">
  test changing css in style tag
</h3>

<style>
  .testing {
    @apply bg-blue-200;
  }
  h1 {
    @apply text-white;
  }
</style>

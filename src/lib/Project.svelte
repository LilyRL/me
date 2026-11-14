<script>
  import bg from "#lib/assets/bg6.png";

  const { flip } = $props();
</script>

<div class="flex">
  {#if flip}
    <div class="flex-1"></div>
  {/if}

  <div
    style="--bg: url({bg})"
    class="main p-5 background-repeat background-size-[200px] text-white w-fit max-w-[1100px]"
  >
    <div class="md:flex">
      <slot name="image"></slot>

      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</div>

<style>
  div.main {
    background-image: linear-gradient(#0005, #0005), var(--bg);
    font-family: "Times New Roman", serif;
  }
</style>

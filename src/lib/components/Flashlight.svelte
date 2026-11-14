<script lang="ts">
  import flash from "#lib/assets/flash.png";

  const size = 300;

  let flashlight: HTMLImageElement;
  let darkness: HTMLDivElement;

  function followCursor(event: PointerEvent) {
    const { clientX, clientY } = event;

    flashlight.style.left = `${clientX - size / 2}px`;
    flashlight.style.top = `${clientY - size / 2}px`;

    darkness.style.left = `${clientX}px`;
    darkness.style.top = `${clientY}px`;
  }
</script>

<svelte:window onpointermove={followCursor} />

<div class="flashlight" style="--flash-size: {size}px">
  <img
    class="flash"
    bind:this={flashlight}
    src={flash}
    alt=""
    aria-hidden="true"
  />
  <div class="darkness" bind:this={darkness} aria-hidden="true"></div>
</div>

<style>
  .flashlight {
    position: fixed;
    inset: 0;
    pointer-events: none;
  }

  .flash,
  .darkness {
    position: fixed;
    left: 50%;
    top: 50%;
  }

  .flash {
    width: var(--flash-size);
    z-index: 10000;
  }

  .darkness {
    --size: max(300vw, 300vh);

    width: var(--size);
    aspect-ratio: 1 / 1;
    transform: translate(-50%, -50%);
    background-image: radial-gradient(transparent, black 10%);
    z-index: 9999;
  }
</style>

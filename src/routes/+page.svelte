<script lang="ts">
  import { sectionBackgrounds } from "../lib/backgrounds";
  import ContactSection from "#lib/components/ContactSection.svelte";
  import Disclaimer from "#lib/components/Disclaimer.svelte";
  import Fallers from "#lib/components/Fallers.svelte";
  import FireBanner from "#lib/components/FireBanner.svelte";
  import Flies from "#lib/components/Flies.svelte";
  import GameEngineProject from "#lib/components/GameEngineProject.svelte";
  import HappinessDivider from "#lib/components/HappinessDivider.svelte";
  import Hero from "#lib/components/Hero.svelte";
  import ImageFormatProject from "#lib/components/ImageFormatProject.svelte";
  import Mascots from "#lib/components/Mascots.svelte";
  import Flashlight from "#lib/components/Flashlight.svelte";

  import welcome from "#lib/assets/welcome.gif";
  import arrows from "#lib/assets/arrows.gif";
  import painting from "#lib/assets/painting.png";
  import CCompilerProject from "#lib/components/CCompilerProject.svelte";

  const pageBackground = sectionBackgrounds.page;

  let lightsOff = $state(false);

  function toggleLights() {
    lightsOff = !lightsOff;
  }
</script>

<svelte:head>
  <meta
    name="description"
    content="My PHP (personal homepage) (just using slang)"
  />
</svelte:head>

<div class="page" style="--page-bg: url({pageBackground})">
  <img class="w-full" src={welcome} alt="Welcome" />


  <div class="center-container">
    <div class="panels">
    <button class="px-3 py-1 bg-white w-fit" onclick={toggleLights}>
        Turn off the lights
    </button>

      <Hero />

      <CCompilerProject />
      <GameEngineProject />
    </div>
  </div>

  <Disclaimer>Those are my best projects, but I do have more...</Disclaimer>

  <div class="center-container">
    <ImageFormatProject />
  </div>

  <Disclaimer>
    For more, check <a href="https://github.com/LilyRL">my github</a>
  </Disclaimer>

  <div class="center-container">
    <img class="w-full py-5" src={arrows} alt="Divider" />

    <ContactSection />
  </div>

  <HappinessDivider />

  <Mascots />

  <a
    class="painting"
    href="https://store.steampowered.com/app/1388770/Cruelty_Squad/"
  >
    <img src={painting} alt="Two people staring into eachothers eyes." />
  </a>

  <div class="spacer"></div>

  <FireBanner />
  <Flies />
  <Fallers />

  {#if lightsOff}
    <Flashlight />
  {/if}
</div>

<style>
  .page {
    min-height: 100vh;
    background-image: var(--page-bg);
    background-repeat: repeat;
    background-size: 200px;
  }

  .center-container {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
  }

  .panels {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .spacer {
    height: var(--fire-height);
  }

  .painting {
    display: block;
    width: fit-content;
  }
</style>

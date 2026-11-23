<script lang="ts">
  import { sectionBackgrounds } from "../backgrounds";
  import Panel from "./Panel.svelte";

  import mePrettyMuch from "../assets/me_pretty_much.webp";
  import coolText from "../assets/cool_text.gif";
  import badass from "../assets/badass.gif";
  import deathGrips from "../assets/dg.jpg";
  import pikmin from "../assets/pikmin.gif";
  import tetris from "../assets/tetris.gif";
  import gay from "../assets/yeah_okay_you_got_me_im_gay_in_real_life.gif";
</script>

<Panel bg={sectionBackgrounds.hero}>
  {#snippet image()}
    <img src={mePrettyMuch} alt="Person using computer" />
  {/snippet}

  <img src={coolText} alt="Lily RL" />

  <p>Thanks for visiting my awesome website!!!</p>

  <p>
    I'm interested in maths and computer science, specifically compiler/language
    design, functional programming, high performance/system's programming and
    other things, which have nothing to do with computers.
  </p>

  <p>This page shows some of my projects. <a href="/services">Services hosted on this site</a></p>

  <div class="tags">
    <img src={badass} alt="Skeleton smoking a cigarette" />
    <img src={deathGrips} alt="DEATH GRIPS" />
    <img src={pikmin} alt="I love red pikmin" />
    <img src={tetris} alt="I love tetris" />
    <img src={gay} alt="This site is GAY" />
  </div>
</Panel>

<style>
  .tags :global(img) {
    height: 47px;
    width: auto;
    display: inline;
  }
</style>

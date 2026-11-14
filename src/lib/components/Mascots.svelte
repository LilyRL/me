<script lang="ts">
  import { sectionBackgrounds } from "../backgrounds";

  import shark from "../assets/shark.gif";
  import bug from "../assets/bug.gif";
  import green from "../assets/green.png";
  import green2 from "../assets/green2.png";
  import green3 from "../assets/green3.png";
  import green4 from "../assets/green4.png";
  import green5 from "../assets/green5.png";
  import green6 from "../assets/green6.png";
  import pig from "../assets/pig.gif";
  import car from "../assets/car.gif";
  import money from "../assets/money.gif";
  import RandomCow from "./RandomCow.svelte";

  const six = [0, 1, 2, 3, 4, 5];
  const greenSprites = [
    { id: 0, src: green },
    { id: 1, src: green2 },
    { id: 2, src: green3 },
    { id: 3, src: green4 },
    { id: 4, src: green5 },
    { id: 5, src: green6 },
  ];
</script>

<div id="face-container" style="--face-bg: url({sectionBackgrounds.mascots})">
  <p class="white center">Sharks for anya</p>
  <div class="mx-auto row">
    {#each six as id (id)}
      <img src={shark} alt="swimming shark" />
    {/each}
  </div>

  <p class="white center">Bugs for lucas</p>
  <div class="mx-auto row">
    {#each six as id (id)}
      <img src={bug} alt="dancing bug" />
    {/each}
  </div>

  <p class="center">
    <a href="https://quiz.lilyrl.com" class="white">Edward &lt;3</a>
  </p>
  <div class="mx-auto row">
    {#each greenSprites as spriteMeta (spriteMeta.id)}
      <img src={spriteMeta.src} alt="green square with the word brat" />
    {/each}
  </div>

  <p class="white center">Riley</p>
  <div class="mx-auto row">
    <img src={pig} alt="surfing pig" />
    <img src={car} alt="car" />
    <img src={money} alt="money" />
  </div>

  <p class="white center">Adam</p>
  <div class="max-w-300 mx-auto px-5">
    {#each { length: 205 } as _}
      <RandomCow />
    {/each}
  </div>
</div>

<style>
  #face-container {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      var(--face-bg);
    background-repeat: repeat;
    background-size: 200px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: fit-content;
    max-width: 100%;
  }

  p {
    margin: 1em 0;
  }

  .white {
    color: white;
    font-size: 1.5em;
  }

  .center {
    text-align: center;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
</style>

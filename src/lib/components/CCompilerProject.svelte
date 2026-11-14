<script>
  import { sectionBackgrounds } from "#lib/backgrounds.ts";
  import Panel from "./Panel.svelte";

  import cCompiler from "#lib/assets/c_compiler.gif";
  import snail from "#lib/assets/computer 206.gif";
</script>

<Panel bg={sectionBackgrounds.cCompiler} right>
  {#snippet image()}
    <img src={snail} alt="Worm like alien coming out of a computer" />
  {/snippet}

  <img src={cCompiler} alt="C Compiler" />

  <p>My current project is a C compiler in Zig.</p>

  <p>
    I am following along with
    <a href="https://norasandler.com/book/">Writing a C Compiler</a>
    by Nora Sandler, but adding more onto it that isn't in the book, for example
    a preprocessor.
  </p>

  <p>
    I don't have much to show off yet, but I think this will be my magnum opus.
  </p>

  <p>
    Link:
    <a href="https://git.lilyrl.com/~lily/cc2">
      https://git.lilyrl.com/~lily/cc2
    </a>
  </p>
</Panel>

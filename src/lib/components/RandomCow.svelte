<script type="text/javascript">
  import a from "#lib/assets/cow0.gif";
  import b from "#lib/assets/cow1.gif";
  import c from "#lib/assets/cow2.gif";
  import d from "#lib/assets/cow3.gif";
  import e from "#lib/assets/cow4.gif";
  import f from "#lib/assets/cow5.gif";
  import g from "#lib/assets/cow6.gif";
  import h from "#lib/assets/cow7.gif";
  import i from "#lib/assets/cow8.gif";
  import j from "#lib/assets/cow9.gif";
  import k from "#lib/assets/cow10.gif";
  import l from "#lib/assets/cow11.gif";
  import m from "#lib/assets/cow12.gif";
  import n from "#lib/assets/cow13.gif";
  import o from "#lib/assets/cow14.gif";
  import p from "#lib/assets/cow15.gif";

  const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];

  const img_number = Math.floor(Math.random() * 16);
  const img = images[img_number];
</script>

<img class="h-[50px] inline" src={img} alt="Cow" />

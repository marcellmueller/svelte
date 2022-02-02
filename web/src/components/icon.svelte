<script>
  import feather from 'feather-icons';

  export let color, name;
  export let width = '24px';
  export let height = '24px';
  $: icon = feather.icons[name];
  $: iconColor = color || 'black';
</script>

{#if icon}
  <svg
    {...icon.attrs}
    style="width: {width}; height: {height}; color: {iconColor}"
  >
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}

<style>
  svg {
    width: 24px;
    height: 24px;
    overflow: visible;
    transform-origin: 50% 50%;
  }
</style>

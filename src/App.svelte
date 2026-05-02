<script lang="ts">
  import Checkbox from "$lib/components/atoms/Checkbox/Checkbox.svelte";
</script>

<main class="min-h-screen bg-os-bg p-8 font-os text-black">
  <div class="mb-8">
    <h1 class="text-2xl font-bold mb-4">Web OS Components</h1>
  </div>

  <div class="bg-os-window border border-os-border rounded-md p-6 max-w-sm flex flex-col gap-4">
    <h2 class="text-lg font-bold border-b border-os-border pb-2">Checkbox Atom</h2>

    <div class="flex items-center space-x-2">
      <Checkbox id="c1" />
      <label for="c1" class="text-sm cursor-pointer">Unchecked Default</label>
    </div>

    <div class="flex items-center space-x-2">
      <Checkbox id="c2" checked={true} />
      <label for="c2" class="text-sm cursor-pointer">Checked Default</label>
    </div>

    <div class="flex items-center space-x-2">
      <Checkbox id="c3" disabled={true} />
      <label for="c3" class="text-sm cursor-pointer text-gray-500">Disabled Unchecked</label>
    </div>

    <div class="flex items-center space-x-2">
      <Checkbox id="c4" checked={true} disabled={true} />
      <label for="c4" class="text-sm cursor-pointer text-gray-500">Disabled Checked</label>
    </div>
  </div>
</main>

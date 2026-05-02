<script lang="ts">
  import { Input } from '$lib/components/atoms/Input';
</script>

<main class="p-8">
  <h1 class="text-2xl mb-4">Input Verification</h1>
  <div class="space-y-4 max-w-sm">
    <div>
      <label class="block mb-1">Standard Input</label>
      <Input placeholder="Enter text..." />
    </div>
    <div>
      <label class="block mb-1">Error Input</label>
      <Input placeholder="Error state..." error />
    </div>
    <div>
      <label class="block mb-1">Disabled Input</label>
      <Input placeholder="Disabled..." disabled />
    </div>
  </div>
</main>

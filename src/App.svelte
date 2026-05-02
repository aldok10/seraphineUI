<script lang="ts">
  import { Input } from '$lib/components/atoms/Input';
</script>

<main style="padding: 2rem;">
  <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">Input Verification</h1>
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 24rem;">
    <div>
      <label style="display: block; margin-bottom: 0.25rem;">Standard Input</label>
      <Input placeholder="Enter text..." />
    </div>
    <div>
      <label style="display: block; margin-bottom: 0.25rem;">Error Input</label>
      <Input placeholder="Error state..." error />
    </div>
    <div>
      <label style="display: block; margin-bottom: 0.25rem;">Disabled Input</label>
      <Input placeholder="Disabled..." disabled />
    </div>
  </div>
</main>

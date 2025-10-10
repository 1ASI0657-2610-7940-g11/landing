<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <section class="bg-slate-50">
    <div class="section text-center">
      <p class="text-sm uppercase tracking-widest text-slate-500">
        Proveedores y marcas del sector
      </p>

      <div class="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-80">
        <img :src="base + 'logos/primax1.jpg'" class="mx-auto h-8" alt="Primax" loading="lazy" />
        <img :src="base + 'logos/petroperu1.jpg'" class="mx-auto h-8" alt="Petroperú" loading="lazy" />
        <img :src="base + 'logos/repsol1.jpg'" class="mx-auto h-8" alt="Repsol" loading="lazy" />
        <div class="h-8"></div><div class="h-8"></div><div class="h-8"></div>
      </div>
    </div>
  </section>
</template>

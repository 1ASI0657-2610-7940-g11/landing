<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <section class="bg-slate-50">
    <div class="section text-center">
      <p class="text-sm uppercase tracking-widest text-slate-500">
        Proveedores y marcas del sector
      </p>
      <div class="mt-6 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center opacity-90">
        <img :src="base + 'logos/Logo-PRIMAX.png'" alt="Primax" class="h-10 object-contain" loading="lazy" />
        <img :src="base + 'logos/petroperu1.jpg'" alt="Petroperú" class="h-10 object-contain" loading="lazy" />
        <img :src="base + 'logos/Repsol-Logo_.png'" alt="Repsol" class="h-15 object-contain" loading="lazy" />
      </div>
    </div>
  </section>
</template>

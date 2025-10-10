<script setup>
const base = import.meta.env.BASE_URL
</script>
<template>
  <section id="hero" class="pt-24 pb-20 bg-hero relative overflow-hidden">
    <!-- Decorativos suaves -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-100 blur-3xl opacity-70"></div>
      <div class="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-brand-50 blur-3xl opacity-80"></div>
    </div>

    <div class="section relative grid md:grid-cols-2 gap-10 items-center">
      <!-- Columna texto -->
      <div class="text-center md:text-left">
        <span class="badge">Nuevo</span>
        <h1 class="title-xl mt-4 leading-[1.1]">
          Gestión de combustible
          <span class="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            B2B transparente
          </span>
          y trazable
        </h1>

        <p class="mt-5 text-lg muted max-w-xl md:max-w-none md:pr-6">
          Compara el <span class="font-semibold text-slate-800">costo total</span>, programa entregas a obra y
          concilia facturación con <span class="font-semibold text-slate-800">evidencias digitales</span> y trazabilidad por hitos.
        </p>

        <!-- CTA primario/secundario -->
        <div class="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3">
          <a href="#pricing" class="btn btn-primary w-full sm:w-auto">Probar ahora</a>
          <a href="#how" class="btn btn-outline w-full sm:w-auto">Cómo funciona</a>
        </div>

        <!-- Barra de confianza -->
        <div class="mt-8 grid grid-cols-3 gap-3 text-center md:text-left">
          <div class="p-4 rounded-[var(--radius-xl)] bg-white/70 border backdrop-blur">
            <p class="text-2xl font-extrabold text-brand-700">100%</p>
            <p class="text-xs muted mt-1">Trazabilidad</p>
          </div>
          <div class="p-4 rounded-[var(--radius-xl)] bg-white/70 border backdrop-blur">
            <p class="text-2xl font-extrabold text-brand-700">-15%</p>
            <p class="text-xs muted mt-1">Costo operativo*</p>
          </div>
          <div class="p-4 rounded-[var(--radius-xl)] bg-white/70 border backdrop-blur">
            <p class="text-2xl font-extrabold text-brand-700">0</p>
            <p class="text-xs muted mt-1">Llamadas</p>
          </div>
        </div>

        <!-- Logos mini (opcional) -->
        <div class="mt-6 flex items-center gap-4 opacity-70">
          <span class="text-xs uppercase tracking-wider text-slate-500">Ecosistema:</span>
          <img :src="base + 'logos/primax1.jpg'" alt="Primax" class="h-6" loading="lazy" />
          <img :src="base + 'logos/petroperu1.jpg'" alt="Petroperú" class="h-6" loading="lazy" />
          <img :src="base + 'logos/repsol1.jpg'" alt="Repsol" class="h-6" loading="lazy" />
        </div>

        <p class="mt-2 text-[11px] text-slate-500">
          *Métricas ilustrativas del landing.
        </p>
      </div>

      <!-- Columna mock UI -->
      <div class="relative">
        <div
            class="rounded-[1.5rem] overflow-hidden border shadow-[var(--shadow-soft)] bg-white ring-1 ring-white/40"
        >
          <img src="/ui/hero-mock.svg" alt="Vista previa FuelTrack" class="w-full" />
        </div>

        <!-- Tarjetitas flotantes decorativas -->
        <div class="hidden md:block">
          <div
              class="absolute -left-6 -top-6 card px-4 py-3 animate-[float_6s_ease-in-out_infinite]"
              style="animation-delay: .2s"
          >
            <p class="text-xs text-slate-500">ETA estimada</p>
            <p class="font-semibold text-slate-800">08:45</p>
          </div>
          <div
              class="absolute -right-6 bottom-10 card px-4 py-3 animate-[float_7s_ease-in-out_infinite]"
              style="animation-delay: .6s"
          >
            <p class="text-xs text-slate-500">Costo total</p>
            <p class="font-semibold text-brand-700">S/ 17,450</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,100% { transform: translateY(0) }
  50% { transform: translateY(-6px) }
}
</style>

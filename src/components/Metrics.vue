<script setup></script>

<template>
  <section class="section relative">
    <!-- fondo sutil -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-20 left-10 w-72 h-72 rounded-full bg-brand-100 blur-3xl opacity-60"></div>
      <div class="absolute -bottom-24 right-10 w-80 h-80 rounded-full bg-brand-50 blur-3xl opacity-80"></div>
    </div>

    <div class="grid md:grid-cols-4 gap-6 text-center">
      <!-- 1 -->
      <div
          class="card transition-transform hover:-translate-y-0.5"
          aria-label="Reducción de costo operativo (hipótesis)"
      >
        <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700">
          <!-- trending down -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 16l6-6 4 4 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 10v-6h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-brand-700">-15%</p>
        <p class="muted">Costo operativo <span class="text-[11px] align-top">*</span></p>
      </div>

      <!-- 2 -->
      <div class="card transition-transform hover:-translate-y-0.5" aria-label="Cero llamadas por digitalización">
        <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700">
          <!-- phone off -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10 13a13 13 0 0 0 4 4l2-2a1 1 0 0 1 1-.25c1 .33 2.08.51 3.2.51a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1.08 1A19 19 0 0 1 3.24 6.88 1 1 0 0 1 4.2 5.8H7.7a1 1 0 0 1 1 1c0 1.12.18 2.2.51 3.2a1 1 0 0 1-.25 1l-2 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 3l18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-brand-700">0</p>
        <p class="muted">Llamadas (flujo digital)</p>
      </div>

      <!-- 3 -->
      <div class="card transition-transform hover:-translate-y-0.5" aria-label="Trazabilidad total por evidencias">
        <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700">
          <!-- shield/check -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3Z" stroke="currentColor" stroke-width="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-brand-700">100%</p>
        <p class="muted">Trazable por evidencias</p>
      </div>

      <!-- 4 -->
      <div class="card transition-transform hover:-translate-y-0.5" aria-label="ETA visible por hitos">
        <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700">
          <!-- clock -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-brand-700">ETA</p>
        <p class="muted">Visible por hito</p>
      </div>
    </div>

    <p class="mt-6 text-[12px] text-slate-500 text-center">
      *Métricas ilustrativas del landing. “No puedo confirmar” sin pilotos reales.
    </p>
  </section>
</template>

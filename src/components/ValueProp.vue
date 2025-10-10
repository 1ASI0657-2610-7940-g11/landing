<script setup></script>

<template>
  <section id="value" class="section">
    <!-- encabezado -->
    <div class="text-center max-w-2xl mx-auto mb-10">
      <h2 class="title-lg">¿Por qué FuelTrack?</h2>
      <p class="muted mt-3">
        Reduce costos, elimina la fricción operativa y gana visibilidad total de punta a punta.
      </p>
    </div>

    <!-- grid de valor -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- 1 -->
      <article
          class="card group relative overflow-hidden transition-transform hover:-translate-y-0.5"
      >
        <!-- acento -->
        <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"></span>

        <!-- icono -->
        <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
          <!-- calculadora/costo -->
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M7 8h10M8 12h2m4 0h2M8 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <h3 class="font-bold text-lg mt-4">Costo total real</h3>
        <p class="muted mt-2">
          Precio/litro + flete + recargos por ventana — sin sorpresas antes de ordenar.
        </p>

        <div class="mt-4 flex items-center gap-3 text-xs">
          <span class="badge">Transparencia</span>
          <span class="badge">Ahorro</span>
        </div>
      </article>

      <!-- 2 -->
      <article
          class="card group relative overflow-hidden transition-transform hover:-translate-y-0.5"
      >
        <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"></span>

        <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
          <!-- tracking -->
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 21s7-5.333 7-11a7 7 0 1 0-14 0c0 5.667 7 11 7 11Z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>

        <h3 class="font-bold text-lg mt-4">Tracking por hitos</h3>
        <p class="muted mt-2">
          Aceptado → En ruta → En sitio → Entregado, con ETA visible en todo momento.
        </p>

        <div class="mt-4 flex items-center gap-3 text-xs">
          <span class="badge">ETA</span>
          <span class="badge">Visibilidad</span>
        </div>
      </article>

      <!-- 3 -->
      <article
          class="card group relative overflow-hidden transition-transform hover:-translate-y-0.5"
      >
        <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"></span>

        <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
          <!-- documentos -->
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 3h6l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2"/>
            <path d="M13 3v4h4" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12h8M8 16h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <h3 class="font-bold text-lg mt-4">Conciliación simple</h3>
        <p class="muted mt-2">
          Evidencias, guía y factura en un solo flujo con export CSV/Excel para finanzas.
        </p>

        <div class="mt-4 flex items-center gap-3 text-xs">
          <span class="badge">Evidencias</span>
          <span class="badge">Finanzas</span>
        </div>
      </article>
    </div>

    <!-- CTA inferior -->
    <div class="text-center mt-10">
      <a href="#pricing" class="btn btn-primary">Ver planes</a>
    </div>
  </section>
</template>

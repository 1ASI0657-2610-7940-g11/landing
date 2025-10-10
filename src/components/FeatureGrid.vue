<script setup>
const features = [
  { icon: 'cost',    t: 'Comparador por costo total', d: 'Precio/litro, flete y recargos por ventana en un solo monto.' },
  { icon: 'orders',  t: 'Órdenes y programación',     d: 'Crea, reprograma o cancela con políticas claras.' },
  { icon: 'assign',  t: 'Asignación de cisterna',      d: 'Panel del proveedor para asignar unidad y operador.' },
  { icon: 'proof',   t: 'Evidencias de entrega',       d: 'Foto, firma y volumen leído para cierre.' },
  { icon: 'docs',    t: 'Documentos',                  d: 'OC, guía y factura en el expediente de la orden.' },
  { icon: 'reports', t: 'Reportes',                    d: 'Consumo por vehículo/obra y costos por periodo (CSV/Excel).' }
]
</script>

<template>
  <section id="features" class="section relative">
    <!-- fondo sutil -->
    <div class="absolute inset-0 pointer-events-none -z-10">
      <div class="absolute -top-24 right-10 w-72 h-72 rounded-full bg-brand-100 blur-3xl opacity-60"></div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>

    <h2 class="title-lg text-center">Características clave</h2>
    <p class="muted text-center max-w-2xl mx-auto mt-3">
      Todo lo que necesitas para cotizar, ordenar, entregar y conciliar — con transparencia y trazabilidad.
    </p>

    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
          v-for="f in features"
          :key="f.t"
          class="card group relative overflow-hidden transition-all hover:-translate-y-0.5"
      >
        <!-- acento superior -->
        <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"></span>

        <!-- icono -->
        <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
          <!-- cost -->
          <svg v-if="f.icon==='cost'" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M7 8h10M8 12h2m4 0h2M8 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <!-- orders -->
          <svg v-else-if="f.icon==='orders'" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <!-- assign -->
          <svg v-else-if="f.icon==='assign'" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M2 20c0-3 3-5 6-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <rect x="13" y="11" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M15 15h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <!-- proof -->
          <svg v-else-if="f.icon==='proof'" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M7 12l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <!-- docs -->
          <svg v-else-if="f.icon==='docs'" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 3h6l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2"/>
            <path d="M13 3v4h4" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12h8M8 16h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <!-- reports -->
          <svg v-else-if="f.icon==='reports'" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M8 16v-4M12 16v-6M16 16v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- contenido -->
        <h3 class="font-bold text-lg mt-4">{{ f.t }}</h3>
        <p class="muted mt-2">{{ f.d }}</p>

        <!-- efecto hover: brillo diagonal -->
        <span
            class="pointer-events-none absolute -top-16 -right-20 w-40 h-40 rotate-45 bg-brand-100/50 blur-2xl opacity-0
                 transition-opacity duration-300 group-hover:opacity-100"
        ></span>
      </article>
    </div>

    <!-- CTA inferior -->
    <div class="text-center mt-10">
      <a href="#how" class="btn btn-outline">Ver cómo funciona</a>
    </div>
  </section>
</template>

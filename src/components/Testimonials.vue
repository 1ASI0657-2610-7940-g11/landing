<script setup>
const items = [
  {
    q: 'Simplificó la coordinación con proveedores y el cierre contable.',
    a: 'Jefe de Logística (construcción)',
    r: 5,
    initials: 'JL'
  },
  {
    q: 'La trazabilidad por evidencias nos ahorró auditorías internas.',
    a: 'Gerente de Operaciones (transporte)',
    r: 5,
    initials: 'GO'
  },
  // Puedes sumar más:
  {
    q: 'Comparar por costo total nos dio transparencia inmediata.',
    a: 'Finanzas (flota urbana)',
    r: 5,
    initials: 'FI'
  }
]
</script>

<template>
  <section class="bg-slate-50 relative">
    <!-- fondo sutil -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-12 right-10 w-72 h-72 rounded-full bg-brand-100 blur-3xl opacity-60"></div>
      <div class="absolute -bottom-16 left-10 w-80 h-80 rounded-full bg-brand-50 blur-3xl opacity-80"></div>
    </div>

    <div class="section">
      <h2 class="title-lg text-center">Testimonios (pilotos)</h2>
      <p class="muted text-center max-w-2xl mx-auto mt-3">
        Opiniones de usuarios en pilotos y pruebas internas (mock).
      </p>

      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure
            v-for="t in items"
            :key="t.q"
            class="card relative overflow-hidden transition-transform hover:-translate-y-0.5"
        >
          <!-- acento superior -->
          <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"></span>

          <!-- cabecera: avatar + nombre/rol -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-semibold">
              {{ t.initials }}
            </div>
            <figcaption class="text-sm text-slate-600">
              {{ t.a }}
            </figcaption>
          </div>

          <!-- cita -->
          <blockquote class="mt-4 text-slate-800 leading-relaxed relative">
            <!-- comillas decorativas -->
            <svg class="absolute -left-2 -top-2 text-brand-200" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M7 7h4v10H5V9a2 2 0 0 1 2-2Zm10 0h4v10h-6V9a2 2 0 0 1 2-2Z" fill="currentColor" />
            </svg>
            “{{ t.q }}”
          </blockquote>

          <!-- rating -->
          <div class="mt-4 flex items-center gap-1" aria-label="Calificación">
            <svg
                v-for="i in 5"
                :key="i"
                width="18" height="18" viewBox="0 0 24 24"
                :class="i <= t.r ? 'text-brand-600' : 'text-slate-300'"
                fill="currentColor"
            >
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z"/>
            </svg>
          </div>
        </figure>
      </div>

      <p class="mt-6 text-[12px] text-slate-500 text-center">
        Nota: testimonios ficticios a modo de mock. “No puedo confirmar” hasta tener casos reales.
      </p>
    </div>
  </section>
</template>

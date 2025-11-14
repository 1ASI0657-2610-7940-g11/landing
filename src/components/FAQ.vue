<script setup>
const faqs = [
  { q: '¿Tienen backend?', a: 'Este landing es 100% estático. La app operativa seguirá un roadmap por fases.' },
  { q: '¿Cómo calculan el precio total?', a: 'Fórmula propuesta: precio/litro × volumen + flete por zona ± recargo por ventana.' },
  { q: '¿Puedo exportar datos?', a: 'Sí, CSV/Excel está contemplado en el MVP.' },
  // agrega más si quieres…
]
</script>

<template>
  <section id="faq" class="bg-slate-50">
    <div class="section">
      <h2 class="title-lg text-center">Preguntas frecuentes</h2>
      <p class="muted text-center max-w-2xl mx-auto mt-3">
        Respuestas rápidas a dudas comunes. Si necesitas más detalle, contáctanos.
      </p>

      <div class="mt-10 grid md:grid-cols-2 gap-6">
        <details
            v-for="f in faqs"
            :key="f.q"
            class="card relative group transition-all open:bg-brand-50/40"
        >
          <!-- acento superior -->
          <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600"></span>

          <summary
              class="cursor-pointer list-none flex items-center justify-between gap-4"
          >
            <p class="font-semibold text-slate-800">
              {{ f.q }}
            </p>
            <!-- chevron -->
            <svg class="chevron w-5 h-5 text-slate-500 transition-transform" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </summary>

          <div class="mt-3 muted">
            {{ f.a }}
          </div>
        </details>
      </div>

      <div class="text-center mt-10">
        <a href="#contact" class="btn btn-primary">¿Tienes otra pregunta?</a>
        <p class="mt-3 text-[12px] text-slate-500">
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* rota el chevron cuando el <details> está abierto */
details[open] .chevron { transform: rotate(180deg); }
</style>

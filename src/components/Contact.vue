<script setup>
const email = 'U202213278@upc.edu.pe' // cámbialo si deseas

// Asunto + body prellenados para el mailto
const subject = encodeURIComponent('Demo FuelTrack – Solicitud de contacto')
const body = encodeURIComponent(
    `Hola FuelTrack,

Estoy interesado(a) en una demo.
Empresa:
Volumen mensual estimado:
Número de sedes/obras:
Teléfono de contacto:

Gracias.`
)
</script>

<template>
  <section id="contact" class="section">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="title-lg">¿Listo para probar FuelTrack?</h2>
      <p class="muted mt-3">Escríbenos y agenda una demo.</p>
    </div>

    <div class="mt-10 grid md:grid-cols-2 gap-6">
      <!-- Columna: CTA + “form” (UI estática) -->
      <div class="card">
        <!-- Botones -->
        <div class="flex flex-col sm:flex-row gap-3">
          <a
              :href="`mailto:${email}?subject=${subject}&body=${body}`"
              class="btn btn-primary w-full sm:w-auto"
          >
            Contactar por email
          </a>
          <button
              class="btn btn-outline w-full sm:w-auto"
              @click.prevent="navigator.clipboard?.writeText(`${email}`)"
              title="Copiar correo"
          >
            Copiar email
          </button>
        </div>

        <!-- Campos (solo UI) -->
        <form class="mt-6 grid sm:grid-cols-2 gap-4" @submit.prevent>
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium text-slate-700">Empresa</label>
            <input type="text" placeholder="Razón social"
                   class="mt-1 w-full rounded-[var(--radius-xl)] border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700">Nombre</label>
            <input type="text" placeholder="Tu nombre"
                   class="mt-1 w-full rounded-[var(--radius-xl)] border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700">Teléfono</label>
            <input type="tel" placeholder="+51 9xx xxx xxx"
                   class="mt-1 w-full rounded-[var(--radius-xl)] border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium text-slate-700">Mensaje</label>
            <textarea rows="4" placeholder="Cuéntanos tu caso (sedes, volúmenes, horarios, etc.)"
                      class="mt-1 w-full rounded-[var(--radius-xl)] border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"></textarea>
          </div>

          <div class="sm:col-span-2">
            <a
                :href="`mailto:${email}?subject=${subject}&body=${body}`"
                class="btn btn-primary w-full"
            >
              Enviar solicitud de demo
            </a>
            <p class="mt-2 text-xs text-slate-500">
              Este formulario es estático y no envía datos; usa el botón para escribirnos por email.
            </p>
          </div>
        </form>
      </div>

      <!-- Columna: información -->
      <aside class="card">
        <h3 class="font-bold text-lg">Información de contacto</h3>
        <ul class="mt-4 space-y-3 text-slate-700">
          <li class="flex items-start gap-3">
            <!-- mail icon -->
            <svg width="18" height="18" viewBox="0 0 24 24" class="mt-0.5 text-brand-600" fill="none">
              <path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2"/>
              <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>
              <a :href="`mailto:${email}`" class="text-brand-700 hover:underline">{{ email }}</a>
            </span>
          </li>
          <li class="flex items-start gap-3">
            <!-- clock -->
            <svg width="18" height="18" viewBox="0 0 24 24" class="mt-0.5 text-brand-600" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
              <path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>Horario: Lun–Vie 9:00–18:00</span>
          </li>
          <li class="flex items-start gap-3">
            <!-- shield -->
            <svg width="18" height="18" viewBox="0 0 24 24" class="mt-0.5 text-brand-600" fill="none">
              <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Datos protegidos. Respuesta en &lt; 2 días hábiles.</span>
          </li>
        </ul>

        <!-- Mapa/placeholder -->
        <div class="mt-6 rounded-[var(--radius-xl)] overflow-hidden border">
          <div class="aspect-[16/10] bg-slate-100 grid place-items-center text-slate-500 text-sm">
            Ubicación (opcional)
          </div>
        </div>

        <p class="mt-4 text-[12px] text-slate-500">
          *Este sitio es un prototipo estático. “No puedo confirmar” detalles operativos sin entrevistas a proveedores.
        </p>
      </aside>
    </div>
  </section>
</template>

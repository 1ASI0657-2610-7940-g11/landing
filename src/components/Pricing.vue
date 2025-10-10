<script setup>
const plans = [
  {
    name: 'Starter',
    price: 'S/ 399',
    per: '/mes',
    sub: 'Para pilotos y pymes',
    cta: 'Empezar con Starter',
    features: [
      '2 ubicaciones', '30 órdenes/mes', 'Comparador',
      'Tracking por hitos', 'Evidencias y documentos', 'Reportes básicos'
    ]
  },
  {
    name: 'Pro',
    price: 'S/ 1,290',
    per: '/mes',
    sub: 'Para flotas en crecimiento',
    badge: 'Recomendado',
    highlight: true,
    cta: 'Elegir Pro',
    features: [
      'Ubicaciones ilimitadas', 'Órdenes ilimitadas (uso justo)', 'Roles y permisos',
      'Conciliación asistida', 'Panel de proveedor', 'Export avanzado'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Desde S/ 3,900',
    per: '/mes',
    sub: 'Operaciones críticas y compliance',
    cta: 'Hablar con ventas',
    features: [
      'SLA extendido', 'SSO y auditoría avanzada', 'Workflows de aprobación',
      'Data export programado', 'Compliance Vault', 'Integraciones ERP'
    ]
  }
]
</script>

<template>
  <section id="pricing" class="section">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="title-lg">Planes</h2>
      <p class="muted mt-3">Elige el plan que se ajusta a tu operación. Sin lock-in, mes a mes.</p>
    </div>

    <div class="mt-10 grid md:grid-cols-3 gap-6">
      <article
          v-for="p in plans"
          :key="p.name"
          class="relative card transition-all hover:-translate-y-0.5"
          :class="p.highlight ? 'ring-2 ring-brand-300 border-brand-200 bg-brand-50/40' : ''"
          aria-label="Plan de precios"
      >
        <!-- badge recomendado -->
        <div v-if="p.badge"
             class="absolute -top-3 right-6 badge">
          {{ p.badge }}
        </div>

        <!-- encabezado -->
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-bold text-lg">{{ p.name }}</h3>
            <p class="muted text-sm mt-1">{{ p.sub }}</p>
          </div>
          <!-- icono simple por plan -->
          <div class="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
            <svg v-if="p.name==='Starter'" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
              <path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else-if="p.name==='Pro'" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l7 4v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4Z" stroke="currentColor" stroke-width="2"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" stroke-width="2"/>
              <path d="M7 8h10M7 12h10M7 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <!-- precio -->
        <p class="mt-3 text-3xl font-extrabold text-brand-700">
          {{ p.price }}<span class="text-sm text-slate-500">{{ p.per }}</span>
        </p>

        <!-- features -->
        <ul class="mt-4 space-y-2">
          <li v-for="f in p.features" :key="f" class="flex items-start gap-2 text-slate-700">
            <svg width="18" height="18" viewBox="0 0 24 24" class="mt-0.5 text-brand-600" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ f }}</span>
          </li>
        </ul>

        <!-- CTA -->
        <a
            href="#contact"
            class="mt-6 btn w-full"
            :class="p.highlight ? 'btn-primary' : 'btn-outline'"
        >
          {{ p.cta }}
        </a>

        <!-- pie -->
        <p class="mt-3 text-[11px] text-slate-500">
          Cancela cuando quieras. Descuento anual: -15% prepagando 12 meses.
        </p>
      </article>
    </div>

    <!-- comparativa corta -->
    <div class="mt-6 text-center text-sm text-slate-600">
      <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-100 text-brand-700">
        Recomendación: <strong class="ml-1">Pro</strong> para 3–20 sedes y cierre contable ágil
      </span>
    </div>
  </section>
</template>

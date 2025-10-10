<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t bg-white">
    <!-- franja verde muy sutil -->
    <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600" aria-hidden="true"></span>

    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <!-- brand -->
        <a href="#hero" class="flex items-center gap-2 text-slate-800 font-extrabold tracking-tight">
          FuelTrack<span class="text-brand-600">.</span>
        </a>

        <!-- mini nav -->
        <nav class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a href="#features" class="hover:text-brand-600">Características</a>
          <a href="#pricing" class="hover:text-brand-600">Precios</a>
          <a href="#faq" class="hover:text-brand-600">FAQ</a>
          <a href="#contact" class="hover:text-brand-600">Contacto</a>
          <a href="#" class="hover:text-brand-600">Términos</a>
          <a href="#" class="hover:text-brand-600">Privacidad</a>
        </nav>

        <!-- socials -->
        <div class="flex items-center gap-3">
          <a href="#" class="inline-flex w-9 h-9 rounded-full border hover:bg-brand-50 hover:border-brand-300 grid place-items-center transition" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" class="text-slate-700" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.001 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM14.5 9c-2.21 0-4 1.79-4 4v8h4v-7a2 2 0 1 1 4 0v7h4v-8c0-3.31-2.69-6-6-6z"/>
            </svg>
          </a>
          <a href="#" class="inline-flex w-9 h-9 rounded-full border hover:bg-brand-50 hover:border-brand-300 grid place-items-center transition" aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" class="text-slate-700" fill="currentColor">
              <path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.6.8-2.4.9A3.6 3.6 0 0 0 12 7.9c0 .3 0 .6.1.9A10.2 10.2 0 0 1 3 5.2a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 2 2.6 3.7 2.6A7.2 7.2 0 0 1 2 18.6c-.3 0-.6 0-.8 0a10.1 10.1 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.2 1.8-1.9z"/>
            </svg>
          </a>
          <button
              class="inline-flex w-9 h-9 rounded-full border hover:bg-brand-50 hover:border-brand-300 grid place-items-center transition"
              aria-label="Volver arriba"
              @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" class="text-slate-700" fill="none">
              <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- línea fina -->
      <div class="my-6 h-px bg-slate-200"></div>

      <!-- legal -->
      <div class="text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p>© {{ year }} FuelTrack. Todos los derechos reservados.</p>
        <p>*Sitio prototipo estático. “No puedo confirmar” datos operativos sin entrevistas a proveedores.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()

const links = [
  { id: 'value', label: 'Valor' },
  { id: 'features', label: 'Características' },
  { id: 'how', label: 'Cómo funciona' },
  { id: 'pricing', label: 'Precios' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contacto' },
]

const mobileOpen = ref(false)
const activeId = ref('')
const isScrolled = ref(false)

function go(id) {
  scrollTo(id)
  mobileOpen.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape') mobileOpen.value = false
}

let observer
onMounted(() => {
  // Sombra/estilos al hacer scroll
  const onScroll = () => {
    isScrolled.value = window.scrollY > 4
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Resaltar link activo con IntersectionObserver
  const opts = { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.5, 1] }
  observer = new IntersectionObserver((entries) => {
    const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (visible?.target?.id) activeId.value = visible.target.id
  }, opts)

  links.forEach(l => {
    const el = document.getElementById(l.id)
    if (el) observer.observe(el)
  })

  window.addEventListener('keydown', onKeydown)

  // Bloquea scroll del body cuando el menú móvil está abierto
  watchEffect(() => {
    document.documentElement.style.overflow = mobileOpen.value ? 'hidden' : ''
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', onKeydown)
    observer?.disconnect()
    document.documentElement.style.overflow = ''
  })
})
</script>

<template>
  <!-- Enlace para saltar al contenido -->
  <a href="#hero" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] bg-brand-600 text-white px-3 py-1 rounded">
    Saltar al contenido
  </a>

  <header
      :class="[
      'sticky top-0 z-50 backdrop-blur border-b transition-colors',
      isScrolled ? 'bg-white/90 shadow-[var(--shadow-soft)]' : 'bg-white/80'
    ]"
  >
    <div class="section !py-3 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="text-xl font-extrabold tracking-tight flex items-center gap-2">
        <span>FuelTrack</span><span class="text-brand-600">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-2 text-sm">
        <button
            v-for="l in links"
            :key="l.id"
            @click="go(l.id)"
            class="px-3 py-2 rounded font-medium transition-colors"
            :class="[
            activeId === l.id
              ? 'text-brand-700'
              : 'text-slate-700 hover:text-brand-600'
          ]"
            :aria-current="activeId === l.id ? 'page' : undefined"
        >
          <span class="relative">
            {{ l.label }}
            <span
                class="absolute left-0 -bottom-0.5 h-0.5 bg-brand-600 transition-all"
                :style="{ width: activeId === l.id ? '100%' : '0%' }"
                aria-hidden="true"
            />
          </span>
        </button>
      </nav>

      <!-- CTA desktop -->
      <a href="#contact" class="hidden md:inline-flex btn btn-primary">Solicitar demo</a>

      <!-- Toggle móvil -->
      <button
          class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-slate-100"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
      >
        <svg v-if="!mobileOpen" width="24" height="24" viewBox="0 0 24 24" class="text-slate-700">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" class="text-slate-700">
          <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Menú móvil -->
    <div
        id="mobile-menu"
        class="md:hidden overflow-hidden transition-[max-height] duration-300 border-t"
        :style="{ maxHeight: mobileOpen ? '420px' : '0px' }"
    >
      <div class="px-4 py-3 flex flex-col gap-1 bg-white/95">
        <button
            v-for="l in links"
            :key="l.id"
            @click="go(l.id)"
            class="w-full text-left px-3 py-2 rounded font-medium"
            :class="activeId === l.id ? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-100 text-slate-700'"
        >
          {{ l.label }}
        </button>
        <a href="#contact" class="btn btn-primary mt-2">Solicitar demo</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* nada extra por ahora */
</style>

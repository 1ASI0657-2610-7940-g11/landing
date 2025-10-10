<script setup></script>

<template>
  <section id="how" class="bg-slate-50">
    <div class="section">
      <h2 class="title-lg text-center">Cómo funciona</h2>
      <p class="muted text-center max-w-2xl mx-auto mt-3">
        De la cotización a la conciliación, todo en un flujo simple y trazable.
      </p>

      <ol class="relative mt-10 grid md:grid-cols-4 gap-6">
        <!-- línea conectora (solo desktop) -->
        <div
            class="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 -translate-y-1/2"
            aria-hidden="true"
        />

        <!-- Paso 1 -->
        <li class="card relative text-center md:text-left transition-transform hover:-translate-y-0.5">
          <!-- punto conector -->
          <span
              class="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand-400"
              aria-hidden="true"
          />
          <!-- icono -->
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" stroke-width="2"/>
              <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="font-semibold mt-4">1. Cotiza</p>
          <p class="muted mt-1">Ingresa volumen, dirección y ventana.</p>
        </li>

        <!-- Paso 2 -->
        <li class="card relative text-center md:text-left transition-transform hover:-translate-y-0.5">
          <span
              class="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand-400"
              aria-hidden="true"
          />
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 21s7-5.333 7-11a7 7 0 1 0-14 0c0 5.667 7 11 7 11Z" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <p class="font-semibold mt-4">2. Compara</p>
          <p class="muted mt-1">Elige precio total y ETA.</p>
        </li>

        <!-- Paso 3 -->
        <li class="card relative text-center md:text-left transition-transform hover:-translate-y-0.5">
          <span
              class="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand-400"
              aria-hidden="true"
          />
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h6l2-3 2 6 2-4h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="font-semibold mt-4">3. Sigue la entrega</p>
          <p class="muted mt-1">Estado y evidencias en tiempo real.</p>
        </li>

        <!-- Paso 4 -->
        <li class="card relative text-center md:text-left transition-transform hover:-translate-y-0.5">
          <span
              class="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand-400"
              aria-hidden="true"
          />
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-100 text-brand-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 3h6l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2"/>
              <path d="M8 12h8M8 16h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="font-semibold mt-4">4. Concilia</p>
          <p class="muted mt-1">Documentos y export en un clic.</p>
        </li>
      </ol>

      <div class="text-center mt-10">
        <a href="#pricing" class="btn btn-primary">Empieza con un piloto</a>
      </div>
    </div>
  </section>
</template>

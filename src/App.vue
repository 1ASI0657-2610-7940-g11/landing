<script setup>
// App ensambla las secciones; el contenido vive en /src/components/*
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ValueProp from "./components/ValueProp.vue";
import Logos from "./components/Logos.vue";
import FeatureGrid from "./components/FeatureGrid.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Metrics from "./components/Metrics.vue";
import Testimonials from "./components/Testimonials.vue";
import Pricing from "./components/Pricing.vue";
import FAQ from "./components/FAQ.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800">
    <Navbar />
    <main>
      <Hero />
      <ValueProp />
      <Logos />
      <FeatureGrid />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
export default { }
</script>

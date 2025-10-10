// src/composables/useScrollTo.js
export function useScrollTo() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return { scrollTo }
}

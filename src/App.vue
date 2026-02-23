<template>
  <div class="app-wrapper">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Entrepreneurship />
      <SkillsMatrix />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Entrepreneurship from './components/Entrepreneurship.vue'
import SkillsMatrix from './components/SkillsMatrix.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.app-wrapper {
  position: relative;
}

main {
  scroll-behavior: smooth;
}
</style>

<template>
  <section id="about" class="about-section">
    <img src="/src/assets/auto-bg.png" class="technical-bg" alt="Automotive background" />
    <div class="section-overlay"></div>
    <div class="container grid-layout">
      <div 
        class="about-content"
        v-motion-slide-visible-once-left
      >
        <h2 class="section-title" v-html="$t('about.title')"></h2>
        <div class="prose">
          <p v-html="$t('about.p1')"></p>
          <p>{{ $t('about.p2') }}</p>
          <p>{{ $t('about.p3') }}</p>
        </div>
      </div>

      <div 
        class="future-content"
        v-motion-slide-visible-once-right
      >
        <h2 class="section-title" v-html="$t('about.vision_title')"></h2>
        <div class="prose">
          <p>{{ $t('about.vision_p1') }}</p>
          <p>{{ $t('about.vision_p2') }}</p>
          <p v-html="$t('about.vision_p3_expanded')"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 100px 0;
  background: #0d0d0d;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
}

.prose p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

strong {
  color: var(--text-primary);
}

@media (max-width: 992px) {
  .grid-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>

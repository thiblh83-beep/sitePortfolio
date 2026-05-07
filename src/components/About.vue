<template>
  <section id="about" class="about-section">
    <div class="section-overlay"></div>
    <div class="container grid-layout">
      
      <!-- Left Column -->
      <div class="about-content" v-motion-slide-visible-once-left>
        <h2 class="section-title" v-html="$t('about.title')"></h2>
        <div class="prose">
          <p class="intro-p" v-html="$t('about.p1')"></p>
          <div class="highlight-box glass-card">
            <p class="highlight-p" v-html="$t('about.p2')"></p>
          </div>
          <p class="standard-p" v-html="$t('about.p3')"></p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="future-content" v-motion-slide-visible-once-right>
        <h2 class="section-title" v-html="$t('about.vision_title')"></h2>
        <div class="prose">
          <p class="standard-p" v-html="$t('about.vision_p1')"></p>
          <p class="standard-p" v-html="$t('about.vision_p2')"></p>
          <p class="conclusion-p" v-html="$t('about.vision_p3_expanded')"></p>
        </div>

        <div class="open-question-container">
          <h3 class="open-question gradient-text">{{ $t('about.open_question') }}</h3>
          <a href="#contact" class="btn-primary mt-4">
            Discutons-en
            <ArrowRightIcon :size="20" />
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRightIcon } from 'lucide-vue-next'
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  position: relative;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.prose p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* Typography & Layout adjustments to "lighten" the text */

.intro-p {
  font-size: 1.25rem;
  color: var(--text-primary) !important;
  font-weight: 300;
  letter-spacing: 0.02em;
}

.highlight-box {
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid var(--accent-color);
  background: rgba(0, 212, 255, 0.03);
}

.highlight-p {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 0 !important;
  color: #cce7ff !important;
}

.standard-p {
  font-size: 1.05rem;
}

.conclusion-p {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary) !important;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* In-text span highlights injected from translation files */
:deep(.text-glow) {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  font-weight: 700;
}

:deep(.highlight-hw) {
  color: #ff9e80;
  font-weight: 600;
}

:deep(.highlight-sw) {
  color: #80d8ff;
  font-weight: 600;
}

:deep(.highlight-interactive) {
  color: var(--accent-color);
  font-weight: 600;
  border-bottom: 1px dashed var(--accent-color);
  cursor: default;
  transition: all 0.3s ease;
}

:deep(.highlight-interactive:hover) {
  background: rgba(0, 212, 255, 0.1);
}

/* Open Question */
.open-question-container {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid rgba(0, 212, 255, 0.2);
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.open-question {
  font-size: 1.35rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.mt-4 {
  margin-top: 1rem;
}

@media (max-width: 992px) {
  .grid-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>

<template>
  <section id="about" class="about-section">
    <div class="section-overlay"></div>
    <div class="container">
      <div class="about-grid">
        <!-- Left Column: Who am I -->
        <div class="about-content" v-motion-slide-visible-once-left>
          <h2 class="section-title" v-html="$t('about.title')"></h2>
          <p class="intro-text" v-html="$t('about.intro')"></p>
          
          <div class="traits-container">
            <div class="trait-card glass-card">
              <div class="trait-icon"><NetworkIcon :size="24" /></div>
              <div class="trait-text">
                <h3>{{ $t('about.trait1_title') }}</h3>
                <p>{{ $t('about.trait1_desc') }}</p>
              </div>
            </div>
            
            <div class="trait-card glass-card">
              <div class="trait-icon"><MessagesSquareIcon :size="24" /></div>
              <div class="trait-text">
                <h3>{{ $t('about.trait2_title') }}</h3>
                <p>{{ $t('about.trait2_desc') }}</p>
              </div>
            </div>
            
            <div class="trait-card glass-card">
              <div class="trait-icon"><MicroscopeIcon :size="24" /></div>
              <div class="trait-text">
                <h3>{{ $t('about.trait3_title') }}</h3>
                <p>{{ $t('about.trait3_desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Vision -->
        <div class="future-content" v-motion-slide-visible-once-right>
          <h2 class="section-title" v-html="$t('about.vision_title')"></h2>
          
          <div class="vision-card glass-card">
            <div class="vision-highlights">
              <span class="highlight-badge">{{ $t('about.vision_highlight').split('|')[0].trim() }}</span>
              <span class="highlight-badge">{{ $t('about.vision_highlight').split('|')[1].trim() }}</span>
              <span class="highlight-badge">{{ $t('about.vision_highlight').split('|')[2].trim() }}</span>
            </div>
            <p class="vision-desc">{{ $t('about.vision_desc') }}</p>
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
    </div>
  </section>
</template>

<script setup>
import { NetworkIcon, MessagesSquareIcon, MicroscopeIcon, ArrowRightIcon } from 'lucide-vue-next'
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background: transparent; /* Now inherits from main.css --bg-color */
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
  align-items: center;
}

.intro-text {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.traits-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.trait-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  transition: var(--transition-smooth);
}

.trait-card:hover {
  transform: translateX(10px);
  border-color: var(--accent-color);
  background: var(--card-hover);
}

.trait-icon {
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-color);
  padding: 1rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trait-text h3 {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.trait-text p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.vision-card {
  padding: 2.5rem;
  margin-bottom: 3rem;
}

.vision-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.highlight-badge {
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.875rem;
  font-weight: 700;
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.vision-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.open-question-container {
  text-align: left;
  padding-left: 1rem;
  border-left: 4px solid var(--accent-color);
}

.open-question {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.mt-4 {
  margin-top: 1rem;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>

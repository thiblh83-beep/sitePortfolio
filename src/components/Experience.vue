<template>
  <section id="experience" class="experience-section">
    <img :src="roboticsBg" class="technical-bg" alt="Robotics background" />
    <div class="section-overlay"></div>
    <div class="container">
      <h2 
        class="section-title"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0 }"
        v-html="$t('experience.title')"
      >
      </h2>

      <div class="timeline">
        <div 
          v-for="(exp, index) in translatedExperiences" 
          :key="index"
          class="timeline-item"
          v-motion-slide-visible-once-bottom
        >
          <div class="timeline-date">{{ exp.date }}</div>
          <div class="timeline-content">
            <div class="experience-header">
              <div class="company-logo" v-if="exp.logo">
                <img :src="exp.logo" :alt="exp.company" />
              </div>
              <div class="experience-info">
                <h3>{{ exp.title }}</h3>
                <span class="company">{{ exp.company }}</span>
              </div>
            </div>
            <p>{{ exp.description }}</p>
            <ul class="missions">
              <li v-for="mission in exp.missions" :key="mission">{{ mission }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import aiaLogo from '../assets/aia-logo.png'
import pciLogo from '../assets/pci-logo.jpg'
import orangeLogo from '../assets/orange-logo.png'
import roboticsBg from '../assets/robotics-bg.png'

const { t } = useI18n()

const translatedExperiences = computed(() => [
  {
    date: '2023 - Juin 2026',
    title: t('experience.exp1.title'),
    company: t('experience.exp1.company'),
    logo: aiaLogo,
    description: t('experience.exp1.desc'),
    missions: [
      t('experience.exp1.m1'),
      t('experience.exp1.m2'),
      t('experience.exp1.m3')
    ]
  },
  {
    date: 'Avril 2025 - Juillet 2025',
    title: t('experience.exp2.title'),
    company: t('experience.exp2.company'),
    logo: pciLogo,
    description: t('experience.exp2.desc'),
    missions: [
      t('experience.exp2.m1'),
      t('experience.exp2.m2'),
      t('experience.exp2.m3')
    ]
  },
  {
    date: '2021 - 2023',
    title: t('experience.exp3.title'),
    company: t('experience.exp3.company'),
    logo: orangeLogo,
    description: t('experience.exp3.desc'),
    missions: [
      t('experience.exp3.m1'),
      t('experience.exp3.m2'),
      t('experience.exp3.m3')
    ]
  }
])
</script>

<style scoped>
.experience-section {
  padding: 100px 0;
  background: #0a0a0a;
}

.timeline {
  margin-top: 4rem;
  position: relative;
  max-width: 800px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 4rem;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: -5px;
  top: 0;
  width: 11px;
  height: 11px;
  background: var(--accent-gradient);
  border-radius: 50%;
}

.timeline-date {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.company-logo {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.company {
  display: block;
  font-weight: 600;
  color: var(--text-secondary);
}

.missions {
  margin-top: 1rem;
  color: var(--text-secondary);
}

.missions li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.missions li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}
</style>

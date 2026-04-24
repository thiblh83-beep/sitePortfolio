<template>
  <section id="education" class="education-section">
    <div class="container">
      <h2 
        class="section-title"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0 }"
        v-html="$t('education.title')"
      >
      </h2>

      <div class="education-timeline">
        <div 
          v-for="(edu, index) in translatedEducation" 
          :key="index"
          class="edu-item"
          v-motion-slide-visible-once-bottom
        >
          <div class="edu-date">{{ edu.date }}</div>
          <div class="edu-content">
            <div class="edu-header">
              <div class="edu-info">
                <h3>{{ edu.title }}</h3>
                <div class="school-link-wrapper">
                  <a v-if="edu.link" :href="edu.link" target="_blank" class="school-link">
                    {{ edu.school }}
                    <ExternalLinkIcon :size="16" />
                  </a>
                  <span v-else class="school">{{ edu.school }}</span>
                </div>
              </div>
            </div>
            <p class="edu-description">{{ edu.description }}</p>
            <div v-if="edu.details" class="edu-details">
              {{ edu.details }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ExternalLinkIcon } from 'lucide-vue-next'

const { t } = useI18n()

const translatedEducation = computed(() => [
  {
    date: t('education.edu1.date'),
    title: t('education.edu1.title'),
    school: t('education.edu1.school'),
    link: 'https://isen-mediterranee.fr/formation/cycle-ingenieur-par-apprentissage/',
    description: t('education.edu1.desc')
  },
  {
    date: '2021 - 2023',
    title: t('education.edu2.title'),
    school: t('education.edu2.school'),
    link: 'https://iut.univ-tln.fr/BUT-Genie-Electrique-et-Informatique-Industrielle-GEII.html',
    description: t('education.edu2.desc'),
    details: t('education.edu2.details')
  },
  {
    date: '2018 - 2021',
    title: t('education.edu3.title'),
    school: t('education.edu3.school'),
    description: t('education.edu3.desc'),
    details: t('education.edu3.details')
  }
])
</script>

<style scoped>
.education-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.education-timeline {
  margin-top: 4rem;
  position: relative;
  max-width: 800px;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.edu-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 4rem;
}

.edu-item::after {
  content: '';
  position: absolute;
  left: -5px;
  top: 0;
  width: 11px;
  height: 11px;
  background: var(--accent-gradient);
  border-radius: 50%;
}

.edu-date {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.edu-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.school-link-wrapper {
  margin-bottom: 0.75rem;
}

.school-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: var(--transition-smooth);
}

.school-link:hover {
  color: var(--accent-color);
}

.school {
  font-weight: 600;
  color: var(--text-secondary);
}

.edu-description {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.edu-details {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-style: italic;
}
</style>

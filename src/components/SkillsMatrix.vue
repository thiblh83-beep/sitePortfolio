<template>
  <section id="skills" class="skills-matrix-section">
    <div class="container">
      <h2 
        class="section-title"
        v-motion-slide-visible-once-bottom
        v-html="$t('skills.title')"
      >
      </h2>

      <div class="matrix-grid">
        <!-- Savoirs (Outils) -->
        <div class="matrix-column" v-motion-slide-visible-once-bottom>
          <div class="column-header">
            <h3>{{ $t('skills.col1_title') }}</h3>
          </div>
          <div class="column-body">
            <div class="skill-group">
              <h4>{{ $t('skills.col1_s1_title') }}</h4>
              <p>{{ $t('skills.col1_s1_desc') }}</p>
            </div>
            <div class="skill-group">
              <h4>{{ $t('skills.col1_s2_title') }}</h4>
              <p>{{ $t('skills.col1_s2_desc') }}</p>
            </div>
            <div class="skill-group">
              <h4>{{ $t('skills.col1_s3_title') }}</h4>
              <p>{{ $t('skills.col1_s3_desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Savoirs-faire (Actions) -->
        <div class="matrix-column accent" v-motion-slide-visible-once-bottom>
          <div class="column-header">
            <h3>{{ $t('skills.col2_title') }}</h3>
          </div>
          <div class="column-body">
            <div class="skill-group">
              <h4>{{ $t('skills.col2_s1_title') }}</h4>
              <p v-html="$t('skills.col2_s1_desc')"></p>
            </div>
            <div class="skill-group">
              <h4>{{ $t('skills.col2_s2_title') }}</h4>
              <p v-html="$t('skills.col2_s2_desc')"></p>
            </div>
            <div class="skill-group">
              <h4>{{ $t('skills.col2_s3_title') }}</h4>
              <p>{{ $t('skills.col2_s3_desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Savoirs-être (Personnalité) -->
        <div class="matrix-column" v-motion-slide-visible-once-bottom>
          <div class="column-header">
            <h3>{{ $t('skills.col3_title') }}</h3>
          </div>
          <div class="column-body">
            <div class="skill-group">
              <h4>{{ $t('skills.col3_s1_title') }}</h4>
              <p>{{ $t('skills.col3_s1_desc') }}</p>
            </div>
            <div class="skill-group">
              <h4>{{ $t('skills.col3_s2_title') }}</h4>
              <p>{{ $t('skills.col3_s2_desc') }}</p>
            </div>
            <div class="skill-group">
              <h4>{{ $t('skills.col3_s3_title') }}</h4>
              <p>{{ $t('skills.col3_s3_desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-matrix-section {
  padding: 100px 0;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.matrix-column {
  background: var(--card-bg);
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
}

.matrix-column.accent {
  border-color: rgba(255, 138, 101, 0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.column-header {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.column-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.matrix-column.accent .column-header h3 {
  color: var(--accent-color);
}

.column-body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;
}

.skill-group h4 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.skill-group p {
  font-size: 0.938rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

strong {
  color: var(--text-primary);
}

@media (max-width: 992px) {
  .matrix-grid {
    grid-template-columns: 1fr;
  }
}
</style>

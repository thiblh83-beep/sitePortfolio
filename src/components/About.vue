<template>
  <section id="about" class="about-section">
    <img src="/src/assets/auto-bg.png" class="technical-bg" alt="Automotive background" />
    <div class="section-overlay"></div>
    <div class="container grid-layout">
      <div 
        class="about-content"
        v-motion-slide-visible-once-left
      >
        <h2 class="section-title">À propos de <span class="gradient-text">moi...</span></h2>
        <div class="prose">
          <p>
            Je suis <strong>Thibault L'Héritier</strong>, Ingénieur en Systèmes Embarqués. 
            Les projets que j'ai menés sont principalement des projets de développement de simulateurs 
            et d'intégration de systèmes critiques dans le milieu de l'aéronautique de défense.
          </p>
          <p>
            Mon expertise se situe à la charnière entre le matériel et le logiciel : 
            je conçois aussi bien l'architecture électronique (<strong>FPGA, VHDL</strong>) 
            que les couches logicielles de haut niveau (<strong>C++, Réseaux</strong>) 
            pour créer des systèmes complets et cohérents.
          </p>
          <p>
            Rigoureux et méthodique, mon approche repose sur la fiabilité et la maîtrise des contraintes temporelles. 
            Je m'attache à comprendre le fonctionnement intime des équipements (rétro-ingénierie) 
            pour développer des solutions robustes, capables de s'interfacer avec des technologies existantes.
          </p>
        </div>
      </div>

      <div 
        class="future-content"
        v-motion-slide-visible-once-right
      >
        <h2 class="section-title">Mon <span class="gradient-text">futur :</span></h2>
        <div class="prose">
          <p>
            À travers ce parcours, je recherche un poste dans la conception et le développement de systèmes critiques, 
            me permettant de mettre en pratique ma double compétence matérielle et logicielle (<strong>FPGA / CPU</strong>) 
            tout en continuant à relever des défis techniques complexes.
          </p>
          <p>
            Je souhaite contribuer à l'élaboration de solutions technologiques performantes, 
            qu'il s'agisse de simulateurs, d'outils de test ou d'architectures embarquées complètes.
          </p>
          <p>
            Motivé par l'innovation et la rigueur de l'ingénierie, je porte un intérêt particulier aux secteurs 
            de <strong>l'aéronautique, de l'automobile et de la robotique</strong>.
          </p>
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

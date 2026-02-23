<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-left">
        <p>© 2026 Thibault L'HERITIER. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/thibault-l-h%C3%A9ritier-005a18246" target="_blank">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>

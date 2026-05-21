<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);
const particles = ref([]);
let particleId = 0;

const handleMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
  
  if (Math.random() > 0.7) {
    const id = particleId++;
    particles.value.push({
      id,
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 4 + 2,
      opacity: 1,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8
    });
    
    setTimeout(() => {
      particles.value = particles.value.filter(p => p.id !== id);
    }, 1000);
  }
};

const handleMouseOver = (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON' || target.closest('button') || 
      target.tagName === 'A' || target.closest('a') ||
      target.getAttribute('role') === 'button') {
    isHovering.value = true;
  }
};

const handleMouseOut = () => {
  isHovering.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseover', handleMouseOver);
  window.addEventListener('mouseout', handleMouseOut);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseover', handleMouseOver);
  window.removeEventListener('mouseout', handleMouseOut);
});
</script>

<template>
  <div>
    <div 
      class="cursor-glow"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    />
    <div 
      class="cursor-ring"
      :class="{ hovering: isHovering }"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    />
    <div 
      class="cursor-dot"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    />
    
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="cursor-particle"
      :style="{
        left: particle.x + 'px',
        top: particle.y + 'px',
        width: particle.size + 'px',
        height: particle.size + 'px'
      }"
    />
  </div>
</template>

<style scoped>
.cursor-particle {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  background: var(--skin-color, #6366f1);
  animation: particle-float 1s ease-out forwards;
}

@keyframes particle-float {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--dx, 20px)), calc(-50% + var(--dy, -30px))) scale(0);
  }
}
</style>

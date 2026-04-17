<template>
  <section class="bg-white p-[120px]" aria-labelledby="whyteams-heading">
    <div class="flex flex-col items-center">
      <h2 id="whyteams-heading" class="font-satoshi font-bold text-[40px] gradient-text text-center">
        Why Teams Use IntelliToggle
      </h2>

      <div class="flex flex-col md:flex-row justify-center items-start gap-[94px] mt-[48px]">
        <div v-for="card in cards" :key="card.title" class="w-full md:w-[402px] flex flex-col">
          <div class="bg-primary-light border border-primary rounded-[8px] w-[129px] h-[118px] flex items-center justify-center">
            <img :src="card.icon" :alt="card.title" class="w-12 h-12" />
          </div>
          <h3 class="font-inter font-semibold text-[24px] text-heading-2 mt-[48px]">{{ card.title }}</h3>
          <p class="font-inter font-normal text-[18px] text-body-2 mt-[8px]">{{ card.desc }}</p>
        </div>
      </div>

      <!-- Bottom Banner -->
      <div class="bg-primary-light border-[0.2px] border-primary rounded-[12px] shadow-card max-w-[1394px] w-full mx-auto px-[32px] py-[16px] flex flex-col md:flex-row items-center justify-between gap-4 mt-[32px]">
        <p class="font-inter font-semibold text-[24px]">
          <span class="text-heading-1 font-bold">Read a 2-min case note:</span>
          <span class="text-body-2"> How a sample Flutter app shipped faster with IntelliToggle</span>
        </p>
        <!-- Read Now — bg #F9A71E, gradient text on nested span -->
        <a href="#" class="flex items-center justify-center bg-[#F9A71E] rounded-[8px] w-[184px] h-[55px] px-6 py-3 shrink-0 hover:opacity-90 transition-opacity">
          <span class="font-inter font-semibold text-[18px] gradient-text">Read Now</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  { icon: '/images/icon-control.svg', title: 'Safer, faster rollouts', desc: 'Control feature releases in minutes, not weeks without risking production stability.' },
  { icon: '/images/icon-deploy.svg', title: 'Confidence to ship', desc: 'Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes.' },
  { icon: '/images/icon-ai-operator.svg', title: 'Future-ready with AI delivery', desc: 'Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.' },
]
</script>

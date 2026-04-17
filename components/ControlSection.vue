<template>
  <section class="bg-white section-padding py-[120px]" aria-labelledby="control-heading">
    <h2 id="control-heading" class="font-satoshi font-bold text-[40px] gradient-text text-center">
      Control &amp; Power-focused
    </h2>

    <div class="mt-[48px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-[48px] xl:gap-[95px] max-w-[1680px] mx-auto">
      <div v-for="card in cards" :key="card.title" class="flex flex-col flex-1 min-w-0">
        <div class="rounded-[8px] overflow-hidden">
          <img :src="card.image" :alt="card.title + ' dashboard preview'" class="w-full h-auto object-contain" loading="lazy" />
        </div>
        <h3 class="mt-[32px] font-inter font-semibold text-[24px] text-heading-2">{{ card.title }}</h3>
        <p class="mt-2 font-inter font-normal text-[18px] text-body-2">{{ card.description }}</p>
        <div class="mt-6">
          <a href="#" class="inline-flex items-center justify-center w-[243px] h-[46px] border border-[#F9A71E] rounded-[8px] hover:bg-[#F9A71E]/10 transition-colors">
            <span class="font-inter font-semibold text-[18px] text-[#F9A71E]">View Documentation</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  { title: 'Connect', description: 'Install SDK in your Dart project in 2 mins.', image: '/images/connect_frame.png' },
  { title: 'Create Flags', description: 'Define features in IntelliToggle dashboard.', image: '/images/create_frame.png' },
  { title: 'Ship & Control', description: 'Flip switches anytime, see instant results.', image: '/images/ship_frame.png' },
]
</script>

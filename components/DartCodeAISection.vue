<template>
  <section class="relative bg-cover bg-center p-[120px]" style="background-image: url('/images/hero-bg.jpg')" aria-labelledby="dartcodeai-heading">
    <div class="absolute inset-0 bg-gradient-to-b from-[rgba(66,56,158,0.8)] to-[rgba(26,28,61,0.8)]" />

    <div class="relative flex flex-col items-center">
      <!-- Coming Soon Badge — visible capsule -->
      <div class="flex justify-center">
        <span class="inline-flex items-center justify-center bg-[#F9A71E] rounded-[32px] px-[32px] py-[10px]">
          <span class="font-inter font-semibold text-[18px] gradient-text">Coming Soon</span>
        </span>
      </div>

      <!-- Title -->
      <h2 id="dartcodeai-heading" class="font-satoshi font-bold text-[40px] text-[#FEFEFF] text-center mt-[8px]">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <!-- 2x2 Grid — icons centered above text -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[120px] gap-y-[64px] max-w-[1440px] mx-auto mt-[48px]">
        <div v-for="card in cards" :key="card.title" class="bg-white/[0.02] border-[0.2px] border-white rounded-[12px] overflow-hidden p-[24px] flex flex-col items-center text-center gap-[32px]">
          <div class="bg-primary-light rounded-[4px] p-[11px]">
            <img :src="card.icon" :alt="card.title" class="w-6 h-6" />
          </div>
          <div class="flex flex-col gap-[8px]">
            <h3 class="font-inter font-semibold text-[24px] text-white">{{ card.title }}</h3>
            <p class="font-inter font-normal text-[18px] text-primary-light">{{ card.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Enterprise Only -->
      <p class="font-inter font-semibold text-[32px] text-[#F9A71E] text-center mt-[32px]">Enterprise Only</p>

      <!-- Bottom CTA Bar -->
      <div class="bg-white/[0.02] border-[0.2px] border-primary-light rounded-[12px] px-[33px] py-[28px] flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1440px] w-full mx-auto mt-[32px]">
        <p class="font-inter font-semibold text-[24px]">
          <span class="text-[#F9A71E]">Be The First</span>
          <span class="text-white"> To Try Out Our New AI Features.</span>
        </p>
        <!-- Email + button inline in same box -->
        <div class="relative w-full sm:w-[474px]">
          <input type="email" placeholder="Enter email address" class="w-full border border-primary-light rounded-[8px] h-[55px] px-4 pr-[215px] bg-transparent text-white placeholder-primary-light/50 font-inter text-[14px] outline-none focus:ring-1 focus:ring-primary-light" />
          <button class="absolute right-[6px] top-1/2 -translate-y-1/2 bg-[#F9A71E] rounded-[4px] w-[202px] h-[42px] font-inter font-semibold text-[18px] text-[#1A1C3D] whitespace-nowrap hover:opacity-90 transition-opacity">
            Join AI Early Access
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  { icon: '/images/icon-autoflag.svg', title: 'AutoFlag AI (LLM-Assisted Flag Creation)', desc: 'Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.' },
  { icon: '/images/icon-smartramp.svg', title: 'SmartRamp AI (AI-Driven Rollout Optimization)', desc: 'Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.' },
  { icon: '/images/icon-explainflags.svg', title: 'ExplainFlags AI (LLM Root-Cause + Insights)', desc: 'Understand issues instantly with AI-generated, plain-language insights tied to your flags.' },
  { icon: '/images/icon-autosegment.svg', title: 'AutoSegment AI (Behavioral Segmentation)', desc: 'Target the right users automatically. AI builds segments from live behavior--no manual rules.' },
]
</script>

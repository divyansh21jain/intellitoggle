<template>
  <section class="relative w-full bg-gradient-to-b from-primary to-primary-dark" aria-labelledby="hero-heading">
    <AppHeader />

    <div class="flex flex-col items-center px-5 sm:px-10 lg:px-[120px] pb-[150px]">
      <!-- Title -->
      <div class="w-full max-w-[1040px] text-center">
        <h1 id="hero-heading" class="font-satoshi font-bold text-3xl sm:text-5xl lg:text-[64px] text-white leading-tight lg:leading-[1.15]">
          The First
          <span class="relative inline-block">
            <span class="relative z-10">Dart-Native</span>
            <span class="absolute -inset-x-3 -inset-y-1 bg-[#F9A71E] rounded-[8px] z-0" aria-hidden="true"></span>
          </span>
          Feature Flag<br />With DartCodeAI
        </h1>
      </div>

      <!-- Subtitle -->
      <div class="w-full max-w-[832px] text-center mt-[16px]">
        <p class="font-inter font-semibold text-lg sm:text-2xl lg:text-[32px] text-[#FEFEFF] leading-snug">
          Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery
        </p>
        <p class="font-inter font-semibold text-lg sm:text-2xl lg:text-[32px] text-[#F9A71E] leading-snug mt-2">
          Starting at just $1/month
        </p>
      </div>

      <!-- Valid till -->
      <p class="font-inter font-medium text-sm lg:text-[16px] text-[#DEDEDE] mt-[16px] text-center">
        Valid till 15th September,2025
      </p>

      <!-- Buttons — bg on wrapper, gradient-text on nested span -->
      <div class="flex items-center justify-center gap-[32px] flex-wrap mt-[6px]">
        <a href="#access" class="inline-flex items-center justify-center bg-[#F9A71E] rounded-[8px] w-[260px] px-[44px] py-[7px] hover:opacity-90 transition-opacity whitespace-nowrap">
          <span class="font-inter font-semibold text-lg lg:text-[24px] gradient-text">Get Access</span>
        </a>
        <a href="#ai-early-access" class="inline-flex items-center justify-center border border-[#F9A71E] rounded-[8px] w-[260px] px-[11px] py-[7px] font-inter font-semibold text-lg lg:text-[24px] text-[#F9A71E] hover:bg-[#F9A71E]/10 transition-colors whitespace-nowrap">
          Join AI Early Access
        </a>
      </div>

      <!-- App Screenshot -->
      <div class="w-full max-w-[1394px] mt-[141px]">
        <div class="relative rounded-[16px] bg-white/[0.55] backdrop-blur-md p-3 sm:p-4 lg:p-6">
          <img src="/images/hero-screenshot.gif" alt="IntelliToggle dashboard" class="w-full h-auto border border-body-3 rounded-[8px] shadow-screenshot" loading="eager" />
        </div>
      </div>
    </div>

    <!-- Diagonal divider strip -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" aria-hidden="true">
      <svg class="relative block w-full h-[100px] lg:h-[150px]" viewBox="0 0 1920 150" preserveAspectRatio="none">
        <polygon fill="#FFFFFF" points="0,150 1920,0 1920,150" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

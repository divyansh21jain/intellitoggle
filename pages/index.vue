<template>
  <div class="bg-[#fffdff] w-full">
    <HeroSection />
    <TrustedBySection />
    <WhatIsSection />
    <OpenFeatureSection />
    <ControlSection />
    <ComparisonSection />
    <DartCodeAISection />
    <PlansSection />
    <WhyTeamsSection />
    <CtaBanner />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useScrollAnimation()

useHead({
  title: 'IntelliToggle - AI Driven Feature Flags for Modern Teams',
  htmlAttrs: { lang: 'en' },
})
</script>

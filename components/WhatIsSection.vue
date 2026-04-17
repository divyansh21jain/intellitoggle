<template>
  <section class="bg-white px-5 sm:px-10 lg:px-[120px] py-14 lg:py-[120px]" aria-labelledby="whatis-heading">
    <h2 id="whatis-heading" class="font-satoshi font-bold text-3xl lg:text-[40px] gradient-text text-center w-full">
      What Is IntelliToggle
    </h2>

    <div class="mt-8 lg:mt-[48px] flex flex-col lg:flex-row items-start gap-8 lg:gap-[227px]">
      <!-- Left Column — text -->
      <div class="w-full lg:flex-1 lg:min-w-[400px]">
        <h3 class="font-inter font-semibold text-2xl lg:text-[32px] text-heading-1 leading-tight">
          Your AI Dart App's Control Panel For Feature Releases
        </h3>
        <p class="mt-[16px] font-inter font-normal text-base lg:text-[18px] text-body-2 leading-relaxed">
          IntelliToggle is a "Dart-Powered" feature flag that lets you turn
          features on/off instantly in your application without redeploying code.
          It allows you control roll-outs, run experiments, and fix bugs faster.
        </p>
        <h4 class="mt-8 font-inter font-semibold text-xl lg:text-[24px] text-heading-2">Benefits</h4>
        <ul class="mt-[16px] list-disc pl-5 space-y-[8px] font-inter font-normal text-base lg:text-[18px] text-body-2">
          <li>Toggle new features without app updates</li>
          <li>Roll out to specific users or regions</li>
          <li>Instantly rollback when needed</li>
        </ul>
      </div>

      <!-- Right Column — dashboard image -->
      <div class="w-full lg:flex-1 lg:min-w-[400px] lg:max-w-[830px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
        <img src="/images/what-is-dashboard.png" alt="IntelliToggle Dashboard" class="w-full h-auto object-cover object-top" loading="lazy" />
      </div>
    </div>
  </section>
</template>

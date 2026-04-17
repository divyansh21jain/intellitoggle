<template>
  <footer class="bg-[#ECEBF5] w-full px-[120px] py-[100px]" role="contentinfo">
    <div class="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 flex-wrap">
      <!-- Brand Column -->
      <div class="flex flex-col items-start w-full lg:w-[359px] shrink-0">
        <a href="/" class="flex items-center gap-2" aria-label="IntelliToggle home">
          <img
            src="/images/logo-footer.svg"
            alt=""
            class="w-[54.5px] h-[50.8px]"
            width="54.5"
            height="50.8"
            aria-hidden="true"
          />
          <span class="font-merriweather font-bold text-lg gradient-text">
            IntelliToggle
          </span>
        </a>
        <p class="font-inter font-normal text-lg text-[#4A4B4D] opacity-90 leading-[1.5] max-w-[349px] mt-[10px] py-[10px]">
          IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IntelliToggle on GitHub"
          class="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded mt-[10px]"
        >
          <img
            src="/images/icon-github.svg"
            alt=""
            class="w-[30px] h-[30px]"
            width="30"
            height="30"
            aria-hidden="true"
          />
        </a>
      </div>

      <!-- Link Columns -->
      <div class="flex flex-col sm:flex-row w-[510px] justify-between">
        <!-- Resources -->
        <nav class="flex flex-col items-start w-[256px]" aria-label="Resources">
          <h3 class="font-inter font-normal text-lg text-[#5F5F60]">Resources</h3>
          <ul class="flex flex-col items-start gap-[16px] mt-[24px]" role="list">
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                Why IntelliToggle Is Different
              </a>
            </li>
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <!-- Company -->
        <nav class="flex flex-col items-start w-[136px]" aria-label="Company">
          <h3 class="font-inter font-normal text-lg text-[#5F5F60]">Company</h3>
          <ul class="flex flex-col items-start gap-[16px] mt-[24px]" role="list">
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" class="font-inter font-semibold text-lg text-[#323338] hover:text-primary transition-colors focus:outline-none focus:underline">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Newsletter -->
      <div class="flex flex-col items-start w-full sm:w-[322px]">
        <h3 class="font-inter font-semibold text-lg text-[#263238]">
          Subscribe to Newsletter
        </h3>
        <form
          class="relative w-full h-[46px] mt-[27px]"
          @submit.prevent="handleSubscribe"
          aria-label="Newsletter subscription"
        >
          <label for="newsletter-email" class="sr-only">Email address</label>
          <input
            id="newsletter-email"
            v-model="email"
            type="email"
            required
            placeholder="Enter email address"
            autocomplete="email"
            class="w-full h-full rounded-[7px] bg-white pl-4 pr-[124px] font-inter font-normal text-xs text-gray-900 placeholder-[#8A8A8A] outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 h-full w-[116px] bg-[#F9A71E] rounded-r-[7px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <span class="font-inter font-bold text-[13px] gradient-text">Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')

function handleSubscribe() {
  if (email.value) {
    email.value = ''
  }
}
</script>

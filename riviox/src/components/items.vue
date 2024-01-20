<script setup>
import item from './item.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <item>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    RivioxTweaks'
    <a href="https://riviox.is-a.dev/RivioxTweaks/docs" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </item>

  <item>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    Join my <a href="https://discord.gg/PJ8p6ZzUbf" target="_blank">Discord</a> server
  </item>

  <item>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Me</template>
    You can support me
    <a href="https://buymeacoffee.com/riviox" target="_blank" rel="noopener">becoming a sponsor</a>.
  </item>
</template>

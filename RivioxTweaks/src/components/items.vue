<script setup>
import Item from './item.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
import { ref } from 'vue';

const showDocumentation = ref(false);
const toggleDocumentation = () => {
  showDocumentation.value = !showDocumentation.value;
};
</script>

<template>
  <div>
    <Item @click="toggleDocumentation">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation/FAQ</template>
      RivioxTweaks' <a>Documentation</a>
      provides you with all the information you need to get started.
      <template v-if="showDocumentation">
        <RouterView view="/docs"></RouterView>
      </template>
    </Item>

    <Item>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>
      Join my <a href="https://discord.gg/PJ8p6ZzUbf" target="_blank">Discord</a> server
    </Item>

    <Item>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Me</template>
      You can support me
      <a href="https://buymeacoffee.com/riviox" target="_blank" rel="noopener">by becoming a sponsor</a>.
    </Item>
  </div>
</template>

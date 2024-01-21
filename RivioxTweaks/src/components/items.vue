<script setup>
import Item from './item.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
import PictureIcon from './icons/IconPicture.vue';
import { ref } from 'vue';

const showDocumentation = ref(false);
const toggleDocumentation = () => {
  showDocumentation.value = !showDocumentation.value;
};

const showScreenshots = ref(false);
const toggleScreenshots = () => {
  showScreenshots.value = !showScreenshots.value;
};
</script>

<template>
  <div>
    <Item @click="toggleDocumentation">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation/FAQ</template>
      RivioxTweaks' <router-link to="/docs">Documentation</router-link>
      provides you with all the information you need to get started.
      <router-view v-if="showDocumentation"></router-view>
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

    <Item @click="toggleScreenshots">
      <template #icon>
        <PictureIcon />
      </template>
      <template #heading>Screenshots</template>
      Screenshots are <router-link to="/screenshots">here</router-link>
      <router-view v-if="showScreenshots"></router-view>
    </Item>
  </div>
</template>

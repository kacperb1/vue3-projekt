<template>
  <Layout>
    <div class="home-page text-center py-5">
      <h1 class="text-2x1 font-bold mb-4">{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="changeMessage"
        class="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 mt-4 transition-colors duration-300">Click
        me!</button>
    </div>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
      eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat
      nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat
      nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat
      nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '@/components/Layout.vue';

const title = 'Welcome to the Home Page';
const message = ref('This is a simple Vue 3 component using TypeScript and Composition API.');

function changeMessage() {
  message.value = 'You have clicked the button!';
}
</script>
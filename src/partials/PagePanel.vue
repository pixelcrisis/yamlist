<script setup>
  import { RouterLink } from 'vue-router'

  const props = defineProps([ 'icon', 'title', 'link' ])
</script>

<template>
  <div class="wrap">
    <header v-if="!$slots.header">
      <h2 v-if="!props.link">
        <component :is="props.icon" class="float-start size-5" />
        {{ props.title }}
      </h2>

      <RouterLink :to="props.link" v-if="props.link">
        <h2>
          <component :is="props.icon" class="float-start size-5" />
          {{ props.title }}
        </h2>
      </RouterLink>
    </header>
    <header v-else>
      <slot name="header"></slot>
    </header>

    <div class="divider"></div>

    <section>
      <slot></slot>
    </section>
  </div>
</template>
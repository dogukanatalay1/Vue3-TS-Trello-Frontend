<template>
    <v-container>
        <v-row justify="space-around">
          <v-card width="400">
            <v-card-text>
              {{ coin.name }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  coin: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>

</style> 
<script setup lang="ts">
import { useNuxtApp, useAsyncData } from '#imports'
import getToolsQuery from '~/graphql/queries/getTools'

const { $graphql } = useNuxtApp()
const { data: result, pending: loading, error } = await useAsyncData('tools', async () => {
  return await ($graphql as any).default.request(getToolsQuery)
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Dev Stacker Home Page</h1>
    <div v-if="loading">Loading tools...</div>
  <div v-else-if="error">Error: {{ error?.message }}</div>
    <div v-else>
      <p>Tools count: {{ result?.tools?.length ?? 0 }}</p>
      <ul v-if="result?.tools && result.tools.length">
        <li v-for="tool in result.tools" :key="tool.id" class="mb-2">
          <strong>{{ tool.name }}</strong> ({{ tool.category }})<br />
          <span v-if="tool.tags && tool.tags.length">Tags: {{ tool.tags.join(', ') }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
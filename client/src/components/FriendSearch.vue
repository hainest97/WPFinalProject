<script setup lang="ts">
import { searchUsers, type User } from "@/stores/users";
import { ref, reactive, watch } from "vue";
import { OAutocomplete, OField } from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga.css'

const name = ref("");
const selected = ref(null);
const filteredDataArray = reactive([] as User[]);

watch(name,
  () => {
    if (name) {
      searchUsers(name.value).then((data) =>
        filteredDataArray.push(...[data])
      );
      filteredDataArray.map((option) => option.toString());
      console.log(filteredDataArray);
      
    }
  }
);
</script>
<template>
  <div>
    <section>
      <p class="content"><b>Selected:</b> {{ selected }}</p>
      <o-field label="Find a User">
        <o-autocomplete
          v-model="name"
          rounded
          expanded
          icon="search"
          clearable
          :data="filteredDataArray"
          @select="(option) => (selected = option)"
        >
          <template #empty>No results found</template>
        </o-autocomplete>
      </o-field>
    </section>
  </div>
</template>

<style scoped></style>

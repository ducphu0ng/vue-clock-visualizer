<script setup lang="ts">
    const props = defineProps({
        value: Number
    })

</script>

<template>
    <div class="time">
        {{ props.value }}
    </div>
</template>
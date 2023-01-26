<script setup lang="ts">
import { useCellConfig } from "@/stores/cell_config";
import { onMounted } from "vue";

const cellConfig = useCellConfig();
const data = defineProps({
    black: Boolean,
    pos: String,
});
</script>

<template>
    <div
        :id="data.pos"
        class="cell"
        :class="black ? 'black' : 'white'"
        :style="`width:${cellConfig.getCellSizePx}; height:${cellConfig.getCellSizePx}`"></div>
</template>

<style scoped>
.cell {
    --cell-color: var(--color-cell-dark);
    display: block;
    position: relative;

    background-color: var(--cell-color);
    user-select: none;
}
.black {
    --cell-color: var(--color-cell-dark);
}
.white {
    --cell-color: var(--color-cell-light);
}
</style>

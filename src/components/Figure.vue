<script lang="ts" setup>
import { useCellConfig } from "@/stores/cell_config";
import { numberLiteralTypeAnnotation } from "@babel/types";
import { ref } from "vue";

const cellConfig = useCellConfig();
const props = defineProps({
    src: String,
    x: Number,
    y: Number,
});
const pos = ref(
{
    x: props.x ? props.x % 8 : 0, 
    y: props.y ? props.y % 8 : 0
});

function checkBounds(val: number)
{
    if(val >= 8) return 7;
    if(val < 0) return 0;
    return val;
}

function calcPos (val: number|undefined) {
    if(!val) return '0px';
    return `${val * cellConfig.getCellSize}px`;
};

function onMoveEnd(e: any) {
    pos.value.x += Math.floor(e.layerX / cellConfig.getCellSize);
    pos.value.y += Math.floor(e.layerY / cellConfig.getCellSize);
    
    pos.value.x = checkBounds(pos.value.x);
    pos.value.y = checkBounds(pos.value.y);
}
</script>

<template>
    <img
        class="figure"
        :src="props.src"
        :style="`width:${cellConfig.getCellSizePx}; 
                 height:${cellConfig.getCellSizePx}; 
                 left:${calcPos(pos.x)}; 
                 top:${calcPos(pos.y)}`" 
                 @dragend="onMoveEnd"
                 />
</template>

<style scoped>
.figure {
    position: absolute;
    user-select: none;
    user-zoom: none;
}
</style>

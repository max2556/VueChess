<script setup lang="ts">
import Cell from "./Cell.vue";
import Figure from "./Figure.vue";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<template>
    <main class="main">
        <div class="field">
            <div class="cells">
                <div v-for="row of letters" class="row">
                    <Cell
                        v-for="cell of numbers"
                        :black="(cell + row.charCodeAt(0)) % 2 == 1"
                        :pos="`${row}${cell}`"></Cell>
                </div>
            </div>
            <div class="letters subscript">
                <div v-for="char of letters" class="letter">{{ char }}</div>
            </div>
            <div class="numbers subscript">
                <div v-for="num of numbers" class="number">{{ num }}</div>
            </div>
            <div class="figures">
                <Figure src="src/assets/img/pawn.png" :x="3" :y="2" />
                <Figure src="src/assets/img/pawn.png" :x="7" :y="6" />
            </div>
        </div>
    </main>
</template>

<style>
.main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    justify-items: center;
    align-items: center;

    height: 100%;
    width: 100%;

    font-size: var(--text-size-big);
}
.field {
    --cell-size: 80px;

    position: relative;

    display: grid;
    grid-template-columns: 0.1fr 1.9fr;
    grid-template-rows: 1.9fr 0.1fr;
    gap: 0px 0px;
    grid-template-areas:
        "numbers cells"
        ". letters";
}
.cells {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 235px #44442f;

    grid-area: cells;
}
.letters {
    display: flex;
    grid-area: letters;
}
.numbers {
    display: flex;
    grid-area: numbers;

    flex-direction: column;
}
.subscript {
    justify-content: space-around;
    font-size: var(--text-size-base);
    margin: 3px;

    user-select: none;
}
.figures {
    position: absolute;
    grid-area: cells;
}
</style>


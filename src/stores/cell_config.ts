import { defineStore } from "pinia";
export const useCellConfig = defineStore('main', {
    state: () => ({
        size: 80,
    }),
    getters: {
        getCellSize(): number {
            return this.size;
        },
        getCellSizePx(): string {
            return `${this.size}px`;
        }
    },
})
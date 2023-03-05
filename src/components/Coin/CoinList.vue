<template>
    <div>
        <Coin 
            v-for="coin in coinList.slice(0, 10)"
            :key="coin.id"
            :coin="coin"
        ></Coin>
    </div>
</template>

<script lang="ts" setup>
import Coin from '../Coin/Coin.vue'
import { getCoinsAPI } from '@/client/coins';
import { ref, reactive, onMounted } from 'vue';

const coinList = ref([]);

const getCoins = async () => {
    const res = await getCoinsAPI();

    coinList.value = res.data;
};

onMounted(()=> {
    getCoins()
})

</script>

<style lang="scss" scoped>

</style>
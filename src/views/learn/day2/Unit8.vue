<template>
    <h1 class="text-center mt-5 mb-5">Real-Time clock</h1>
    <div class="d-flex justify-content-center time">
        <!-- <span class="text-center">{{  currentTime }}</span> -->
    </div>
</template>

<!-- <script setup>
import { ref, onMounted, onUnmounted } from 'vue';

    const currentTime = ref('');
    let intervalId = null;
    const updateClock = () => {
        const now = new Date();
        const date = String(now.getDate()).padStart(2, "0");
        const dayOfWeek = now.getDay();
        const days = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2,"0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        currentTime.value = `${days[dayOfWeek]} - ${date}/${month}/${year} - ${hours}:${minutes}:${seconds}`;        
    };
    onMounted(() => {
        updateClock();
        intervalId =  setInterval(updateClock, 1000);        
    });

    onUnmounted(() => {
        clearInterval(intervalId); // dừng interval khi component bị hủy
    });
</script> -->

<style lang="css" scoped>
    .time{  
        font-size: 50px;
        font-weight: bold;
    }
</style>
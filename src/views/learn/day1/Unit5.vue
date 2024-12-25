<template>
  <h1 class="text-center mt-5">Countdown Timer</h1>
  <div class="d-flex justify-content-center mb-4">
    <div class="mt-4">
      <label for="" class="mx-2">Enter seconds: </label>
      <input
        type="number"
        v-model.number="timeValue"
        :disabled="isRunning"
        placeholder="Enter seconds"
      />
    </div>
  </div>
  <div class="d-flex justify-content-center gap-2">
    <button type="button" class="btn btn-danger" @click="resetCountdown">
      Reset
    </button>
    <button type="button" class="btn btn-primary" @click="startCountdown" :disabled="isRunning">
      Start
    </button>
  </div>
  <div class="mt-4 text-center">
    <h2 v-if="timeLeft > 0">{{ timeLeft }} seconds remaining</h2>
    <h2 v-else-if="isRunning">Time's up!</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

const timeValue = ref(null);
const isRunning = ref(false);
const timeLeft = ref(0);

let countdownInterval = null;
const resetCountdown = () => {
  clearInterval(countdownInterval); // Clear interval
  timeLeft.value = 0; // Reset time
  isRunning.value = false;
};

const startCountdown = () => {
  if (timeValue.value && timeValue.value > 0) {
    timeLeft.value = timeValue.value;
    isRunning.value = true;
    countdownInterval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(countdownInterval); // Stop countdown
        isRunning.value = false;
      }
    }, 1000);
  }else{
    alert('error');
  }
};
</script>

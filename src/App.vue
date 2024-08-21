<script setup lang="ts">
import TimeList from "./components/TimeList.vue";
import TimeCircleSelector from "./components/TimeCircleSelector.vue";
import useCurrentTime from "./composable/useCurrentTime.ts"
import { ref, watchEffect } from "vue";

const PER_TICK_POSITION: number = 40;
const hourFirstPosition = ref<number>(0);
const hourSecondPosition = ref<number>(0);

const minuteFirstPosition = ref<number>(0);
const minuteSecondPosition = ref<number>(0);

const secondFirstPosition = ref<number>(0);
const secondSecondPosition = ref<number>(0);

/**
 * number of times
 */
const listOfHours = {
  firstRow: [0, 1, 2],
  secondRow: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};
const listOfMinutes = {
  firstRow: [0, 1, 2, 3, 4, 5],
  secondRow: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};
const listOfSeconds = {
  firstRow: [0, 1, 2, 3, 4, 5],
  secondRow: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const { currentTime } = useCurrentTime();

/**
 * Setting Hour, Minute and Second Position
 */
watchEffect(() => {
  const paddedHours = String(currentTime.value.getHours()).padStart(2, '0');
  const paddedMinutes = String(currentTime.value.getMinutes()).padStart(2, '0');
  const paddedSeconds = String(currentTime.value.getSeconds()).padStart(2, '0');

  // Hour
  hourFirstPosition.value = Number(paddedHours[0]) * PER_TICK_POSITION;
  hourSecondPosition.value = Number(paddedHours[1]) * PER_TICK_POSITION;

  // Minute
  minuteFirstPosition.value = Number(paddedMinutes[0]) * PER_TICK_POSITION;
  minuteSecondPosition.value = Number(paddedMinutes[1]) * PER_TICK_POSITION;

  // Second
  secondFirstPosition.value = Number(paddedSeconds[0]) * PER_TICK_POSITION;
  secondSecondPosition.value = Number(paddedSeconds[1]) * PER_TICK_POSITION;
})
</script>

<template>
  <div id="analog-wrapper">
    <div class="analog-container">
      <div class="clock-container">
        <div class="clock-item" :style="{ transform: `translateY(-${hourFirstPosition}px)` }">
          <template v-for="hourFirstRow in listOfHours.firstRow" :key="hourFirstRow">
            <TimeList :value="hourFirstRow" />
          </template>
        </div>
        <TimeCircleSelector />
      </div>
      <div class="clock-container">
        <div class="clock-item" :style="{ transform: `translateY(-${hourSecondPosition}px)` }">
          <template v-for="hourSecondRow in listOfHours.secondRow" :key="hourSecondRow">
            <TimeList :value="hourSecondRow" />
          </template>
        </div>
        <TimeCircleSelector />
      </div>
      <div class="clock-container">
        <div class="clock-item" :style="{ transform: `translateY(-${minuteFirstPosition}px)` }">
          <template v-for="minuteFirstRow in listOfMinutes.firstRow" :key="minuteFirstRow">
            <TimeList :value="minuteFirstRow" />
          </template>
        </div>
        <TimeCircleSelector />
      </div>
      <div class="clock-container">
        <div class="clock-item" :style="{ transform: `translateY(-${minuteSecondPosition}px)` }">
          <template v-for="minuteSecondRow in listOfMinutes.secondRow" :key="minuteSecondRow">
            <TimeList :value="minuteSecondRow" />
          </template>
        </div>
        <TimeCircleSelector />
      </div>
      <div class="clock-container">
        <div class="clock-item" :style="{ transform: `translateY(-${secondFirstPosition}px)` }">
          <template v-for="secondFirstRow in listOfSeconds.firstRow" :key="secondFirstRow">
            <TimeList :value="secondFirstRow" />
          </template>
        </div>
        <TimeCircleSelector />
      </div>
      <div class="clock-container">
        <div class="clock-item" :style="{ transform: `translateY(-${secondSecondPosition}px)` }">
          <template v-for="secondSecondRow in listOfSeconds.secondRow" :key="secondSecondRow">
            <TimeList :value="secondSecondRow" />
          </template>
        </div>
        <TimeCircleSelector />
      </div>
    </div>
  </div>
</template>
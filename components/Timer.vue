<template>
    <div class="top-[calc(75%)] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <ul id="countdown" class="flex justify-center items-center gap-4 text-slate-100">
            <li>
                <span class="days block text-4xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ days }}
                </span>
                <p class="timeRefDays text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.days }}
                </p>
            </li>
            <li>
                <span class="hours block text-4xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ hours }}
                </span>
                <p class="timeRefHours text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.hours }}
                </p>
            </li>
            <li>
                <span class="minutes block text-4xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ minutes }}
                </span>
                <p class="timeRefMinutes text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.minutes }}
                </p>
            </li>
            <li>
                <span class="seconds block text-4xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ seconds }}
                </span>
                <p class="timeRefSeconds text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.seconds }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const { countDown } = useCountDown();
let time = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
});
let timeText = {
    days: 'dni',
    hours: 'godzin',
    minutes: 'minut',
    seconds: 'sekund'
};

const days = computed(() => time.value.days);
const hours = computed(() => time.value.hours);
const minutes = computed(() => time.value.minutes);
const seconds = computed(() => time.value.seconds);

let intervalId: number | undefined;

onMounted(startTimer);

function timer() {
    const timeNow = new Date().getTime();
    const timeDifference = countDown.getTime() - timeNow;
    const millisecondsInOneSecond = 1000;
    const millisecondsInOneMinute = millisecondsInOneSecond * 60;
    const millisecondsInOneHour = millisecondsInOneMinute * 60;
    const millisecondsInOneDay = millisecondsInOneHour * 24;

    // Calculate the remaining time
    const days = Math.floor(timeDifference / millisecondsInOneDay);
    const hours = Math.floor((timeDifference % millisecondsInOneDay) / millisecondsInOneHour);
    const minutes = Math.floor((timeDifference % millisecondsInOneHour) / millisecondsInOneMinute);
    const seconds = Math.floor((timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond);

    time.value = { days, hours, minutes, seconds };

    // Clear the interval if the timer has reached zero
    if (time.value.days <= 0 && time.value.hours <= 0 && time.value.minutes <= 0 && time.value.seconds <= 0) {
        clearInterval(intervalId);
    }
}

function startTimer() {
    intervalId = setInterval(timer, 1000) as unknown as number;
}
</script>
<template>
    <div class="timer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <ul id="countdown" class="flex justify-center items-center gap-20 text-slate-200">
            <li>
                <span class="days block text-5xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ time.days }}
                </span>
                <p class="timeRefDays text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.days }}
                </p>
            </li>
            <li>
                <span class="hours block text-5xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ time.hours }}
                </span>
                <p class="timeRefHours text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.hours }}
                </p>
            </li>
            <li>
                <span class="minutes block text-5xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ time.minutes }}
                </span>
                <p class="timeRefMinutes text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.minutes }}
                </p>
            </li>
            <li>
                <span class="seconds block text-5xl font-normal leading-none m-auto mt-0 mb-0 text-center">
                    {{ time.seconds }}
                </span>
                <p class="timeRefSeconds text-xs all-small-caps leading-6 m-auto mt-0 mb-0 text-center relative top-0">
                    {{ timeText.seconds }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Timer',
    data() {
        return {
            countDownToTime: new Date(2024, 8, 14, 15, 30).getTime(),
            time: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            timeText: {
                days: 'dni',
                hours: 'godzin',
                minutes: 'minut',
                seconds: 'sekund'
            },
        };
    },
    computed: {
        days() {
            return this.time.days;
        },
        hours() {
            return this.time.hours;
        },
        minutes() {
            return this.time.minutes;
        },
        seconds() {
            return this.time.seconds;
        }
    },
    mounted: function () {
        this.startTimer();
    },
    methods: {
        timer: function () {
            const timeNow = new Date().getTime();
            const timeDifference = this.countDownToTime - timeNow;
            const millisecondsInOneSecond = 1000;
            const millisecondsInOneMinute = millisecondsInOneSecond * 60;
            const millisecondsInOneHour = millisecondsInOneMinute * 60;
            const millisecondsInOneDay = millisecondsInOneHour * 24;

            // Calculate the remaining time
            const days = Math.floor(timeDifference / millisecondsInOneDay);
            const hours = Math.floor((timeDifference % millisecondsInOneDay) / millisecondsInOneHour);
            const minutes = Math.floor((timeDifference % millisecondsInOneHour) / millisecondsInOneMinute);
            const seconds = Math.floor((timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond);

            this.timeIsUp = true;
            this.time.days = days;
            this.time.hours = hours;
            this.time.minutes = minutes;
            this.time.seconds = seconds;
        },
        startTimer: function () {
            setInterval(() => {
                this.timer();
            }, 1000);
            if (this.time.days <= 0 && this.time.hours <= 0 && this.time.minutes <= 0 && this.time.seconds <= 0) {
                clearInterval(this.timer);
            }
        },
    },
}
</script>
<style scoped>
.timer {
    top: 80%;
}

.timedescription {
    font-size: .75rem;
    font-variant: small-caps;
    line-height: 1.5rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: 0px;
}
</style>
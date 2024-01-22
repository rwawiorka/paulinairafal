<template>
    <div class="timer">
        <ul id="countdown"" class=" text-slate-20">
            <li><span class="days timenumbers">{{ time.days }}</span>
                <p class="timeRefDays timedescription">dni</p>
            </li>
            <li><span class="hours timenumbers">{{ time.hours }}</span>
                <p class="timeRefHours timedescription">godzin</p>
            </li>
            <li><span class="minutes timenumbers">{{ time.minutes }}</span>
                <p class="timeRefMinutes timedescription">minut</p>
            </li>
            <li><span class="seconds timenumbers yellow-text">{{ time.seconds }}</span>
                <p class="timeRefSeconds timedescription">sekund</p>
            </li>
        </ul>
    </div>
</template>

<script>
import party from 'party-js';
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
            timeIsUp: false

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

            if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
                this.timeIsUp = true;
                this.startParty();
            }
            else {
                this.time.days = days;
                this.time.hours = hours;
                this.time.minutes = minutes;
                this.time.seconds = seconds;
            }
        },
        startTimer: function () {
            setInterval(() => {
                this.timer();
            }, 1000);
            if (this.time.days <= 0 && this.time.hours <= 0 && this.time.minutes <= 0 && this.time.seconds <= 0) {
                clearInterval(this.timer);
            }
        },
        startParty: function () {
            party.confetti(document.body, {
                count: party.variation.range(20, 40),
                size: party.variation.range(0.8, 1.2),
            });
        }
    },
}
</script>
<style scoped>
.timer {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
}

#countdown {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    color: #FFF;
}

.timenumbers {
    display: block;
    font-size: 3rem;
    font-weight: 400;
    line-height: 3rem;
    margin: 0 auto;
    text-align: center;
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

.letthemlive {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    font-size: 3rem;
    font-weight: 400;
    line-height: 3rem;
    margin: 0 auto;
    text-align: center;
    color: #FFF;
}
</style>
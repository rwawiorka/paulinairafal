<template>
    <div class="hero">
        <img class="hero-image max-h-screen w-screen min-h-screen" src="/hands.jpg" alt="Hero Image" />
        <div class="hero-text w-full h-full">
            <blockquote class="hero-slogan text-slate-200 text-center w-1/6 text-2xl">
                <sub>
                    <Icon name="material-symbols:format-quote" class="hero-slogan-quote-start" />
                </sub>
                {{ heroSlogan }}
                <sup>
                    <Icon name="material-symbols:format-quote" class="hero-slogan-quote-end" />
                </sup>
            </blockquote>
            <h1 class="hero-title text-8xl font-bold">{{ heroText }}</h1>
            <h2 class="hero-date text-slate-200 text-5xl">{{ heroDate }}</h2>
        </div>
        <Timer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            heroText: "Paulina & Rafał",
            heroSlogan: "Miłość sama w sobie jest nie do pojęcia, ale dzięki miłości możemy pojąć wszystko.",
            heroDate: new Date(2024, 8, 14).toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            countDownToTime: new Date(2024, 8, 14, 15, 30).getTime(),
            time: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        };
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

            // Update the time data property
            this.time.days = days;
            this.time.hours = hours;
            this.time.minutes = minutes;
            this.time.seconds = seconds;
        },
        startTimer: function () {
            // Call the timer method every second
            setInterval(() => {
                this.timer();
            }, 1000);
        }
    }
};
</script>

<style scoped>
.hero-image {
    object-fit: cover;
}

.hero-text {
    position: absolute;
    top: 0;
}

.hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Dancing Script', cursive;
    color: #CFB0EF;
}

.hero-slogan {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Lobster', cursive;
}

.hero-date {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Lobster', cursive;
}

.hero-slogan-quote-end {
    transform: rotate(180deg);
}
</style>

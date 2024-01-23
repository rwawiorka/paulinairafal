<template>
    <div class="hero">
        <NuxtImg v-auto-animate class="hero-image max-h-screen w-screen min-h-screen" format="webp" src="/hands.jpg"
            alt="Hero Image" />
        <div class="hero-text w-full h-full">
            <blockquote class=" hero-slogan text-slate-200 text-center w-1/6 text-2xl">
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
            <h3 class="hero-upload text-slate-200 text-4xl">{{ heroUpload }}</h3>

        </div>
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
            heroUpload: "Podziel się z nami swoimi zdjęciami z naszego ślubu!"
        }
    }
}
</script>

<style scoped lang="scss">
.hero {
    &-image {
        object-fit: cover;
    }

    &-text {
        position: absolute;
        top: 0;
    }

    &-title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Dancing Script', cursive;
        color: #CFB0EF;
    }

    &-slogan {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lobster', cursive;

        &-quote {
            &-end {
                transform: rotate(180deg);
            }
        }
    }

    &-date {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lobster', cursive;
    }

    &-upload {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lobster', cursive;
    }
}
</style>
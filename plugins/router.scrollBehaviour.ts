export default defineNuxtPlugin(async function () {
    if (typeof window !== "undefined") {
        const router = useRouter();

        router.beforeEach((to) => {
            if (to.hash) {
                const targetElement = document.querySelector(to.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    })
                    const p: Promise<boolean> = new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(true);
                        }, 1000)
                    })
                    return p
                }
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
<template>
    <header class="header">
        <div class="header-content">
            <div class="header-menu">
                <ul>
                    <li>
                        <nuxt-link class="road">Jak dojechać?</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="gallery" to="/galeria">Galeria</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="contact" to="/kontakt">Kontakt</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

}

.header-menu ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
</style>
<template>
  <div id="contact"
       class="parallax w-full relative jarallax bg-center bg-no-repeat bg-cover bg-opacity-60 h-[calc(50rem)] md:h-[calc(30rem)] contenair min-h-screen flex justify-center items-center">
    <img :src="imgSrc" alt="Contact background" class="jarallax-img "/>

    <div class="xl:w-1/2 w-full bg-white p-5 xl:rounded-xl rounded-none bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <h3 class="md:text-5xl text-4xl font-cloud text-wedding-800 wedding-text-shadow xl:mb-12 mb-6 text-center">Potwierdź
        przybycie!</h3>
      <div class="flex justify-center items-center text-wedding-800 flex-col xl:flex-row xl:gap-24 gap-4">
        <div class="flex justify-center items-center flex-col xl:gap-4 gap-2">
          <h3 class="font-cloud text-3xl xl:text-5xl">Paulina</h3>
          <a class="xl:text-3xl text-2xl" href="tel:+48516724984">516 724 984</a>
        </div>
        <div class="flex justify-center items-center flex-col xl:gap-4 gap-2">
          <h3 class="font-cloud text-3xl xl:text-5xl">Rafał</h3>
          <a class="xl:text-3xl text-2xl whitespace-nowrap" href="tel:+48721816809">721 816 809</a>
        </div>
      </div>
      <div class="flex justify-center items-center text-wedding-800 flex-col gap-8">
        <h3 class="md:text-5xl text-4xl font-cloud text-wedding-800 xl:mt-12 mt-6 wedding-text-shadow text-center">lub
          skorzystaj z formularza</h3>
        <div class="flex justify-center items-center text-wedding-800 flex-col xl:flex-row xl:gap-8 gap-4 w-full">
          <form ref="form" class="max-w-md mx-auto w-full xl:w-1/2" @submit.prevent="sendEmail">
            <div class="relative z-0 w-full mb-5 group">
              <input id="floating_email"
                     v-model="name"
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                     name="user_name"
                     placeholder="" required type="text"/>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="user_name">Imię
                i nazwisko</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input id="email"
                     v-model="email"
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                     name="user_email"
                     placeholder=" " required type="email"/>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="user_email">Adres
                e-mail</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input id="floating_repeat_password"
                     v-model="guests"
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                     name="guests"
                     placeholder=" " required type="text"/>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="guests">Liczba
                gości</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <textarea id="floating_first_name" v-model="textArea"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                          name="message"
                          placeholder="" required rows="4"></textarea>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="message">Podaj imiona i nazwiska gości</label>
            </div>
            <div class="flex justify-center items-center w-full">
              <button
                  class="text-white flex align-center justify-center bg-wedding-300 hover:bg-wedding-500 focus:ring-4 focus:outline-none focus:ring-wedding-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-wedding-600 dark:hover:bg-wedding-500 dark:focus:ring-wedding-400"
                  type="submit">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import emailjs from '@emailjs/browser';

const form = ref(null);

const imgSrc = '/form.png';

const sendEmail = () => {
  const config = useRuntimeConfig();
  emailjs
      .sendForm(config.public.EMAIL_SERVICE_ID, config.public.EMAIL_TEMPLATE_ID, form.value, {
        publicKey: config.public.EMAIL_PUBLIC_KEY,
      })
      .then(
          () => {
            alert('Dziękujemy za potwierdzenie przybycia!');
          },
          (error) => {
            alert('Coś poszło nie tak :( Spróbuj ponownie');
          }
      );
};
</script>

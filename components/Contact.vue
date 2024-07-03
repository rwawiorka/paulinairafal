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
          <form class="max-w-md mx-auto w-full xl:w-1/2" @submit.prevent="sendMail">
            <div class="relative z-0 w-full mb-5 group">
              <input id="floating_email"
                     v-model="name"
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                     name="floating_email"
                     placeholder="" required type="text"/>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="floating_email">Imię
                i nazwisko</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input id="floating_password"
                     v-model="email"
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                     name="floating_password"
                     placeholder=" " required type="email"/>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="floating_password">Adres
                e-mail</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input id="floating_repeat_password"
                     v-model="guests"
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                     name="repeat_password"
                     placeholder=" " required type="text"/>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="floating_repeat_password">Liczba
                gości</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <textarea id="floating_first_name" v-model="textArea"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-wedding-300 focus:outline-none focus:ring-0 focus:border-wedding-600 peer"
                          name="floating_first_name"
                          placeholder=" " required rows="4"></textarea>
              <label
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-wedding-300 peer-focus:dark:text-wedding-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  for="floating_first_name">Wiadomość</label>
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
const imgSrc = '/form.png';

import {ref} from 'vue';
import sgMail from '@sendgrid/mail';

const name = ref('');
const email = ref('');
const guests = ref('');
const textArea = ref('');

const sendMail = async (event) => {
  event.preventDefault();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'rafal.wawiorka@gmail.com',
    from: 'rafal.wawiorka@gmail.com',
    subject: `Potwierdzenie obecności od ${name.value}`,
    text: `Imię i nazwisko: ${name.value}\nEmail: ${email.value}\nLiczba gości: ${guests.value}\nWiadomość: ${textArea.value}`,
  };

  try {
    await sgMail.send(msg);
    alert('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email.');
  }
};
</script>
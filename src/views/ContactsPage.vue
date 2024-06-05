<template>
  <main>
    <ContactsBanner />

    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <h2 class="title mt-5">Tell us about your tastes</h2>
            <img
              class="beanslogo mt-5"
              :src="logo"
              alt="Beans logo"
            />

            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ContactsBanner from '@/components/Contacts/ContactsBanner.vue';
import ContactsForm from '@/components/Contacts/ContactsForm.vue';
import logo from '@/assets/logo/beans-dark.svg';
</script>

<template>
  <form action="#" class="mt-5" @submit.prevent="onSubmit">
    <BaseInput id="name-input" v-model="v$.name" required>Name</BaseInput>
    <BaseInput id="email-input" v-model="v$.email" type="email" required>E-mail</BaseInput>
    <BaseInput id="phone-input" v-model="v$.phone" type="tel">Phone</BaseInput>
    <BaseTextarea id="message" v-model="v$.message" placeholder="Leave your comments here" name="message" required>Your
      message</BaseTextarea>
    <BaseCheckbox id="checkbox" name="checkbox" v-model="v$.checkbox">Согласен с договором оферты</BaseCheckbox>

    <div class="row">
      <div class="col">
        <button class="btn btn-outline-dark send-btn">Send us</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import BaseInput from '@/components/UI/BaseInput.vue';
import BaseTextarea from '@/components/UI/BaseTextarea.vue';
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength, helpers } from '@vuelidate/validators';
import { minLength } from '@/validators/minLength';
import { isChecked } from '@/validators/isChecked';

const state = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  checkbox: true,
})

const validations = {
  name: { required },
  email: { required, email },
  phone: {},
  message: {
    required,
    maxLength: maxLength(20),
    minLength: helpers.withMessage(
      "This value length must be at least 5 symbols",
      minLength
    ),
  },
  checkbox: {
    isChecked: helpers.withMessage("Must be checked", isChecked),
  },
};

const v$ = useVuelidate(validations, state);

const onSubmit = async (e) => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  // fetch("http://localhost:3000/contacts", {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(state)
  // });

  e.target.reset()
};
</script>

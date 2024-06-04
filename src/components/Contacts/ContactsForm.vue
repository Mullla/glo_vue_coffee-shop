<template>
  <form action="#" class="mt-5" @submit.prevent="onSubmit">
    <div class="form-group row">
      <div class="col col-12 col-sm-3 d-flex align-items-start">
        <label for="name-input" class="mb-0">
          Name
          <span style="color: red">*</span>
        </label>
      </div>
      <div class="col col-12 col-sm-9">
        <input type="text" class="form-control" id="name-input" v-model.trim="v$.name.$model" />
        <span :class="$style.error" v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
      </div>
    </div>

    <div class="form-group row">
      <div class="col col-12 col-sm-3 d-flex align-items-start">
        <label for="email-input" class="mb-0">
          E-mail
          <span style="color: red">*</span>
        </label>
      </div>
      <div class="col col-12 col-sm-9">
        <input type="email" class="form-control" id="email-input" v-model.trim="v$.email.$model" />
        <span :class="$style.error" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
      </div>
    </div>

    <div class="form-group row">
      <div class="col col-12 col-sm-3 d-flex align-items-start">
        <label for="phone-input" class="mb-0">Phone</label>
      </div>
      <div class="col col-12 col-sm-9">
        <input type="tel" class="form-control" id="phone-input" v-model.trim="v$.phone.$model" />
      </div>
    </div>

    <div class="form-group row textarea">
      <div class="col col-12 d-flex justify-content-center">
        <label for="pmessage" class="mb-3 mt-3 text-center">
          Your message
          <span style="color: red">*</span>
        </label>
      </div>
      <div class="col col-12">
        <textarea class="form-control" name="message" id="message" rows="5" placeholder="Leave your comments here"
          v-model.trim="v$.message.$model"></textarea>
        <span :class="$style.error" v-for="error in v$.message.$errors" :key="error.$uid">{{ error.$message }}</span>
      </div>
    </div>

    <div class="form-group row">
      <div class="col col-12 d-flex justify-content-center">
        <label for="checkbox" class="mb-3 mt-3 text-center">
          <input type="checkbox" name="checkbox" id="checkbox" v-model="v$.checkbox.$model" />
          Согласен с договором оферты
        </label>
      </div>
      <div class="col col-12 d-flex justify-content-center">
        <span :class="$style.error" v-for="error in v$.checkbox.$errors" :key="error.$uid">{{ error.$message }}</span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <button class="btn btn-outline-dark send-btn">Send us</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
// import { required, email, maxLength, helpers } from "@vuelidate/validators";
// import { minLength } from "@/validators/minLength";
// import { isChecked } from "@/validators/isChecked";

const v$ = useVuelidate();

// data() {
//   return {
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     checkbox: true,
//   };
// },

const onSubmit = async (e) => {
    const isFormCorrect = await this.v$.$validate();
    if (!isFormCorrect) return;

    // const notice = {
    //   name: this.name,
    //   email: this.email,
    //   phone: this.phone,
    //   message: this.message,
    // };

    // fetch("http://localhost:3000/contacts", {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(notice)
    // });

    e.target.reset()
  }


// const validations = () => {
//   return {
//     name: { required },
//     email: { required, email },
//     phone: {},
//     message: {
//       required,
//       maxLength: maxLength(20),
//       minLength: helpers.withMessage(
//         "This value length must be at least 5 symbols",
//         minLength
//       ),
//     },
//     checkbox: {
//       isChecked: helpers.withMessage("Must be checked", isChecked),
//     },
//   };
// };
</script>

<style module lang="scss">
.error {
  color: crimson;
}
</style>

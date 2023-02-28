<script setup>
import { reactive, ref } from "vue";
import { preview } from "../assets";
import Loader from "../components/Loader.vue";

const form = reactive({
  name: "",
  prompt: "",
  photo: "",
});

const loading = ref(false);
const generatingImg = ref(false);
</script>

<template>
  <section class="create-page">
    <div class="home-title">
      <h1>Create</h1>
      <p>
        Generate imaginative image through DALL-E AI ad share it with hte
        Community
      </p>
    </div>
    <form action="">
      <div class="flex">
        <div class="input-wrapper">
          <div class="label-container">
            <label for="name">Your Name</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name.."
            v-model="form.name"
            required
          />
        </div>
        <div class="input-wrapper">
          <div class="label-container">
            <label for="prompt">Prompt</label>
            <button type="button">Surprise Me</button>
          </div>
          <input
            type="text"
            id="prompt"
            name="prompt"
            placeholder="Your prompt.."
            v-model="form.prompt"
            required
          />
        </div>
        <div class="img-preview flex justify-center items-center">
          <img
            :src="form.photo"
            v-if="form.photo"
            alt="form.prompt"
            class="img"
          />
          <img :src="preview" v-else alt="Preview" class="preview" />
          <div v-if="loading" class="load flex justify-center items-center">
            <Loader />
          </div>
        </div>
        <div class="generate-btn flex">
          <button type="button">
            {{ generatingImg ? "Generating.." : "Generate" }}
          </button>
        </div>
        <div class="sharing-btn">
          <p>
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <button type="submit">
            {{ loading ? "Sharing.." : "Share with the community" }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

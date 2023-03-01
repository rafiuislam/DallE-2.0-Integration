<script setup>
import { reactive, ref } from "vue";
import { preview } from "../assets";
import Loader from "../components/Loader.vue";
import { getRandomPrompts } from "../utils/prompt";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  prompt: "",
  photo: "",
});

const loading = ref(false);
const generatingImg = ref(false);

const generatePrompts = () => {
  const randomPrompts = getRandomPrompts("");
  form.prompt = randomPrompts;
};

const generateImage = async () => {
  if (form.prompt) {
    try {
      generatingImg.value = true;
      const response = await fetch("http://localhost:8000/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: form.prompt,
        }),
      });
      const data = await response.json();
      form.photo = `data:image/jpeg;base64,${data.photo}`;
    } catch (error) {
      alert(error);
    } finally {
      generatingImg.value = false;
    }
  }
};

const handleSubmit = async () => {
  if (form.prompt && form.photo) {
    try {
      loading.value = true;
      const response = await fetch("http://localhost:8000/api/v1/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          prompt: form.prompt,
          photo: form.photo,
        }),
      });
      await response.json();
      router.push({ name: "Home" });
    } catch (error) {
      alert(error);
    } finally {
      loading.value = false;
    }
  }
};
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
    <form action="" @submit.prevent="handleSubmit">
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
            <button type="button" @click="generatePrompts">Surprise Me</button>
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
          <div
            v-if="generatingImg"
            class="load flex justify-center items-center"
          >
            <Loader />
          </div>
        </div>
        <div class="generate-btn flex">
          <button type="button" @click="generateImage">
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

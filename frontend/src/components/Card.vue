<script setup>
import { download } from "../assets";
import FileSaver from "file-saver";

async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

defineProps({
  post: {
    type: Object,
  },
});
</script>

<template>
  <div class="card">
    <img
      :src="post.photo"
      :alt="post.prompt"
      class="w-full h-auto object-cover rounded-xl"
    />
    <div class="card-details">
      <p class="prompt">
        {{ post.prompt }}
      </p>
      <div class="prompt-details">
        <div class="flex items-center gap-2">
          <div class="name flex items-center justify-center">
            {{ post.name[0] }}
          </div>
          <p>{{ post.name }}</p>
        </div>
        <button @click="downloadImage(post._id, post.photo)">
          <img :src="download" alt="downloadImg" />
        </button>
      </div>
    </div>
  </div>
</template>

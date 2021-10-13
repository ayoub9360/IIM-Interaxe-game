<template>
  <div class="login">
    <iframe
      src="https://www.google.com/maps/embed?pb=!4v1634143988030!6m8!1m7!1sw-oYc14t-WkDue8XpmjwYQ!2m2!1d48.89576528680919!2d2.236977564243006!3f273.8845374819304!4f-2.8543190076548655!5f0.7820865974627469"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  width: 100%;
  height: 100%;
}
iframe {
  flex-grow: 1;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 0 0 8px 8px;
}
</style>
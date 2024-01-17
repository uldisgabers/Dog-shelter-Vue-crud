<template>
  <div class="wrapper">
    <div class="info">
      <div>
        <h4>More info</h4>
        <p>Links</p>
        <p>Dog shelters</p>
        <p>Owners</p>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>Email</p>
        <p>Phone</p>
        <p>Adress</p>
      </div>
      <div>
        <h4>Follow</h4>
        <p>YouTube</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  background-color: rgb(130, 184, 130);
  padding: 2rem;
  margin-top: 1rem;
}
.info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 800px;
  margin: 0 auto;
}
</style>

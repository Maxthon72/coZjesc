<template>
    <div class="homepage">
      <h1>Welcome to the Homepage</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
    data() {
      return {
        message: "",
      };
    },
    mounted() {
      // Fetch data from backend
      fetch("http://127.0.0.1:8000/")
        .then((response) => response.json())
        .then((data) => {
          this.message = data.message;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  };
  </script>
  
  <style scoped>
  .homepage {
    text-align: center;
    margin: 50px;
  }
  </style>
  
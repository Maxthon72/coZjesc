<template>
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {{ username }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage",
    data() {
      return {
        username: "John Doe", // Na razie statyczne, później można pobrać z backendu
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  </style>
  
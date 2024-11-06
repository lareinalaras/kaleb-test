<template>
  <div class="summary-container">
    <h1>Summary of Your Input</h1>
    <div class="summary-content">
      <div v-for="(value, key) in summaryData" :key="key" class="summary-item">
        <p>
          <strong>{{ key }}:</strong> {{ value }}
        </p>
      </div>
    </div>
    <button @click="$router.push('/step1')" class="submit-again-button">
      Submit Another Response
    </button>
  </div>
</template>

<script>
export default {
  name: "SummaryData",
  data() {
    return {
      summaryData: {},
    };
  },
  mounted() {
    const step1Data = JSON.parse(localStorage.getItem("step1Data")) || {};
    const step2Data = JSON.parse(localStorage.getItem("step2Data")) || {};

    this.summaryData = { ...step1Data, ...step2Data };
  },
};
</script>

<style>
.summary-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: black;
}

.submit-again-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #008cba;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

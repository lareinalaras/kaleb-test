<template>
  <div class="form-container">
    <div v-if="!formSubmitted">
      <h3>{{ datas.title }}</h3>
      <h5>{{ datas.description }}</h5>

      <form @submit.prevent="submitForm" class="form">
        <div
          v-for="(field, index) in datas.fields"
          :key="index"
          class="form-group"
        >
          <div v-if="field.type === 'textarea'">
            <label :for="field.label">{{ field.label }}</label>
            <textarea
              :placeholder="field.placeholder"
              v-model="formData[field.label]"
              :required="field.required"
            />
          </div>

          <div v-if="field.type === 'autocomplete'" class="form-group">
            <label :for="field.label">{{ field.label }}</label>
            <input
              list="autocomplete-options"
              :placeholder="field.placeholder"
              v-model="formData[field.label]"
              :required="field.required"
              class="autocomplete-input"
            />
            <datalist id="autocomplete-options">
              <option
                v-for="(option, idx) in field.options"
                :key="idx"
                :value="option"
              />
            </datalist>
          </div>
        </div>

        <div class="button-group">
          <button @click="$router.push('/step1')" class="nav-button">
            Previous
          </button>
          <button type="submit" class="submit-button-step2">Submit</button>
        </div>
      </form>
    </div>

    <div v-else class="confirmation">
      <h1>Form Submitted Successfully</h1>
      <p>Your data has been submitted successfully!</p>
      <button @click="$router.push('/step1')" class="nav-button">
        Submit Again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step-2",
  data() {
    return {
      datas: {},
      formData: {},
      formSubmitted: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("response.json")
        .then((response) => response.json())
        .then((data) => {
          this.datas = data[1];
          this.datas.fields.forEach((field) => {
            this.$set(this.formData, field.label, "");
          });
        })
        .catch((error) => console.log(error));
    },
    submitForm() {
      localStorage.setItem("step2Data", JSON.stringify(this.formData));
      this.$router.push("/summary");
    },
  },
};
</script>

<style>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

h3,
h5 {
  margin: 0;
  padding: 5px 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group textarea {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.submit-button-step2 {
  padding: 10px 20px;
  font-size: 14px;
  width: 48%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.nav-button {
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  width: 48%;
  cursor: pointer;
}

.nav-button {
  background-color: #008cba;
}

.autocomplete-input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


</style>

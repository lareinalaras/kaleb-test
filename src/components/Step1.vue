<template>
  <div class="form-container">
    <h3>{{ datas.title }}</h3>
    <h5>{{ datas.description }}</h5>

    <form @submit.prevent="submitStep1" class="form">
      <div
        v-for="(field, index) in datas.fields"
        :key="index"
        class="form-group"
      >
        <div v-if="field.type === 'textfield'">
          <label :for="field.label">{{ field.label }}</label>
          <input
            :placeholder="field.placeholder"
            v-model="formData.Name"
            :required="field.required"
            type="text"
          />
        </div>

        <div v-if="field.type === 'radio'">
          <label>{{ field.label }}</label>
          <div class="radio-group">
            <div
              v-for="(option, idx) in field.options"
              :key="idx"
              class="radio-option"
            >
              <input
                v-model="formData.Gender"
                required
                type="radio"
                :id="option.value"
                :name="field.label"
                :value="option.value"
              />
              <label :for="option.value">{{ option.label }}</label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="submit-button-step1">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Step-1",
  data() {
    return {
      formData: {
        Name: "",
        Gender: "",
      },
      datas: {
        title: "Personal Information",
        description: "Please fill out your personal information",
        fields: [
          {
            type: "textfield",
            label: "Name",
            placeholder: "Enter your name",
            required: true,
          },
          {
            type: "radio",
            label: "Gender",
            options: [
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ],
            required: true,
          },
        ],
      },
    };
  },
  methods: {
    submitStep1() {
      console.log("Form data:", this.formData);
      this.$router.push("/step2");
    },
  },
};
</script>

<style>
.form-container {
  max-width: 500px;
  margin: auto;
  padding: 20px 10px;
}

h3,
h5 {
  margin: 0;
  padding: 5px 0;
}

.form {
  margin-top: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input[type="text"] {
  width: 95%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-group {
  display: flex;
  gap: 10px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 5px;
}

.submit-button-step1 {
  padding: 10px 20px;
  font-size: 14px;
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

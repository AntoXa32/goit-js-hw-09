document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: '',
  };

  function updateFormData() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  form.querySelector("input[name='email']").value = formData.email;
  form.querySelector("textarea[name='message']").value = formData.message;

  form.addEventListener('input', function (event) {
    if (event.target.matches("input[name='email']")) {
      formData.email = event.target.value;
    } else if (event.target.matches("textarea[name='message']")) {
      formData.message = event.target.value;
    }

    updateFormData();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (
      !form.querySelector("input[name='email']").value ||
      !form.querySelector("textarea[name='message']").value
    ) {
      alert('Please fill all fields');
      return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    form.reset();
    formData.email = '';
    formData.message = '';
    updateFormData();
  });
});

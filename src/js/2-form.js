let formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', function (event) {
    if (event.target.matches("input[name='email']")) {
      formData.email = event.target.value;
    } else if (event.target.matches("textarea[name='message']")) {
      formData.message = event.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedFormData) {
    form.querySelector("input[name='email']").value = savedFormData.email;
    form.querySelector("textarea[name='message']").value =
      savedFormData.message;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';

    form.reset();
  });
});

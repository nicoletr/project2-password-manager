const generatePassword = require("../../utils/generatePassword");

const newFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('new-username').value.trim();
  const password = document.getElementById('new-password').value.trim();
  const application_name = document.getElementById('new-app-name').value.trim();
  const web_address = document.getElementById('new-web-address').value.trim();

  if (username && password && application_name && web_address) {
    const response = await fetch('/api/apps', {
      method: 'POST',
      body: JSON.stringify({ username, password, application_name, web_address }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      alert('New app added succesfully!');
      document.location.replace('/');
    } else {
      alert('Failed to create app');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/apps/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('App deleted succesfully!');
      document.location.replace('/');
    } else {
      alert('Failed to delete app');
    }
  }
};

document
  .querySelector('.new-app-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#app-delete')
  .addEventListener('click', delButtonHandler);

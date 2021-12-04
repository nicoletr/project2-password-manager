const newFormHandler = async (event) => {
    event.preventDefault();

    const appName = document.querySelector('#new-app-name').value.trim();
    const webAddy = document.querySelector('#new-web-addy').value.trim();
    const userName = document.querySelector('#new-user-name').value.trim();
    const pass = document.querySelector('#new-password').value.trim();

  
    if (appName && webAddy && userName && pass) {
      const response = await fetch(`/api/apps`, {
        method: 'POST',
        body: JSON.stringify({ appName, webAddy, userName, pass }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/newapp');
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
        document.location.replace('/newapp');
      } else {
        alert('Failed to delete app');
      }
    }
  };
  
  document
    .querySelector('.new-app-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.app-list')
    .addEventListener('click', delButtonHandler);
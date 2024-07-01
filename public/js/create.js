const createFormHandler = async (event) => {
  event.preventDefault();

  const blogName = document.querySelector('#blogName');
  const blogStory = document.querySelector('#blogStory');

  if (blogName && blogStory) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({
        title: blogName.value,
        content: blogStory.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector('#tech-form')
  .addEventListener('submit', createFormHandler);
// Init GitHub
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const SearcUser = document.getElementById('searchUser');

// Search input Event listener
SearcUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
        
      })
    
  } else {
    // Clear profile

  }
})
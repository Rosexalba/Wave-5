//  Step 1: Create an empty array to store songs.
// Each song will be an object with { title, artist, mood, link }
//  Declare a variable named "playlist" and set it to an empty array
// 🧪 Console log to confirm the playlist is initialized as an empty array
 const playlist = [];
 console.log("playlist array:", playlist);
//  Step 2: Get references to all the DOM elements (HTML elements we interact with)
//  Use document.getElementById() to store references to:
// - title input        → id="title"
// - artist input       → id="artist"
// - link input         → id="link"
// - mood dropdown      → id="mood"
// - form               → id="songForm"
// - playlist container → id="playlist"
// - filter dropdown    → id="filterMood"
// - shuffle button     → id="shuffleBtn"
// - dark mode button   → id="toggleModeBtn"
//  Console log to confirm all DOM elements were successfully selected

     const titleInput = document.getElementById("title");
     const artistInput = document.getElementById("artist");
     const linkInput = document.getElementById("link");
     const moodDropdown = document.getElementById("mood");
     const form = document.getElementById("songForm");
     const playlistContainer = document.getElementById("playlist");
     const filterDropdown = document.getElementById("filterMood");
     const shuffleBtn = document.getElementById("ShuffleBtn");
     const darkBtn = document.getElementById("toggleModeBtn");
     
     console.log("DOM Elements:", {
      titleInput,
      artistInput,
      linkInput,
      moodDropdown,
      form,
      playlistContainer,
      filterDropdown,
      shuffleBtn,
      darkBtn
     });

// Step 3: Function to load the playlist from localStorage
//  Define a function called loadPlaylist()
// Inside the function:
// - Use localStorage.getItem("customPlaylist") to get the saved data
// - If there is data, parse it using JSON.parse()
// - Then update the playlist array with the parsed data
//  Console log to show the playlist loaded from localStorage
//  Console log to show that no playlist data was found (if none exists)
      function loadPlaylist() {
        const savedData = localStorage.getItem("customPlaylist"); // gets saved data from local storage
        if (savedData) {                                   // if theres saved data in the  variable string savedData
          const parsedData = JSON.parse(savedData);       // parse it into json.parse turns the string back into javascript object or array
          playlist.push(...parsedData);          //... is the spread operator it seperates the items within an array so that each item is passed seperately // push() add new item to the end of a list (array) 
          console.log("Stored Playlist:", playlist);
        } else {                                 // if not playlist is stored in localStorage then show console message.
          console.log("No Playlist Found.");
        }
      }
//  Step 4: Function to save the playlist into localStorage
//  Define a function called savePlaylist()
// Inside the function:
// - Use JSON.stringify() to convert the playlist array to a string
// - Use localStorage.setItem() to save it with the key "customPlaylist"
//  Console log to confirm playlist was saved to localStorage
     function savePlaylist() {
      const playlistString = JSON.stringify(playlist);
      localStorage.setItem("customPlaylist", playlistString);
      console.log("Playlist Saved:", playlist);
     }

//  Step 5: Function to render the songs onto the screen
//  Define a function called renderPlaylist(songsToRender)
// Inside the function:
// - First, clear the playlist container using innerHTML = ""
// - Use forEach to loop through each song and do the following:

//  1. Create a new div using document.createElement("div")
//  2. Give it a class of "song-card" using classList.add()
//  3. Set its innerHTML using a template literal:
/*
  <strong>${song.title}</strong><br>
  <em>Artist:</em> ${song.artist}<br>
  <em>Mood:</em> ${song.mood}<br>
  <a href="${song.link}" target="_blank">🎧 Listen</a><br>
  <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
*/
      function renderPlaylist(songsToRender) {
      playlistContainer.innerHTML = "";      // clearing playlistContainer
      songsToRender.forEach((song, index) => {  // loop through each song and  // song is the current object and index is the position of the array -were asking for song data and index number
      const songDiv = document.createElement("div");
      songDiv.classList.add("song-card");
      songDiv.innerHTML = `
        <strong>${song.title}</strong><br>
        <em>Artist:</em> ${song.artist}<br>
        <em>Mood:</em> ${song.mood}<br>
        <a href="${song.link}" target="_blank">🎧 Listen</a><br>
        <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
      `;

// 🔹 4. Append the new div to the playlist container
// 🧪 Console log to show which songs are being rendered
      playlistContainer.appendChild(songDiv);
      console.log(`Rendered song: ${song.title} by ${song.artist}`);

      });
    };

// 🧹 Then, after the forEach loop:
// - Use document.querySelectorAll(".delete-btn") to get all delete buttons
// - Loop through them and add a click event listener to each:
//    → Get the song index from data-index
//    → Remove the song from the playlist array using splice()
//    → Save and re-render the playlist again
// 🧪 Console log to confirm a song was deleted and show its index
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const songIndex = parseInt(btn.getAttribute("data-index"));
        playlist.splice(songIndex, 1);
        savePlaylist();
        renderPlaylist(playlist);
        console.log(`Deleted song index: ${songIndex}`);
      });
    });


// ➕ Step 6: Function to handle adding a new song
// 👉 Define a function called addSong(e)
// Inside the function:
// - Use e.preventDefault() to stop the form from refreshing
// - Create a new object with title, artist, mood, and link
// - Push it into the playlist array
// - Save the playlist
// - Call renderPlaylist(playlist)
// - Use songForm.reset() to clear the form
// 🧪 Console log to confirm a new song was added
     function addSong(e) {
      e.preventDefault();

      const newSong = {
        title: titleInput.value,
        artist: artistInput.value,
        mood: moodDropdown.value,
        link: linkInput.value
      };

      playlist.push(newSong);
      savePlaylist();
      renderPlaylist(playlist);
      form.reset();
      console.log("New Song Added:", newSong);
      }

// 🎯 Step 7: Filter playlist by mood
// 👉 Define a function called filterPlaylist()
// Inside the function:
// - Get the selected value from filterMoodSelect
// - If it’s "all", call renderPlaylist(playlist)
// - Otherwise, use .filter() to get only songs that match the mood
// - Then call renderPlaylist(filtered)
// 🧪 Console log to show which mood was selected for filtering
// 🧪 Console log to show filtered results
     function filterPlaylist() {
      const selectMood = filterDropdown.value;

      if (selectMood === "All") {
        renderPlaylist(playlist);
        console.log("Select Mode: All")
      } else { 
       const filteredSongs = playlist.filter(song => song.mood=== selectMood); //.filter is built in array method it creates a new array depending on the condition // song - arrow - song.mode === selectedMood: is an arrow function song: each song object in the playlist array. sond.mode === selectMood: the condition were checking - only songs where song.mode matches are kept 
       renderPlaylist(filteredSongs);                                             // filteredSongs is now the new array 
       console.log(`Select Mode: Filter Category: "${selectMood}"`, filteredSongs);
      }
     };

// 🔀 Step 8: Shuffle the playlist using Fisher-Yates algorithm
// 👉 Define a function called shufflePlaylist()
// Inside the function:
// - Loop from the end of the array to the beginning (i = length - 1; i > 0; i--)
// - Create a random index j: Math.floor(Math.random() * (i + 1))
// - Swap playlist[i] and playlist[j] using destructuring
// - After the loop, save and render the playlist again
// 🧪 Console log to confirm the playlist was shuffled
    function shufflePlaylist () {
       for(let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist [i]]; // swapping two items in an array : Destructuring - we use it when shuffling an array making the result a random array (list)
       }

       savePlaylist();
       renderPlaylist(playlist);
       console.log("shuffled the playlist.");
    };

// 🌙 Step 9: Toggle between Dark Mode and Light Mode
// 👉 Define a function called toggleDarkMode()
// Inside the function:
// - Use classList.toggle("dark") on the body
// - Use contains("dark") to check if dark mode is active
// - Update toggle button text accordingly ("Light Mode" or "Dark Mode")
// - Save the theme preference in localStorage (key = "theme")
// 🧪 Console log to confirm dark mode toggle state
    function toggleDarkMode() {
      document.body.classList.toggle("dark");

      const darkModeOn = document.body.classList.contains("dark");
      darkBtn.textContent = darkModeOn ? "Dark Mode" : "Light Mode";
      localStorage.setItem("theme", darkModeOn ? "Dark Mode On" : "Light Mode On");
      console.log(`dark mode toggled: ${darkModeOn ? "ON" : "OFF"}`);
    }

// 💡 Step 10: Load the saved theme from localStorage
// 👉 Define a function called loadTheme()
// Inside the function:
// - Use getItem("theme") from localStorage
// - If it’s "dark", add the "dark" class to body and update toggle button text
// 🧪 Console log to confirm dark theme was loaded
// 🧪 Console log to confirm light/default theme
     function loadTheme() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
        darkBtn.textContent = "Dark Mode";
        console.log("Dark theme loading successful");
      } else {
        console.log("Loading unsuccesful: light/default theme activated");
      }
     };

// 🎯 Step 11: Add event listeners to buttons and form
// 👉 Add the following event listeners:
// - songForm "submit" → addSong
// - filterMoodSelect "change" → filterPlaylist
// - shuffleBtn "click" → shufflePlaylist
// - toggleModeBtn "click" → toggleDarkMode
// 🧪 Console log to confirm all event listeners were attached
    form.addEventListener("submit", addSong);
    filterDropdown.addEventListener("change", filterPlaylist);
    shuffleBtn.addEventListener("click", shufflePlaylist);
    darkBtn.addEventListener("click", toggleDarkMode);

    console.log("Active Buttons: Event listeners attached");

// 🚀 Step 12: Initialize the app
// 👉 Call the following functions:
// - loadPlaylist()
// - renderPlaylist(playlist)
// - loadTheme()
// 🧪 Console log to confirm the app has been initialized

loadPlaylist();
renderPlaylist(playlist);
loadTheme();
console.log("App initialized succesfully");

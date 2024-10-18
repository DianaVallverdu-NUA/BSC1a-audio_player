# Audio Player Workshop

In this workshop we built and Audio Player from scratch. Here you can find [a reference of the properties, functions and events](#the-htmlelement-audio-object) used for the task, as well as a [step by step guide](#step-by-step) for you to follow along if you missed it.

## The HTMLElement Audio Object

In JavaScript, you can create a new HTMLAudioElement like so:

```JavaScript
const audioPlayer = new Audio();
```

Properties, functions and events can be modified with the usual syntax:

```JavaScript
// access a property
audioPlayer.property;

// modify a property
audioPlayer.property = newValue;

// acces a function
audioPlayer.function();

// set an event
function customFunction() {
  //code to be executed when the event fires
}
audioPlayer.oneventname = customFunction();
```

### Properties

```JavaScript
audioPlayer.src
```

the `src` property contains a string with the source of the sound associated with the `audioPlayer`. It can be modified with a string value.

```JavaScript
audioPlayer.volume
```

The `volume` property contains the current volume of the `audioPlayer`. It can be modified with a value from 0 (0%) to 1 (100%).

```JavaScript
audioPlayer.duration
```

The duration property contains the duration of the audio sound associated with the `audioPlayer`. If no sound is associated, the duration is set to 0.

```JavaScript
audioPlayer.currentTime
```

the `currentTime` property contains the current time of the song playing. It can be modified with a value from 0 to `audioPlayer.duration`.

### Functions

```JavaScript
audioPlayer.play()
```

The `play` function plays the audio stored at `src` from the time stored at `currentTime` on. If no audio is found, this function will throw an Error.

```JavaScript
audioPlayer.pause()
```

The `pause` function pauses the `audioPlayer`. If the player is not currently playing, nothing happens.

### Events

```JavaScript
audioPlayer.onloadedmetadata
```

The Event `onloadedmetadata` is fired once every time the `src` property of the `audioPlayer` is changed. It signals that the `audioPlayer` meta data - such as `duration` - have been loaded.

```JavaScript
audioPlayer.ontimeupdate
```

The `ontimeupdate` event is fired every time there is an update to the `currentTime` variable. Updates can happen automatically - as the song plays - or manually - by updating the value of the property `currentTime`.

```JavaScript
audioPlayer.onended
```

The Event `onended` is fired when the song ends playing - when `currentTime` is equal to `duration`.

## Step by Step

### Creating the environment

1. Create a new GitHub repository and name it something significant, such as "JS Audio Player".

2. Clone the repository to your local machine.

3. Find a song and download it as an mp3 using [a converter of your convenience](https://ezmp3.cc/). Save the file in a folder `assets/sound` in your repository.

**Note:** This is not illegal as we are not going to monetize this website. However, as a general rule, you would need to purchase rights if the website is going to be monetized in any way.

4. Find a cover image that represents that song and download it. Save the file in a folder `assets/cover` in your repository.

### Building the HTML

1. Build the `HTML` of the website.

You can find a [complete diagram of the HTML here](https://miro.com/app/board/uXjVLSa-fb4=/?moveToWidget=3458764603458169612&cot=14). If you wish to do it in a more itemized way, you can also look at the schematics on the left hand side of the frame.

2. Create a `style.css` file, link it to your HTML file using the `<link>` tag, and add styles as desired. You can also do this at the end.

### Script.js skeleton

1. Create a new `script.js` file.

2. Link it to the HTML using the `<script>` tag.

3. At the top, create a new audio player object with the following command:

```JavaScript
const audioPlayer = new Audio();
```

The `Audio` object comes with a series of built in `properties`, `functions` and `events`. You can refer back to the [reference list](#the-htmlelement-audio-object) to see which ones will be used today.

4. Update the `src` property of the audio player to point at the sound you have downloaded.

```JavaScript
audioPlayer.src = "assets/sound/sound_name.mp3";
```

**Warning:** If there are spaces in the sound name, it may be best to rename your file so it does not have spaces.

### Feature Implementation

In class, we tidied up a `to do` list of features to implement. You can try implementing these features by browsing through the To Do List and Properties / Functions / Events.

Alternatively, continue reading.

**Note:** Some features where left as an exercise, to be completed as part of Core Web Development Task 2.

#### Feature 1 - Make Song Play & Pause from the play button

1. Select the button which displays `play` from the JavaScript. You can do so by giving it an id - for ex. `"play-button"`:

```JavaScript
const playPauseButton = document.getElementById("play-button");
```

2. Create a `function` to be executed when the `onclick` event of the `playPauseButton` is fired:

```JavaScript
function onPlayPauseClick() {

}

playPauseButton.onclick = onPlayPauseClick;
```

3. Create a `let` variable with name `playing`. This will be a boolean variable that stores whether the player is currently playing or not. It will be used in the `onPlayPauseClick` function to decide whether a `pause` action is needed, or a `play` action is needed.

```JavaScript
let playing = false;
```

It is initialized as `false`, as when the page loads the player is not playing.

4. Inside the `playPauseClick` function, add a conditional to check whether the let variable is true or false:

```JavaScript
function onPlayPauseClick() {
  if(playing) {

  } else {

  }
}
```

5. If the player is currently **playing** - the audio pauses, the button text changes to "Play", and the variable playing changes to false:

```JavaScript
function onPlayPauseClick() {
  if(playing) {
    audioPlayer.pause();
    playPauseButton.innerHTML = "Play";
    playing = false;
  } else {

  }
}
```

**Note:** The variable `playing` stores whether the audio was currently playing until now. This is why, when the user clicks the button Play, the audio is still false. It is not until the `onPlayPauseClick` fucntion is executed that this value changes.

**Note:** At the beginning the audio is not playing. This does not mean that the action will be mismatched, as playing will be false and the fucntion will skip to the `else` statement.

6. If the player is currently **not playing** - the audio plays, the button text changes to "Pause", and the variable playing changes to true:

```JavaScript
function onPlayPauseClick() {
  if(playing) {
    audioPlayer.pause();
    playPauseButton.innerHTML = "Play";
    playing = false;
  } else {
    audioPlayer.play();
    playPauseButton.innerHTML = "Pause";
    playing = true;
  }
}
```

7. Test it! With this, the audio player should now be playing and pausing.

#### Feature 2 - Display Progress Bar

The progress bar display is a bit more complicated. This is due to the fact that `audioPlayer.duration` is a property that cannot be accessed directly when the `audioPlayer` object is created. For this, it is needed to use the `audioPlayer.onloadedmetadata` event, which will fire when the `metadata` of the `audioPlayer` - such as the `duration` - is loaded. Beyond the `onloadedmetadata`, it is also needed to use the event `ontimeupdate` to update the value of the song as it progresses, and `onended` to reset all values at the end of the song.

1. Give an id to the bottom input - such as `progress-slider`, and select it in the JavaScript file:

```JavaScript
const progressSlider = document.getElementById("progress-slider");
```

2. Create a function (`onLoadedMetadata`) for the `onloadedmetadata` event, and link it to said event:

```JavaScript
function onLoadedMetadata() {
}
audioPlayer.onloadedmetadata = onLoadedMetadata;
```

3. Inside the `onLoadedMetadata` function, add code to store the `duration` of the audio as the maximum value of the `progressSlider`:

```JavaScript
function onLoadedMetadata() {
  progressSlider.max = audioPlayer.duration;
}
```

4. Repeat step 2 but for the `ontimeupdate` event:

```JavaScript
function onTimeUpdate() {
}
audioPlayer.onloadedmetadata = onLoadedMetadata;
```

5. Inside the `onTimeUpdate` function, update the value of the `progressSlider` to the `currentTime` of the `audioPlaye`:

```JavaScript
function onTimeUpdate() {
  progressSlider.value = audioPlayer.currentTime;
}
```

The `ontimeupdate` event fires every time an update in the time of the song time is detected - i.e., it continuosly fires as the song is progressing. With this link, the progressSlider will also update at the same speed as the song.

6. Repeat step 2 for the `onended` event:

```JavaScript
function onEnded() {
}
audioPlayer.onended = onEnded;
```

7. Reset the `progressSlider`, `playPauseButton` text, and `playing` property when the song ends:

```JavaScript
function onEnded() {
  progressSlider.value = 0;
  playPauseButton.innerHTML = "Play";
  playing = false;
}
```

If this isn't done, when the song gets to the end it will stop playing, but the code will think it is still playing - the `progressSlider` would stay at maximum value, the `playPauseButton` text would stay as Pause, and the song wouldn't play when the user next plays the button (as `playing` would be set to `true`).

8. Test it! With this, this feature should be implemented.

#### Feature 3 - Allow User to Change Volume

1. Give an id - for ex. volumeSlider - to the volume bar, and select it from the JavaScript:

```JavaScript
const volumeSlider = document.getElementById("volume-slider");
```

2. Add a function to manage the `onchange` event of the volume slider - you can name it `onVolumeSliderChange`:

```JavaScript
function onVolumeSliderChange() {
}
volumeSlider.onclick = onVolumeSliderChange
```

3. Add following code inside the `onVolumeSliderChange` function to implement the change of volume:

```JavaScript
function onVolumeSliderChange() {
  audioPlayer.volume = volumeSlider.value * 0.01;
}
```

#### Feature 4 - Display Time in the time text area

This is probably the most difficult feature to implement. First, a change needs to be done in the `index.html`, to be able to target each `00:00` (the `currentTime` and the `duration`) individually. Secondly, a new function must be implemented to be able to transform seconds - the unit in which the `audioPlayer` stores both `currentTime` and `duration` - into text. Finally, a similar implementation to the progressSlider can be included to display the text as needed.

1. Modify the `index.html` so that the "00:00 / 00:00" marker is displayed as follows:

```HTML
<p>
  <span id="progress-text">00:00</span> /
  <span id="duration-text">00:00</span>
</p>
```

We are using the `span` elements to separate individual portions of text, without creating new paragraphs. As you can see, I have added a suggested `id`, but you could change it to something else.

2. In `script.js` file, create a new function named `secondsToMMSS`. This function will be used to transform seconds to a string version. This function needs a parameter named `seconds`:

```JavaScript
function secondsToMMSS(seconds) {
  const integerSeconds = parseInt(seconds);

  //calculate seconds
  let MM = parseInt(integerSeconds / 60);
  if (MM < 10) MM = "0" + MM;

  //calculate minutes
  let SS = integerSeconds % 60;
  if (SS < 10) SS = "0" + SS;

  return MM + ":" + SS;
}
```

**The secondsToMMSS Function Explained:**
Let's give an example. Imagine you have to transform 200 seconds to MM:SS. This could be done applying the following:

- `200 / 60 = 3.33333333333` - this means that `200` is "3 minutes and something". The idea of "3 minutes and something" is expressed in the line:

```JavaScript
let MM = parseInt(integerSeconds / 60);
```

The `parseInt` gets rid of the decimals.

- Applying [long division](https://www.mathsisfun.com/long_division.html), one can find out that: `200 = 60 * 3 + 20`. The `20` is what is called the `remainder`, and that is the `seconds`. In coding, the operation `%` obtains the remaidner of a division. This is expressed in the line:

```JavaScript
let SS = integerSeconds % 60;
```

- When either `MM` or `SS` is below `10`, it is necessary to add a `0` manually. For ex. the previous example should be displayed as `03:20` and not `3:20`. This is expressed in the lines:

```JavaScript
if (MM < 10) MM = "0" + MM;
```

and

```JavaScript
if (SS < 10) SS = "0" + SS;
```

- Finally, the line `return MM + ":" + SS` creates the complete string. And **returns** it as a result.

3. Create two variables selecting the `spans` added in step 1:

```JavaScript
const progressText = document.getElementById("progress-text");
const durationText = document.getElementById("duration-text");
```

4. Modify the `onLoadedMetadata` function, so that it updates the `durationText` as well as the `progressSlider` maximum value:

```JavaScript
function onLoadedMetadata() {
  progressSlider.max = audioPlayer.duration;

  durationText.innerHTML = secondsToMMSS(audioPlayer.duration);
}
```

5. Modify the `onTimeUpdate` function, so that it updates the `innerHTML` as well as the `progressSlider` value:

```JavaScript
function onTimeUpdate() {
    progressSlider.value = audioPlayer.currentTime;

  progressText.innerHTML = secondsToMMSS(audioPlayer.currentTime);
}
```

5. Modify the `onEnd` function so that it resets the `progressText` as well as the other elements (`progressSlider` value, `playPauseButton` text, `playing` value)

```JavaScript
function onEnd() {
  progressSlider.value = 0;
  playPauseButton.innerHTML = "Play";
  playing = false;
  progressText.innerHTML = "00:00";
}
```

6. Test it! The text should now be correcty displayed in the Audio Player website.

#### Feature 5 - Allow User to change time from bottom slider

To allow the user to change the time, a few functions have to be modified. We will first implement the funcionality, and then add a boolean value that will help us fix a slider error that could happen if not careful.

1. create a new `onProgressSliderChange` function and link it to the appropriate event:

```JavaScript
function onProgressSliderChange() {
}

progressSlider.onchange = onProgressSliderChange;
```

2. Add the following line to this function, to update the `currentTime` of the `audioPlayer` according to the value that the user has input through the slider:

```JavaScript
function onProgressSliderChange() {
  audioPlayer.currentTime = progressSlider.value;
}
```
With this, the change update will mostly work. However, if the song is playing, and the user is taking a while to select the value, you can see that the progress bar jitters - it moves from where the mouse is being pressed, to where the song is currently playing. This is because the `progressSlider` value is being modified both manually - by the user - and automatically - from the `ontimeupdate` event that we coded before. Follow through the next steps to see how to fix this:

3. Create a new boolean value, started as `false`, to mark when the user is interacting with the progress slider:

```JavaScript
let updatingProgress = false;
```

4. Create a new `onProgressMouseDown` function and link it to the `onmousedown` event of the `progressSlider`. This event is fired when the user clicks on the slider bar.

```JavaScript
function onProgressMouseDown() {
}

progressSlider.onmousedown = onProgressMouseDown;
```

5. Inside the `onProgressMouseDown` function, update the value of the `updatingProgress` variable to `true`, to mark that the user is currently interacting with the progress slider:

```JavaScript
function onProgressMouseDown() {
  updatingProgress = true;
}
```
6. In the `onProgressSliderChange` function, add a line to update the `updatingProgress` variable to false, to mark that the user has finished interacting with the progress slider:

```JavaScript
function onProgressSliderChange() {
  audioPlayer.currentTime = progressSlider.value;
  updatingProgress = false;
}
```

7. In the `onTimeUpdate` function, add an if statement to make sure the `progressSlider.value` is only updated when the `updatingProgress` variable is set to false:
```JavaScript
function onTimeUpdate() {
  if (!updatingProgress) {
    progressSlider.value = audioPlayer.currentTime;
  }

  progressText.innerHTML = secondsToMMSS(audioPlayer.currentTime);
}
```

8. Test it out! Your progress slider should now be fully functional.


#### Feature 6 - Display volume in left slider

The volume slider is already funcional. However, one little change in the coude should be added to ensure it is consistent with the actual volume at the rendering of the page. As the code is now, when the page is loaded:
- The slider value is set to `50` out of `100` - as this is the default value for an input of type range in HTML.
- The audio volume is set to `1` (100%) - as this is the default value for an Audio object in JavaScript. 

To fix this, simply add this line after setting the audio `src`:
```JavaScript
audioPlayer.volume = 0.5;
```

Now the two volumes are consistent. Once the user moves the slider to change the volume, this will also be consistent as the JavaScript is making sure it stays updated.
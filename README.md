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

### Feature Implementation

In class, we tidied up a `to do` list of features to implement. You can try implementing these features by browsing through the To Do List and Properties / Functions / Events.

Alternatively, continue reading.

**Note:** Some features where left as an exercise, to be completed as part of Core Web Development Task 2.

#### Feature 1 - Make Song Play & Pause from the play button


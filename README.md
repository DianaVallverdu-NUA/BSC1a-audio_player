# Audio Player Workshop


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
audioPlayer.onend
```
The Event `onend` is fired when the song ends playing - when `currentTime` is equal to `duration`. 
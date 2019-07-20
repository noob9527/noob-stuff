# noob-stuff
> simple presentation build on top of [Spectacle](https://formidable.com/open-source/spectacle/docs/getting-started/).

## Presenting

Spectacle comes with a built in presenter mode. It shows you a slide lookahead, current time and your current slide:

![http://i.imgur.com/jW8uMYY.png](http://i.imgur.com/jW8uMYY.png)

You also have the option of a stopwatch to count the elapsed time:

![http://i.imgur.com/VDltgmZ.png](http://i.imgur.com/VDltgmZ.png)

To present:

- Run `npm start`. You will be redirected to a URL containing your presentation or visit [http://localhost:3000/#/](http://localhost:3000/#/)
- Open a second browser window on a different screen
- Add `?presenter` or `?presenter&timer` immediately after the `/`, e.g.: [http://localhost:3000/#/0?presenter](http://localhost:3000/#/0?presenter) or [http://localhost:3000/#/?presenter&timer](http://localhost:3000/#/?presenter&timer)
- Give an amazingly stylish presentation

_NOTE: Any windows/tabs in the same browser that are running Spectacle will sync to one another, even if you don't want to use presentation mode_

Check it out:

![http://i.imgur.com/H7o2qHI.gif](http://i.imgur.com/H7o2qHI.gif_)

You can toggle the presenter or overview mode by pressing respectively `alt+p` and `alt+o`.

<a name="controls"></a>

## Controls

| Key Combination | Function                       |
| --------------- | ------------------------------ |
| Right Arrow     | Next Slide                     |
| Left Arrow      | Previous Slide                 |
| Space           | Next Slide                     |
| Shift+Space     | Previous Slide                 |
| Alt/Option + O  | Toggle Overview Mode           |
| Alt/Option + P  | Toggle Presenter Mode          |
| Alt/Option + T  | Toggle Timer in Presenter Mode |
| Alt/Option + A  | Toggle autoplay (if enabled)   |
| Alt/Option + F  | Toggle Fullscreen Mode         |

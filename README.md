# [Omiya Games](https://www.omiyagames.com/) - Embed WebGL Template

[![openupm](https://img.shields.io/npm/v/com.omiyagames.embedwebgltemplate?label=openupm&registry_uri=https://package.openupm.com)](https://openupm.com/packages/com.omiyagames.embedwebgltemplate/) [![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I3I51KS8F)

![Animated Example](/Documentation~/example.gif)

**Embed WebGL Template** is a WebGL template for Unity.  The purpose is to allow Unity to create WebGL builds that embeds well in popular web portals such as Itch.io, GameJolt, Newgrounds, etc.  Features this template provides include:

- A loading bar with percentage point indicating a numerical value on progress being made.
- Automatically resizes the game to the size of the frame the game is embedded in, including full-screen mode.
    - It even resizes from embed size to full-screen for web portals like Itch.io that supports full-screen buttons.
- A light and dark mode.

## Install

There are two parts to installing this template: the package, and the template itself.

### Installing Package

#### OpenUPM

Installing via [OpenUPM](https://openupm.com/) is also recommended, as it provides version support and dependency resolution.  If not installed already, install OpenUPM with Node.js' `npm`:
```
npm install -g openupm-cli
```
After the command line tool is installed, switch to the root directory of your Unity project, and run:
```
openupm add com.omiyagames.embedwebgltemplate
```

#### Edit `manifest.json`

In your Unity project, open `manifest.json` in your favorite text editor under the `Packages` folder. Content should look something similar to an excerpt below:
```
{
  "dependencies": {
    "com.unity.2d.pixel-perfect": "2.0.4",
    ...
  }
}
```
Add towards the bottom of the dependencies list the line, `"com.omiyagames.embedwebgltemplate": "1.0.0"`, as well as the OpenUPM `scopedRegistries`. Basically, the same thing OpenUPM would have done for you, if you ran the command-line tool.
```
{
  "dependencies": {
    "com.unity.2d.pixel-perfect": "2.0.4",
    ...,
    "com.omiyagames.embedwebgltemplate": "1.0.0"
  },
   "scopedRegistries": [
    {
      "name": "package.openupm.com",
      "url": "https://package.openupm.com",
      "scopes": [
        "com.omiyagames.embedwebgltemplate",
        "com.openupm"
      ]
    }
  ]
}
```

#### Package Manager

The package itself can be installed with Unity's own Package Manager using the Github URL:
```
https://github.com/OmiyaGames/omiya-games-embed-webgl-template.git
```

Only the latest source code will be installed via this method, and will not be monitored for any upgrades.

### Installing WebGL Template

Utilizing the template requires importing the files, moving them to folder `Assets/WebGLTemplates`, and finally setting up the Player Settings to utilize the template.

#### Step 1: TODO

TODO

## Other Info

- [change log](/CHANGELOG.md).

## LICENSE

Overall package is licensed under [MIT](/LICENSE.md), unless otherwise noted in the [3rd party licenses](/THIRD%20PARTY%20NOTICES.md) file and/or source code.

Copyright (c) 2019-2020 Omiya Games

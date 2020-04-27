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

There are at least 3 ways to install this Unity package:

#### Package Manager

The easiest way to install the package is through Unity's own Package Manager:

![Add Git URL](/Documentation~/packageManager1.png)

Simply enter the following Github URL:
```
https://github.com/OmiyaGames/omiya-games-embed-webgl-template.git
```

![Enter Git URL](/Documentation~/packageManager2.png)

Only the latest source code will be installed via this method, and will not be monitored for any upgrades.  To enable such features, consider the other options listed below:

#### OpenUPM

[OpenUPM](https://openupm.com/) is a command line tool that provides package version support and dependency resolution.  If not installed already, install OpenUPM with Node.js' `npm`:
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

### Installing WebGL Template

Utilizing the template requires importing the files, moving them to folder `Assets/WebGLTemplates`, and finally setting up the Player settings to utilize the template.

#### Step 1: Import the Template

Navigate to this package in the Package Manager, and import "Embed WebGL Template."

![Import from Package Manager](/Documentation~/packageManager3.png)

Unity should automatically create an `Embed WebGL Template` folder with the files:

![Import Results](/Documentation~/project1.png)

#### Step 2: Create a `WebGLTemplates` folder, if you haven't already

In the Project windor, return back to the root folder, `Assets`. Verify if the folder, `WebGLTemplates`, already exists. If not, right-click in the middle of the window, and select "Create -> Folder."

![Create Folder context menu](/Documentation~/project2.png)

Upon creation of a new folder, enter `WebGLTemplates`.

#### Step 3: Move the imported files into the `WebGLTemplates` folder

Return back to the imported files, and drag-and-drop the folder, `Embed WebGL Template` into `WebGLTemplates`.

![Drag-and-Drop Template Files](/Documentation~/project3.png)

#### Step 4: Update WebGL Player Settings to Use the Template

Under Unity's menu bar, select "Edit -> Project Settings..."

![Project Settings context menu](/Documentation~/settings1.png)

1. In the Project Settings window, click on "Player" on the left sidebar.
2. Select the WebGL tab (if it's not there, you'll need to install WebGL build files on Unity Hub).
3. Finally, under the group, "Resolution and Presentation", select `Embed WebGL Template`:

![Final Player Settings Configuration](/Documentation~/settings2.png)

# Customizing Template

Files to consider customizing to suite your needs include:

- The [progressLogo.Light.png](/Samples~/UnityTemplate/progressLogo.Light.png) and [progressLogo.Dark.png](/Samples~/UnityTemplate/progressLogo.Dark.png) are logos displayed during the light and dark WebGL build theme are used respectively. Feel free to replace them.
- While embedded builds don't show this, it might be good idea to replace the [favicon.ico](/Samples~/UnityTemplate/favicon.ico) as well.
- Consider also editing the [style.css](/Samples~/UnityTemplate/TemplateData/style.css) file to your liking.

## Other Info

- [Documentation](/Documentation~/EmbedWebGLTemplate.md).
- [Change log](/CHANGELOG.md).

## LICENSE

Overall package is licensed under [MIT](/LICENSE.md). By necessity, this package uses third party images, which are noted in the [3rd party licenses](/THIRD%20PARTY%20NOTICES.md) file.

Copyright (c) 2019-2020 Omiya Games

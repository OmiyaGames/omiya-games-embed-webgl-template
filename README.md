# [Omiya Games](https://www.omiyagames.com/) - Embed WebGL Template

[![openupm](https://img.shields.io/npm/v/com.omiyagames.embedwebgltemplate?label=openupm&registry_uri=https://package.openupm.com)](https://openupm.com/packages/com.omiyagames.embedwebgltemplate/) [![Documentation](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/workflows/Host%20DocFX%20Documentation/badge.svg)](https://omiyagames.github.io/omiya-games-embed-webgl-template/) [![Mirroring](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/workflows/Mirroring/badge.svg)](https://bitbucket.org/OmiyaGames/omiya-games-embed-webgl-template) [![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I3I51KS8F)

![Animated Example](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/example.gif)

**Embed WebGL Template** is a WebGL template for Unity.  The purpose is to allow Unity to create WebGL builds that embeds well in popular web portals such as Itch.io, GameJolt, Newgrounds, etc.  Features this template provides include:

- A loading bar with percentage point indicating a numerical value on progress being made.
- Automatically resizes the game to the size of the frame the game is embedded in, including full-screen mode.
    - It even resizes from embed size to full-screen for web portals like Itch.io that supports full-screen buttons.
- A light and dark mode.

#### Note:

* Version 2.0.0 and above supports Unity 2020.1 and up.
* Version 1.1.0 supports Unity 2019.4.

## Installing Package

There are at least 3 ways to install this Unity package:

#### Easy Method: Package Manager

The easiest way to install the package is through Unity's own Package Manager:

![Add Git URL](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/packageManager1.png)

Simply enter the following Github URL:
```
https://github.com/OmiyaGames/omiya-games-embed-webgl-template.git
```

![Enter Git URL](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/packageManager2.png)

Only the latest source code will be installed via this method, and will not be monitored for any upgrades.  To enable such features, consider the other options listed below:

#### Best Method: OpenUPM

[OpenUPM](https://openupm.com/) is a command line tool that provides package version support and dependency resolution.  If not installed already, install OpenUPM with Node.js' `npm`:
```
npm install -g openupm-cli
```
After the command line tool is installed, switch to the root directory of your Unity project, and run:
```
openupm add com.omiyagames.embedwebgltemplate
```
This should update the Package Manager with all the available versions of this package. Of course, there's the manual method...

#### Manual Method: Edit `manifest.json`

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
This should update the Package Manager with all the available versions of this package.

## Configuration

Utilizing the template requires importing the files, moving them to folder `Assets/WebGLTemplates`, and finally setting up the WebGL Player settings.

#### Step 1: Import the Template

Navigate to this package in the Package Manager, and import "Embed WebGL Template."

![Import from Package Manager](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/packageManager3.png)

Unity should automatically create an `Embed WebGL Template` folder with the files:

![Import Results](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/project1.png)

#### Step 2: Create a `WebGLTemplates` folder, if you haven't already

In the Project windor, return back to the root folder, `Assets`. Verify if the folder, `WebGLTemplates`, already exists. If not, right-click in the middle of the window, and select "Create -> Folder."

![Create Folder context menu](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/project2.png)

Upon creation of a new folder, enter `WebGLTemplates`.

#### Step 3: Move the imported files into the `WebGLTemplates` folder

Return back to the imported files, and drag-and-drop the folder, `Embed WebGL Template` into `WebGLTemplates`.

![Drag-and-Drop Template Files](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/project3.png)

#### Step 4: Update WebGL Player Settings to Use the Template

Under Unity's menu bar, select "Edit -> Project Settings..."

![Project Settings context menu](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/settings1.png)

1. In the Project Settings window, click on "Player" on the left sidebar.
2. Select the WebGL tab (if it's not there, you'll need to install WebGL build files on Unity Hub).
3. Finally, under the group, "Resolution and Presentation", select `Embed WebGL Template`:

![Final Player Settings Configuration](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/settings2.png)

## Customizing Template

Files to consider customizing to suit your needs include:

- The [progressLogo.Light.png](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/progressLogo.Light.png) and [progressLogo.Dark.png](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/progressLogo.Dark.png) are logos displayed during the light and dark WebGL build theme are used respectively. Feel free to replace them.
- While embedded builds don't show this, it might be good idea to replace the [favicon.ico](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/favicon.ico) as well.
- Consider also editing the [style.css](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/TemplateData/style.css) file to your liking.

## Other Info

- [Documentation](https://omiyagames.github.io/omiya-games-embed-webgl-template).
- [Change log](https://omiyagames.github.io/omiya-games-embed-webgl-template/manual/changelog.html).

## LICENSE

Overall package is licensed under [MIT](/LICENSE.md). By necessity, this package uses third party images, which are noted in the [3rd party licenses](/THIRD%20PARTY%20NOTICES.md) file.

Copyright (c) 2019-2020 Omiya Games

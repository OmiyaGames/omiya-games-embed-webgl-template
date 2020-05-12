# Installing Template

Utilizing the template requires importing the files, moving them to folder `Assets/WebGLTemplates`, and finally setting up the WebGL Player settings.

### Step 1: Import the Template

Navigate to this package in the Package Manager, and import "Embed WebGL Template."

![Import from Package Manager](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/packageManager3.png)

Unity should automatically create an `Embed WebGL Template` folder with the files:

![Import Results](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/project1.png)

### Step 2: Create a `WebGLTemplates` folder, if you haven't already

In the Project windor, return back to the root folder, `Assets`. Verify if the folder, `WebGLTemplates`, already exists. If not, right-click in the middle of the window, and select "Create -> Folder."

![Create Folder context menu](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/project2.png)

Upon creation of a new folder, enter `WebGLTemplates`.

### Step 3: Move the imported files into the `WebGLTemplates` folder

Return back to the imported files, and drag-and-drop the folder, `Embed WebGL Template` into `WebGLTemplates`.

![Drag-and-Drop Template Files](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/project3.png)

### Step 4: Update WebGL Player Settings to Use the Template

Under Unity's menu bar, select "Edit -> Project Settings..."

![Project Settings context menu](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/settings1.png)

1. In the Project Settings window, click on "Player" on the left sidebar.
2. Select the WebGL tab (if it's not there, you'll need to install WebGL build files on Unity Hub).
3. Finally, under the group, "Resolution and Presentation", select `Embed WebGL Template`:

![Final Player Settings Configuration](https://omiyagames.github.io/omiya-games-embed-webgl-template/resources/settings2.png)

## Customizing Template

Files to consider customizing to suite your needs include:

- The [progressLogo.Light.png](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/progressLogo.Light.png) and [progressLogo.Dark.png](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/progressLogo.Dark.png) are logos displayed during the light and dark WebGL build theme are used respectively. Feel free to replace them.
- While embedded builds don't show this, it might be good idea to replace the [favicon.ico](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/favicon.ico) as well.
- Consider also editing the [style.css](https://github.com/OmiyaGames/omiya-games-embed-webgl-template/tree/master/Samples%7E/UnityTemplate/TemplateData/style.css) file to your liking.

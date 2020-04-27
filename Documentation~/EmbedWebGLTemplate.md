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

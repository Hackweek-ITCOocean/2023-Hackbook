---
title: ITCOocean Cloud Environment
---

![](./img/jhub-logo.png)


**Summary of what we'll cover:**

 * What's a cloud environment and why we are using it.
 * Learn about the Jupyter ecosystem and our cloud infrastructure.
 * Open a Jupyter Notebook
 * Open RStudio
 * Start/Stop your JupyterHub server


## Why are we using a cloud environment?

"Anyone working with large-scale Earth System data today faces the same general problems:

 * The data we want to work with are huge (typical analyses involve several TB at least)
 * The data we need are produced and distributed by many different organizations (NASA, NOAA, ESGF, Copernicus, etc.)
 * We want to apply a wide range of different analysis methodologies to the data, from simple statistics to signal processing to machine learning.

The community is waking up to the idea that we can’t simply expect scientists to download all this data to their personal computers for processing."

*Ryan Abernathey, Pangeo Project.*

![Download-based workflow. From Abernathey, Ryan (2020): Data Access Modes in Science](https://s3-eu-west-1.amazonaws.com/pfigshare-u-previews/22017009/preview.jpg)

## JupyterHub Infrastructure

Go to <https://itcoocean.2i2c.cloud/>. Click "Login to continue". You will be asked to log in with your GitHub Account, if you are not logged in already.

![ITCOocean JupyterHub Login](./img/jhub.png)

### Image type: Python or R

Next you select your image type. We have two different R images and two Python images. The default is "Geospatial R with SDM". This is an image with geospatial libraries and species distribution libraries.

### Virtual Machine size

You'll see something similar to this that allows you to choose a large virtual machine if your project needs it. For the tutorials, you will only need the Small Virtual Machine. Please only choose the large machines if you run out of RAM as the larger machines cost us more.

![Machine Profiles](./img/servers.png)

### Start up

After we select our server type and click on start, JupyterHub will allocate our instance using Amazon Web Services (AWS). This may take several minutes. 

![Jupyterhub Spawning](./img/spawning.png)


## Files

When you are in the hub, you will see a Launcher page:

![Jupyterhub Launcher](./img/jhub-launcher.png)

## Shared folders

![Shared folder](./img/shared-folder.png)

On the left, you will see a folder called `shared`. These are read-only shared files that we have prepared for you. There are two main folders:

* `data` The folder with data files
* `tutorials` The folder with tutorials
* `2023-Hackbook` The full Git repository with the files for https://hackweek-itcoocean.github.io/2023-Hackbook

You will also see `shared-public`. This is a read-write folder for you to put files for everyone to see and use. You can create a team folder here for shared data and files.  Note, everyone can see and change these so be careful to communicate with your team so multiple people don't work on the same file at the same time. You can also create folders for each team member and agree not to change other team members files.

### Your files

When you start your server, you will have access to your own virtual drive space. No other users will be able to see or access your files. You can upload files to your virtual drive space and save files here. You can create folders to organize your files.

There are a number of different ways to create new files. We will practice these together.

## Open a Jupyter Notebook

You can open a Jupyter Notebook by clicking on the "Python 3" box. In the Launcher tab:

![Jupyterhub Launcher](./img/jhub-launcher.png)

Jupyter notebooks are a very common way to share Python code and tutorials. Because we are focusing on R in this course, we will not use Jupyter notebooks much but we have many Juptyer notebooks that you can experiment with in the `python-tutorials` folder. Get an overview of Jupyter Lab: [Intro to Jupyter Lab](jupyter-notebooks.md)

## Open RStudio

* You can open RStudio by clicking on the "RStudio" box. In the Launcher tab:

![Jupyterhub Launcher](./img/jhub-launcher.png)

We will be mainly using RStudio in this course. Get an overview of RStudio: [Intro to RStudio](rstudio.md)

## End your session

When you are finished working for the day it is important to log out of the JupyterHub.  When you keep a session active it uses up AWS resources (costs money) and keeps a series of virtual machines deployed.

Stopping the server happens automatically when you log out, so navigate to "File -> Log Out" and click "Log Out"!

### Will I lose all of my work?

Logging out will **NOT** cause any of your work to be lost or deleted. It simply shuts down some resources. It would be equivalent to turning off your desktop computer at the end of the day.

### GitHub

GitHub allows you to store files in "repositories", which is like a folder. This is a popular way that code is shared and there are many community resources shared on GitHub that you will want to be able to use in your JupyterHub. You can also link your own GitHub repositories to your JupyterHub. 

Being familiar with version control (making commits as you work), Git and GitHub is important skill for reproducible science because this is a part of the current workflow for sharing work with the wider community of scientists.

We will cover using Git and GitHub in separate lectures

* [Git in RStudio](git-rstudio.md)
* [Git in Jupyter Lab](git-jupyter.md) (optional not covered in this hackweek)


## References

 * [Project Pythia](https://foundations.projectpythia.org)
 * [Why Jupyter is data scientists’ computational notebook of choice](https://www.nature.com/articles/d41586-018-07196-1)
 * [Closed Platforms vs. Open Architectures for Cloud-Native Earth System Analytics](https://medium.com/pangeo/closed-platforms-vs-open-architectures-for-cloud-native-earth-system-analytics-1ad88708ebb6)

## FAQ

**I have an empty ‘`shared-user`’ folder**. That's expected. There shouldn't be anything in the ‘`shared-user/`’  folder until participants put files there.

**Can we use Matlab with JupyterHub?** You can use [Octave kernel](https://datascience-enthusiast.com/Miscellaneous/Jupyter_R_Python_Julia_Octave.html) as a Matlab replacement. It is open source and free. If you want to integrate Matlab, there is a project to do so [jupyter-matlab-proxy](https://github.com/mathworks/jupyter-matlab-proxy)


**Why do we have the same home directory as /home/jovyan?** /home/jovyan is the default home directory for 'jupyter' based images/dockers. It is the historic home directory for Jupyter deployments. 

**Can other users see the .git-credentials file in my /home/jovyan folder?** No, other users can not see your credentials.

**How to exit 2i2c's terminal text editor?** The default editor is `vi`. `esc` to get to the command, and then `:w` to save, `:q` to quit. 


## Acknowledgements

Some sections of this document have been taken from  hackweeks organized by the University of Washington eScience Institute and Openscapes.


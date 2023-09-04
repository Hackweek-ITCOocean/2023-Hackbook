---
title: GitHub - Lecture 2
---

::: {.callout-note icon="false"}
## Goals

In this lab, you will learn how to

-   import a GitHub repository = make a copy of a repository in your own account
-   clone GitHub repositories to RStudio = get the repo into RStudio
-   set up authentication so you can push up changes
:::

## Import a GitHub repository

1. In your browser, navigate to <https://github.com/Hackweek-ITCOocean/Quarto-Website>
2. Copy the URL
3. Click on the "+" in the top right (on GitHub) and select "import repository"
4. Follow instructions to import to your GitHub account
5. Now you have your OWN copy of `Quarto-Website`
6. Copy the URL for your OWN copy. It will look like this
```
https://github.com/yourgithubusername/Quarto-Website
```

## Clone a GitHub repository into RStudio

1. Login the JupyterHub
2. Click on the RStudio button when the Launcher appears
![Jupyterhub Launcher](./img/jhub-launcher.png)
3. Click File > New Project > Version Control > Git
4. Paste the URL into the box
5. Click "Create Project"
6. The project is created and the Git tab appears in the upper right panel.

Congratulations! You **pulled** changes from GitHub into the JupyterHub!

## Let's explore the files

1. This happens to be a website. Let's **build** it using the Build tab in the upper right.
2. Click "Render Website". The website should build and appear.
  - If it doesn't open automatically, go to docs > index.html, right click and open that in a browser.
3. Open the `about.qmd` file. Let's edit that! You can use the "Source" or "Visual" editor.
4. When you have made some edits, click "Render" to see how it looks.
5. You can also click Build > Render Website to re-create the whole website.

## Set up authentication

You need to tell GitHub who you are so you can **push** your local changes up to GitHub. There are a few ways to do this. I am going to show you a way that works on any computer, including a virtual computer like the JupyterHub.

### Step 1: Generate a Personal Access Token

We are going to generate a **classic** token.

1. Go to https://github.com/settings/tokens
2. Click Generate new token > Generate new token (classic)
3. When the pop-up shows up, fill in a description, click the "repo" checkbox, and then scroll to bottom to click "Generate".
4. SAVE the token. You need it for the next step.

### Step 2: Tell Git who your are

1. Return to RStudio
2. Click the terminal tab in the bottom right panel
3. Paste these 3 lines of code into the terminal
```
git config --global user.email "<your email>"
git config --global user.name "<your name>"
git config --global credential.helper store
```

### Step 3: Push changes up to GitHub

1. Click the Git tab (upper right panel)
2. 

[Full instructions with ways to do this from R](https://rverse-tutorials.github.io/RWorkflow-NWFSC-2022/set-up.html#Git_from_RStudio_Desktop)

---
title: RStudio - R
---

## Summary

In this tutorial, we will provide a brief introduction to:

1.  RStudio in the JupyterHub
2.  Basic navigation around  **RStudio**
4.  Command line (**terminal**/shell) in RStudio
5.  **Git** in RStudio


## Creating files

When you start your server, you will have access to your own virtual drive space. No other users will be able to see or access your files. You can upload files to your virtual drive space and save files here. You can create folders to organize your files. You personal directory is `home/jovyan`. Everyone has the same home directory but your files are separate and cannot be seen by others.

There are a number of different ways to create new files. Let's practice making new files in RStudio.

### R Script

1. Open RStudio
2. **In the file panel**, click on the Home icon to make sure you are in your home directory
2. **From the file panel**, click "Folder" to create a new folder
3. Name it `my-files`
4. Click on `my-files`
5. **From the file panel**, click on "New Blank File" and create a new R script.
6. Paste `print("Hello World")` in the script.
7. Click the Run button (upper left of your new script file) to run this code.

### csv file

4. My sure you are in the `my-files` directory
5. **From the file panel**, click on "New Blank File" and create a Text File.
6. The file will open in the top left corner. Paste in the following:
```
name, place, value
A, 1, 2
B, 10, 20
C, 100, 200
```
1. Click the save icon (above your new file) to save your csv file

### A Rmarkdown document

Now let's create some more complicated files using the RStudio template feature.

1. From the upper left, click File -> New File -> RMarkdown
2. Click "Ok" at the bottom.
3. When the file opens, click Knit (icon at top of file).
4. It will ask for a name. Give it one and save.
5. You file will render into html.

### A Rmarkdown presentation

1. From the upper left, click File -> New File -> RMarkdown
2. Click "Presentation" on left of the popup and click "Ok" at the bottom.
3. When the file opens, click Knit (icon at top of file).
4. It will ask for a name. Give it one and save.
5. You file will render into html.

### An interactive application

1. From the upper left, click File -> New File -> Shiny Web App
2. In the popup, give the app a name and make sure the app is saved to `my-files`
3. When the file opens, Run App (icon at top of file).

# Terminal and Git cheat sheet

_[<- Return to main menu](README.md#contents)_

## Terminal overview

Your computer's terminal is a keyboard-based user interface. It is another way to do a lot of the things you probably already do with Finder or File Explorer, like:

- see the contents of a directory
- create files and directories
- move or copy files
- open files in another program
- etc.

Many developer-specific tools function well in the terminal -- and some function _only_ in the terminal! It's important to get comfortable interfacing with your computer this way.

## Terminal commands to maximize your level of chill:

- `pwd` : Where am I?
- `ls` : What’s here with me?
- `ls -a` : What’s here, including any “secret” stuff?
- `git status` : Am I actually even in a Git repository? If so, did I change anything? Did I throw things in the box? Did I tape up the box?

#### Scary things to actually feel pretty chill about:
- `fatal` in an error output from Git. It’s “fatal” for that particular attempt to do a particular thing with Git. It’s not fatal for you or your computer. It just means Git wasn't able to do what it was told to do! Pay attention to it -- it means what you tried to do didn't work! But don't panic. :)

## Terminal commands

- `pwd` : shows the present working directory
- `ls` : shows the contents of the current directory
- `cd <PATH_TO_DIRECTORY>` : change directory to the one specified
- `mkdir <DIR_NAME>` : make a new directory with this name
- `touch <FILE_NAME>` : create a new empty file with this name
- `mv <CURRENT_PATH> <DESTINATION_PATH>` : moves the file or directory located at "current path" to a new location at "destination path"
- `rm <PATH_TO_FILE>` : delete the specified file

## Launching applications from terminal:

- `code` : open VSCode
- `code .` : open the current directory in VSCode
- `code <PATH_TO_FILE>` : open a particular file in VSCode
- `open <PATH_TO_FILE>`(Mac) / `start <PATH_TO_FILE>`(Win) : attempts to open the file with the appropriate program based on the file extension; for .html files, it will open in your web browser

## Git overview

Git is a _version control_ system, which means it keeps track of changes you make to files or directories. You can use it to:

- track the history of a repository
- maintain multiple versions of a repository
- easily transfer a repository on your computer to GitHub
- collaborate with other developers to simultaneously improve the same repository

A _repository_ is a directory that has been initialized to be tracked by Git. Git will keep an eye on any changes you make in the directory!

### GitHub

GitHub is a social media site for nerds. You can share your Git repositories via GitHub, or _fork_ and/or _clone_ repositories made by others in order to edit or inspect their code.

## Git commands
- `git init` : create a repository in the current directory
- `git status` : find out what's up in the current repo
- `git add -A` : prepare all unstaged changes in this repo for commit (i.e., "put them in the box")
- `git add <FILE_NAME>` : do the above, but only for a specific file
- `git commit -m "<YOUR_MESSAGE>"` : create a commit including the staged changes, with your message attached (i.e., tape up the box and put a label on it)
- `git remote -v` : list all the remote repositories associated with the current local repository
- `git remote add <LABEL> <ADDRESS>` : link a remote repository to the current local repository; provide a name for the remote (often "origin" but you can call it whatever) and an address (for our purposes, the location of your repository on GitHub)
- `git push <REMOTE_NAME> <REMOTE_BRANCH>` : push the current local branch (don't worry about branches yet) to the named remote repository (usually origin) and the destination remote branch (usually main or master)
- `git clone <ADDRESS_TO_CLONE>` : makes a new copy of the remote repository on your computer in a new directory inside your current directory


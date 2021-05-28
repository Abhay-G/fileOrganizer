# 📁File Organizerary

Organize your messy folders into a systematic manner.
Visualize all the directories and files inside them in a tree structure.

### Installation

[`npm i fileorganizerary --save`](https://www.npmjs.com/package/fileorganizerary) or clone it from here after forking.

Then ...

You will get the entire folder of this project inside the node modules after installing it from npm, inside that you can see the package.json file for bash and other files inside commands folder. Copy the entire code and type this shebang syntack at the top of your main file.

```
#!/usr/bin/env node
```

Inside the package.json you can change the command you want, it is set to

```
setfs

```

as default.

and after changing the command, type

```console
npm init
```

in your console.

### How to Use

In your console type the following command to get all the information about the commands.

```console
foo@bar:~$setfs help
```

To get tree structure type:

```console
foo@bar:~$setfs tree
```

To organize directrory type:

```console
foo@bar:~$setfs organize
```

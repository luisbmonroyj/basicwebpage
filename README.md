 [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
# README #

This README would normally document whatever steps are necessary to get your application up and running.


## signup.html ##

The form aims to be dumb proof, doing these restrictions:

### id ###
 must be a number, without dots or commas, with a maximum length of 9 digits (accordin to my country's ids), any other character is erased automatically. 

### First and middle names ###
must be one word; Any spaces, digits or special characters entered are automatically removed. User can write in upper or lowercase letters, all names are capitalized when the field loses its focus

### Lastname ###
can be multiple words, but not digits or special characters, which are removed instantly.

### e-mail ###
can have letters, numbers, hyphens, dots and the pound (at) symbol
but must follow the syntax: username@server.extension.

### Address ###
is the only free field where the user can input whatever.

### phone ###
is limited to ten digits, any other character is removed.

### username ###
is suggested from the user's names and lastnames, the only thing that must be considered is duplicated usernames in the database.

###password ###
must have: 
at least ten characters, at least one uppercase letter (A,B,C...), at least one lowercase letter (a,b,c...), at least one digit (0,1,2,3,,,) and at least two special characters: # ? ! @ $ % ^ & * - 

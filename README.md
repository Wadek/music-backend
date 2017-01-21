## To start:
1. Clone music-backend repo from Github: https://github.com/Wadek/music-backend

2. cmd: npm install

3. cmd: npm install express, npm install fs, npm install multer, npm install mongoose, npm install gridfs-stream

### To Upload a file to MongoDB:

1. make a new folder called "views" in the music-backend main directory

2. put the attached home.ejs (this is just the basic html file that has the upload field thing) file inside the views folder you just created 

3. put the attached index.js file in the music-backend main directory

4. cmd: mongod (start the database on a seperate cmd).

5. cmd: node index.js 

6. open up google chrome, go to localhost:3000

7. upload something, and then check you're database to see if it successfully uploaded the file. 

>NOTE: if there are any errors when running index.js, make sure that you have installed everything that is needed. It may not be displayed on this README, but the cmd may tell you what is missing as an error report.

### To download a file from MongoDB:
1. Edit download.js to match existing file in database (file you want to retrieve)

2. node download.js

#### Mongo Commands to know 
> NOTE: you must get into the mongo shell to do this, in cmd you can just type "mongo" and that'll do the trick

- db.fs.files.find() (Shows the files that are in the database)
- show collections (shows the current collections in the database)
### To Upload a file to MongoDB:
1. Clone music-backend repo from Github: https://github.com/Wadek/music-backend

2. cmd: npm install

3. cmd: npm install express, npm install fs, npm install multer, npm install mongoose, npm install gridfs-stream

4. make a new folder called "views" in the music-backend main directory

5. put the attached home.ejs (this is just the basic html file that has the upload field thing) file inside the views folder you just created 

6. put the attached index.js file in the music-backend main directory

7. cmd: mongod (start the database on a seperate cmd).

8. cmd: node index.js 

9. open up google chrome, go to localhost:3000

10. upload something, and then check you're database to see if it successfully uploaded the file. 

### To download a file from MongoDB:
1. Edit download.js to match existing file in database (file you want to retrieve)

2. node download.js

#### Mongo Commands to know 
> NOTE: you must get into the mongo shell to do this, in cmd you can just type "mongo" and that'll do the trick

- db.fs.files.find() (Shows the files that are in the database)
- show collections (shows the current collections in the database)
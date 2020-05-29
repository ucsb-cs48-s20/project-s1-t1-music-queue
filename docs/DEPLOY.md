## Prerequisites: 

Have a working: 
* Spotify Premium account 
* Heroku account 
* Mongo DB account 
    
# Video instructions: 

The following link is a video tutorial to help you through the instructions given below. 
# Please note, an additional instruction is included in the written instructions titled: ADDITIONAL INSTRUCTION
https://www.youtube.com/watch?v=gtWa-XweB_0&feature=youtu.be

# Instructions:

1. Fork the project repo to your own personal GitHub account by clicking on the "Fork" button at the upper right hand of the repo's page on GitHub.  This creates a personal copy of the repo under your own GitHub account.  This is necessary because you can't deploy an app to Heroku unless you have
 admin access to the repo.

2. Set up Spotify Config Variables: 
* Go to https://developer.spotify.com/dashboard/
* On your Dashboard click CREATE A CLIENT ID.
* Enter  MusicQ for application name and fill in Application Description and then choose Website for the ‘What are you building?’
* Then click next and press non commercial then click SUBMIT. Your application is registered, and the app view opens.
* Client Id is shown on the left side and you can click SHOW CLIENT SECRET to see your secret.
* On the app view, click Edit Settings to view and update your app settings.
* Under Redirect URIs, enter http://localhost:3000/Login
* Make sure you **scroll to the bottom and press save!**

3. Getting MongoDB connect URI string
* Create an account at https://www.mongodb.com. Follow the instructions provided and create a brand new cluster
* Once the cluster is created, you should see a screen like so:

![image1](https://user-images.githubusercontent.com/43687816/82939953-f1b73980-9f48-11ea-9b71-44527210e238.png)


* Click on the “Connect” button and select: “Connect your application”. Select the Node.js driver and version number 3.0 or later. 
* Copy the Mongo URI that is provided below. Replace the <username> and <password> field in the URI with your username and password that you previously entered
* If you want to access or change your password, select “Database access” on the left hand panel.
* ADDITIONAL INSTRUCTION: navigate to network access and make the network access open to all. Or add 0.0.0.0/0 to the whitelist.

4. To get it running on localhost: 
* Clone the forked repo to your local computer 
* Create a file named “.env” in the root of this directory with the values shown in the picture below

<img width="435" alt="image2" src="https://user-images.githubusercontent.com/43687816/82940635-f9c3a900-9f49-11ea-9d2d-ec871a05e0e0.png">

* Fill in the session cookie secret as explained in the documentation for [demo-nextjs-app](https://github.com/ucsb-cs48-s20/demo-nextjs-app/blob/master/README.md)
* Fill in the CLIENT_ID and CLIENT_SECRET from your Spotify Client ID and Client Secret Config vars from step 2.
* Fill in the MONGODB_URI from step 3. 

To run the app on localhost:
* Type in “npm install” on your CLI
* To get the local host website running type in “npm run dev” in the CLI 

5. To get it running on Heroku: 
* Create a new Heroku app, and link it to your forked github copy, so that you are ready to deploy the master branch. 
* To get more detailed instructions on how to create a heroku app checkout lab 01 instructions linked here -  https://ucsb-cs48.github.io/s20/lab/lab01/ 

6. Go back to your Spotify Developers Dashboard go into the app you had created in step 2.
* On the app view, click Edit Settings to view and update your app settings.
* Under Redirect URIs, enter your heroku app url + /Login
* For ex: "https://cs48-s20-s1-t1-prod.herokuapp.com/Login"
* Make sure you **scroll to the bottom and press save!**

7. Go back to your Heroku app and click settings
* In settings, scroll down and click Reveal Config Vars
* In key add the words listed below in the picture:
* In the value section use the values you put in your .env in step 4 for each corresponding key:

<img width="350" alt="image3" src="https://user-images.githubusercontent.com/43687816/82941215-d9e0b500-9f4a-11ea-859a-9e21005f3eff.png">

To run the app on Heroku:
* Go to the Heroku Deploy page for this app and scroll down to deploy the master branch. 
* Then Click Open App on the top right.


### Enjoy using MusicQ!

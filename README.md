## Hosted Website Link 
https://profile-ttt.vercel.app

## Libraries
No external NPM libraries have been used.

## Directory Structure
 ### Public Folder

    It contains :

    * index.html
    * All images

 ### SRC folder

    It contains :

    * components folder
        ** Dot.jsx
        ** Footer.jsx
        ** Head.jsx
        ** Icon.jsx
        ** Navbar.jsx
        ** NumberText.jsx
        ** Post.jsx

    * data folder
        ** profile.jsx

    * styles folder
        ** Dot.module.css
        ** Footer.module.css
        ** Head.module.css
        ** Icon.module.css
        ** Navbar.module.css
        ** NumberText.module.css
        ** Post.module.css

## Style Type 
    The styling type used is MODULE based.
    Hence all style files are separate and can be reused and does not interfere with other styles.

## App.js
    * The app.js file renders all the modules. This is the starting point for the application.
    * It imports the data file "profile.js", which contains the data for the posts in Object format.
    * It calls the <Head> component with profile as prop.
    * App.js then calls the <Post> component, with post and id as props, using a map for all the posts available in the data file.

## Navbar.jsx
    * Contains the Navbar
    * Shows the Logo, and a button on the right most for stories.

## Head.jsx
    * It renders the Header section.
    * Contains the background Image, profile pic, name, and other details.

## Post.jsx
    * It is responsible for the layout of the Posts. It recieves 2 props.
    * To render the post in three lines, and puts three dots.
    * Upon clicking on the post, it expands to original size.
    * The data is feeded as raw HTML.
    * Hence the data is formatted as it is entered in the data file.

## Footer.jsx
    * Footer contains a copyright statement.
    * On the right most, has two links for instagram and linkedin.
    * The images contain the link to the Creater's respective profile.

## Profile.js
    * It contains the data used for the website, as an Object.
    * {
        id: "mdimranraj",
        name: "Imran Raj",
        profile_pic: "profile.jpg",
        background_image: "bgPic.png",
        followers: "6482",
        following: "245",
        description: "Full Stack Web Developer",
        instagram: "http://www.instagram.com/mdimranraj",
        posts: [
            {
            title: "",
            details: ``,
            date: "",
            views: "",
            mood: "",
            },
        ]
    }


**Note: All other components are small repetitive elements used throughout the website**


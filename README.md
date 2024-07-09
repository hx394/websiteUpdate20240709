## Message Board

# Overview
This is a web app of message board. There are two kind of users: public and manager. Public user can leave a message, and see their own message by session. Manager page requires authentication, and can determine what shows up on the web page.

# Data Model

The application will store website data, Messages and Managing User.

An example website data:  
{  
  website_id: //recognize this website  
  visited: //number of people visited  
  messages://number of messages received  
}


An example message:  
{  
  name: "username"  
  email: //user email address  
  secret: //a boolean tells if it is secret message or not  
  text: //the message body  
  createdAt: //timestamp   
  session_id: //session id  
}  

An example user:  
{  
  username:"username"  
  hash: //a password hash  
}  

### [link to first draft of schemas](/db.js)

# Wireframes



![Alt text](/public/img/display.png?raw=true "display")
<br/>
/ - page for displaying messages

![Alt text](/public/img/add.png?raw=true "display")
<br/>
/add  -page for leave a message

![Alt text](/public/img/manage.png?raw=true "display")
<br/>
/manage  -page for managing

# Site map

![Alt text](/public/img/sitemap.png?raw=true "display")


# User Cases
1. As a public user, I can leave a message.
2. As a managing user, I can receive the message and choose to display it,cancel display it or delete it.
3. The displayed message will be seen by everyone. A user may also see the recent message they left by session.

# Research topics
### (3 points) Perform client side form validation using custom JavaScript or JavaScript library
Description: It validates the user input. If the length exceed maximum or other strange input happens, an error message will be printed to the page(into DOM). I use it to prevent the website been hacked. 
### (5 points) User Authentication using passport
Description: It authenticates the user. It automatically creates hash. Played with it for a while.

### [Link to initial main project file](/app.js)

# Annotations/References Used
[javascript input validation](https://www.w3schools.com/js/js_validation.asp)

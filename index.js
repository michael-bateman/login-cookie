//Cookie login function
//Michael Bateman
//This login script provides easy access for static content website.
//This method is very easy.

//Your login sitemap should look like this, authentication page --> cookie page --> password protected page.


//Put the following code in your cookie page.
//Name SiteSession you want, but that's the name of the cookie, so make sure it matches with the script on the password protected page.
var sessionTimeout = 60000; //time in milliseconds
var loginDuration = new Date();
loginDuration.setTime(loginDuration.getTime()+(sessionTimeout));
document.cookie = "SiteSession=Valid;expires="+loginDuration.toGMTString()+"; path=/";


// Put this at the top of your password protected page.
//Note: If you changed your cookie name on the cookie page, from SiteSession to something else, change it here.
if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
  location.href = "path/to/your/file.html"; //If your user has not authenticated, he is sent back to this page, this should be the authentication page
}
# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

##solution
  ***javascript Es6**
  ***code editor atom***
**this project fills dynamically a nav menu  for a multi section landing page ,each nav item is a link that scrolls to a section in the page ,when scrolling the page both the section and crossponding list item is highlighted with active css class **
-for building the nav we create document fragment and appended created list items to it the finally append
 the document fragment to the nav -
 -to make the anchors scroll to their sections we use ***scrollIntoView function***-
-to detect the section in viewport we use intersect observer function  
 -the section detected in viewport is highlighted with active class using ***classList.add("your-active-class")***-

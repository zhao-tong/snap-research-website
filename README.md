# SNAP

## Technologies

The project was written by simple technologies without any framework or backend
There are NO node modules, packages, or build sources

- HTML5 Boilerplate;
- CSS3;
- Bootstrap Grid v4.3.1
- Graphik fonts
- JQuery 1.10.2
- JQuery templating
- Simple dragscroll.js

## Structure of the project

`I. Main folder includes:`
1. Main structure files:
     - index.html
     - news.html
     - publications.html
     - fellowships.html
     - 404.html<br>

2. Technical files
     - robots.txt (copied from old site)
     - sitemap.xml (copied from old site, need refactor)
     - .git files
     - readme.md (site doc & instructions)

`II. css folder (style files):`
  - bootstrap-grid.css (grid styles lib for responsive layout)
  - main.css (main file with all of the layout styles)
  - normalize.css (simple settings to normalize html docs)
  - old.css (styles from old site, can be removed if no more need)
  - responsive.css

`III. doc folder (base docs of HTML boilerplate, can be removed)`

`IV. fonts folder (full package of Graphik font)`

`V. img folder (few images from old project, most images of project are downloaded from absolute url, where they placed now for old project)`

`VI. js folder (global js files & libraries):`
  - vendor folder (includes modernizr js library)
  - dragscroll.js (library for scrolling)
  - handle-scroll-left.js (custom function to scrool team groups in responsive)
  - jquery.1.10.2.min.js (library for work with DOM)
  - jquery.loadTemplate.min.js (library for building templates)
  - main.js (main js file, includes global scripts, its connected in all pages)
  - plugins.js (js file for plugins)
  - events-lib.js (custom data library with events)
  - publications-lib.js (custom data library with publications)
  - team-members-lib.js (custom data library with team members)

`VII. news folder (include piece of news html files)`

`VIII. publications folder (includes publication.html template)`

`IX. team folder:`
  - category (5 html files with team groups)
  - team-member.html (template for rendering single member)

`X. templates folder (includes all simple templates for project)`

## How it works

There are two variants to show the data:
### 1. Static data
there is a lot of places in the project where you can find the static data (text, links, other)
in files its looks something like this
````
<div>
  <p>Text for example</p>
</div>
````
So you can find the text inside the file & change it to another
<br>
'Text for example' > 'Your new text'
<br>
and you get this:
````
<div>
  <p>Your new text</p>
</div>
````

### 2.Dynamic data
Also you can find empty structures
````
<div class="header-container"></div>
````
That means that the "header-container" is a template and some script download content to it.
<br>
There are two types of templates:
<br>
static (simple, first variant of changing data ) - he calls in script without any parameters
````
$('.home-hero-container').loadTemplate("templates/components/home-hero.html");
````
and dynamic template - calls with parameters (parameter can be single object or array of objects)
````
$('.header-container').loadTemplate("templates/components/header.html",headerRoutes);
````
where is 'headerRoutes' - object of parameters
<br>
so if you need to change something in dynamic template, you need to find parameters object & change him
<br>
for example you want to change logo image in header (after downloading this image to 'img' folder)
<br>
find in project all places, where 'headerRoutes'
````
const headerRoutes = {
    //...something...//
    logo: 'img/snap-logo.svg',
    //...something...//
  };
````
change logo
````
  logo: 'img/new-snap-logo.png'
````
That all!
<br>

### Arrays of dynamic data
in the pages where we need to show many same items, we create the arrays of it
<br>
in js folder you can find next files 'something-lib.js' (example events-lib.js)
<br>
it means that inside this file you can find array of items (events, members, news, publications, fellowships)
<br>
and you can add new items to it
<br>
### Add publications
for example you need to add new publication:
1) open publications-lib.js, and find the last publication
2) copy the structure of if
````
{
  id: 9,
  date: 'September 28, 2020',
  //...other fields...//
}
````
3) paste it under the last publication structure after comma
4) change data in the fields of pasted structure

when you find field 'eventID: something', you need to paste the id of event from another lib
<br>
if you didnt find this event, you can create new(same as create a publication), setup id to it, and add id into new publication

> ! the id inside one library must be unique
> <br>
> all publications shows in date order (newest first)

### Add news
1) find news-lib.js
2) add new structure in the bottom of array (the same as publications)
3) in news/detail folder create new html template, or copy one of ready templates inside this folder
4) the name of new file must be unique, it can be 'super-puper-challenge.html'
5) change layout inside new template
6) inside news-lib.js change the fields what you want
7) the description field must contain the route for your new template, and the slug must be the part of template name
````
  slug: 'super-puper-challenge',
  description: "../news/detail/super-puper-challenge.html",
````
after that you can find new list of news on your website

### Add team memeber
1) find team-members-lib.js
2) add new structure in the bottom of array (the same as publications)
3) change backUrl what team you need to go back after pushing back button
4) find `teamMembersForTeamCategory` object, there is an object of teams
5) add new member id to correct team

for example you create new member with id `318`, and wants to show him inside `creative vision` team
<br>
so find `creativeVision` array, and add id to it
````
const teamMembersForTeamCategory = {
  //...some fields...//
  creativeVision: [300, 301, 302, 303, 304, 305, 318],
  //...some fields...//
}
````

for better use we call member id's with a hundred period

- computationalImaging form `0`
- computationalSocialScience from `100`
- humanComputerInteraction from `200`
- creativeVision from `300`
- admin from `400`




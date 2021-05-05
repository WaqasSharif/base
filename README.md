
### Requirements

To use this template, your computer needs:

-	Node.js is used to run the build processes. https://nodejs.org/en/download/
- Run ` node -v ` in the terminal
-	npm (Node comes with npm installed so you should have a version of npm.) Used to manage development dependencies.
-  Run ` npm -v`  in the terminal
-	Gulp – task runner
	`npm install -g gulp`
-	Run `gulp -v ` in the terminal

### Installing:

- Clone this repo: `git clone https://github.com/johndavemanuel/bootstrap-gulp-starter-template.git`
- Navigate into the repo directory: `cd bootstrap-gulp-starter-template`
- Install all node packages: `npm install`
- Run `gulp development`
- Your site is now viewable at this URL: http://localhost:3000
- To create compressed, production-ready assets run `gulp production`. This will delete everything in the dist folder and recreate all of your complied files. Never make updates directly into the dist folder as these files get overridden each time.

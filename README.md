# pisgah
React Based Component Framework

## Build Storybook
    gulp build
    
    gulp start-storybook
    
  ### Add Semantic UI React
  
    npm install --save semantic-ui 
    at 'run setup', choose Automatic: 
    ? Set-up Semantic UI (Use arrow keys)
    ❯ Automatic (Use default locations and all components) 
    and your project folder:
    ? We detected you are using NPM Nice! Is this your project folder? /Users/cmathers/Documents/projects/laserfocus (Use arrow keys)
    Yes 
    Location of semantic project:
    ? Where should we put Semantic UI inside your project? 
    (semantic/) 
      
    npm install --save semantic-ui-react
    yarn add semantic-ui --dev
    
  ##### cd to sematic folder, then
    gulp build (initial build of the JS, CSS, and assets files, rebuild after altering theme.config)
    gulp build-css (build the CSS only)
    gulp watch (continous build of CSS files)


Open `http://localhost:6006/` to see the storybook
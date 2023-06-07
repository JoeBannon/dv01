
### To Run This Project

1) Add the Live Server Extension to VS Code, settings are at '.vscode/settings.json' and shouldn't need changing.
2) You can click "Go Live" at the bottom of VS Code, or right click the "public/index.html" file and select "Open with Live Server".
3) If it doesn't automatically open your browser, you can go to "http://localhost:5502" or "http://localhost:5502/index.html"

### To Build This project

1) Run "npm install", or "npm install --legacy-peer-deps".
2) Modify webpack.config.mjs, change the src and dist folder paths to this repo.
3) Run "npm run start", Live Server will update the web page anytime changes are made.
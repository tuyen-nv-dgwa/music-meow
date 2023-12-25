# Deploy project React-Vite in GitHub Pages


In source project React-Vite, create file .env :
``` 
VITE_BASE_URL=/your-repository-name/
```


In file vite.config.js, add config base to define URL for GitHub Pages:
```
export default {
  base: '/your-repository-name/',
  // ... other config settings
}
```


next, install package vite-plugin-gh-pages for deploy project in GitHub Pages.
```
npm install vite-plugin-gh-pages --save-dev
```


add plugin vite-plugin-gh-pages to file vite.config.js:
```
import VitePluginGhPages from 'vite-plugin-gh-pages' // Add this line

export default defineConfig({
  plugins: [
    VitePluginGhPages() // Add this line
  ]
})
```


create script in file package.json to build and deploy project.
```
"scripts": {
  "build": "vite build",
  "deploy": "npm run build && npx vite build --base /your-repository-name/ && npx gh-pages -d dist"
}
```

Run script deploy cmd:
```
npm run deploy
```


Error "gh-pages' is not recognized as an internal or external command, operable program or batch file"  the reason may be package gh-pages not install 
```
npm install gh-pages --save-dev
```
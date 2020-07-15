# A Web App to Display your Region's Carbon Intensity

This app uses a built-in Azure Function to display your local carbon usage. It's a basic Vue.js app created using the [Vue CLI](https://cli.vuejs.org/) that uses Axios to call the Azure function. The background of the app changes in color based on your region's usage. Change the query parameter for region in your app to get a different reading.

**This app is hosted on Azure Static Web Apps**:

To launch this app on ASWA, fork this repo to your own GitHub account and either login to the [Azure Portal](https://aka.ms/trystaticwebapps) or use this button to deploy your code to the portal:

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false&WT.mc_id=green-github-jelooper#create/Microsoft.StaticApp)

Alternately, fork this repo and run it using the [Vue CLI](https://cli.vuejs.org/), then deploy it to Static Apps via the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps?WT.mc_id=green-github-jelooper).

You can run the Azure function that is contained in the `/api` folder of this web-app folder using the [Azure Extensions](https://code.visualstudio.com/docs/azure/extensions?WT.mc_id=green-github-jelooper) from within VS Code. Before running your function on port 7071, make sure to cd to the api folder and `npm install` dependencies.

> You can read more about how to build and host Azure Static Sites on the Microsoft [Docs](https://docs.microsoft.com/azure/static-web-apps/overview?WT.mc_id=green-github-jelooper). You can also walk through how to publish your static sites to Azure on Microsoft [Learn](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api?WT.mc_id=green-github-jelooper)

Visit this app live at https://happy-ground-0f458bb0f.azurestaticapps.net/ to see France's current carbon intensity. Change the region by adding query params in the URL: https://happy-ground-0f458bb0f.azurestaticapps.net/#/?region=US-NEISO. A list of these zones is [here](http://api.electricitymap.org/v3/zones).

---

## Web app setup (web code contained in `/app` folder, API contained in `/api)`

```
cd app && npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

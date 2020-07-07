# A Web App to Calculate your Region's Carbon Intensity

This app uses a separate Azure Function to get your local carbon usage. It's a basic Vue.js app created using the Vue CLI that uses Axios to call the Azure function. The background of the app changes in color based on your region's usage.

This app is hosted on Azure Static Web Apps:

To launch this app on ASWA, fork this repo to your own GitHub account and either login to the [Azure Portal](https://aka.ms/trystaticwebapps) or use this button to deploy your code to the portal:

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false&WT.mc_id=green-github-jelooper#create/Microsoft.StaticApp)

Visit this app live at https://happy-ground-0f458bb0f.azurestaticapps.net/ to see New England, US's carbon intensity.

---

## Project setup

```
npm install
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
# A Green Azure Function

This function calls the [co2signal API](https://docs.co2signal.com/#introduction) by [tmrow](https://www.tmrow.com/) to get your region's carbon usage. Sign up for co2signal's API access here:

Create an [Azure Function](https://docs.microsoft.com/en-us/learn/modules/create-serverless-logic-with-azure-functions/?WT.mc_id=green-github-jelooper) using [Visual Studio Code](https://code.visualstudio.com/Docs?WT.mc_id=green-github-jelooper) and deploy it locally or to Azure.

Once your function is deployed, you can use it for various purposes, for example in a [Logic app](/logic-app)

To run this function locally on port 7071, use Visual Studio Code with the [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions). You can test it using any country code from this list; try US/New England like this: http://localhost:7071/api/getCarbonUsage?region=US-NEISO

There's a LOT more you could do with API calls, Functions and Logic apps. What will you build? Let me know @jenlooper on Twitter!

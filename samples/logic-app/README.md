# A green logic app

This app calls the getCarbonUsage Azure function hourly to get a reading of your region's carbon usage. It's currently set to read 'FR' as a region, but you can use the Logic App Designer to input pertinent information for your region.

This logic app was built using the logic app designer in Microsoft Azure. Learn more about it [here](https://azure.microsoft.com/services/logic-apps/?WT.mc_id=green-github-jelooper)

![Logic App Designer](designer.png)

Currently it is set to run every hour and email you your region's carbon usage. Maybe you can make it do something else? Try logic apps by starting [here](https://docs.microsoft.com/learn/modules/intro-to-logic-apps/?WT.mc_id=green-github-jelooper).

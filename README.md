# 🌱🌿Green Project Micro-Hackathon☘️🌳

Would you like to try to create a project that has a 'carbon trigger'? A carbon trigger can be created by calling an API that calculates when the electricity production in your local area is the most 'green' - a great moment to run a dishwasher or a gas dryer.

## Suggested Projects

Create a web app that:

- changes color according to the carbon intensity of your region

- includes a running tally, updated hourly, with a chart of the carbon intensity of your region

- tells you which of your appliances would be good to run at which hour

Create a connection between an Azure Function using one of the APIs below to trigger a Logic App to do something like send a reminder to charge your EV 

## Hackathon Instructions

If you're participating in a hackathon, here are [instructions](hackathon.md).

## Workshop Instructions

Participating in a workshop? Read instructions [here](workshop.md).

## Sample Code

🌱 A [static web app](./samples/web-app) to display your region's carbon intensity

🌱 A [logic app](./samples/logic-app) to send an email about your region's carbon intensity hourly

🌱 A standalone [Azure function](./samples/function-app) to query the [co2signal API](https://docs.co2signal.com/#introduction) by [tmrow](https://www.tmrow.com/). Note, this function is used by the static web app so it is in the same folder as the web app, but you could use this completely separately for other uses.

## Useful APIs

https://docs.co2signal.com/ by https://www.tmrow.com/

https://www.watttime.org/


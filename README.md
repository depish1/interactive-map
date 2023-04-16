# Interactive map

## Table of content

[About](#about)  
[Technologies](#technologies)  
[Installation](#installation)  
[Usage](#usage)  
[App preview](#app-preview)

## About

!! Work in progress

👋 Hello! **Interactive map** is a web application for reading data about countries of the world from an external api. The application has an interactive map from which we can choose the countries we want to learn about. After a few clicks, they will be added to the list in the side panel where you can read the downloaded data about them.
For optimization, I used the Context API for data storage with the implemented publish-subscribe pattern in order to limit the number of rerenders.

Live: https://interactive-map-mu.vercel.app

## Technologies

- React
- Typescript
- Context API (publish-subscribe pattern) (_global store_)
- Redux Query (_API calls_)
- Vite (_builder_)
- Styled Components (_styles_)

## Installation

- Clone the repository: **git clone https://github.com/depish1/interactive-map**
- Install dependencies: **npm install**
- Run the app: **npm run dev**

## Usage

- Select a country by clicking on its borders on the map or search by entering its name in input.
- Browse selected countries listed in the side panel.
- Display detailed information about the selected country by clicking on it from the list in the side panel.
- Zoom in/out and move the map with the mouse.

## App preview

![enter image description here](https://user-images.githubusercontent.com/61850475/232348912-9066adbd-0d9c-4bcd-9355-ea7dd9b37986.png)

![enter image description here](https://user-images.githubusercontent.com/61850475/232348945-0bd282f4-5866-4fd0-9e3b-221abd9eb50a.png)

![enter image description here](https://user-images.githubusercontent.com/61850475/232348981-5d7978ea-9d47-4710-b1db-40f1513d62d2.png)

# Project Overview

## Project Name

'wHaT tHe FoX?!'

## Project Description

'wHaT tHe FoX' will generate your own personal spirit fox! You'll get to give your fox a bit of spice.

## API and Data Sample

--> https://randomfox.ca/floof/ <--
JSON
{
image: "http://randomfox.ca/images/29.jpg",
link: "http://randomfox.ca/?i=29"
}

## Wireframes
Page 1: Intro page that asks the user a few questions to generate spirit fox.
Page 2: Generates spirit fox.
https://wireframe.cc/pro/pp/7367c1067349530

#### MVP

- User will be greeted with friendly Fox.
- Fox will ask some questions and the user will be able to input information.
- A picture af a spirit fox will generate onto the page when the user is done.

#### PostMVP  
- Add second API: Random fox facts?
- I would also like to add a mouseover event where fox sounds play.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt | Complete
|June 9| Wireframes / Priority Matrix / Timeframes | Complete
|June 10| Core Application Structure (HTML, CSS, etc.) | Complete
|June 11| Initial Clickable Model  | Complete
|June 12| MVP | Complete
|June 15| Present | Incomplete

## Priority Matrix

Time Chart
https://imgur.com/a/3qULEdm

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 6hrs| 3hrs | 3hrs |
| Working with API | M | 3hrs| 6hrs | 6hrs |
| Styling | H | 6hrs| 6hrs | 6hrs |
| Testing | H | 4hrs| 2hrs | 6hrs |
| Post MVP | M | 6hrs| 6hrs | 6hrs |
| Total | H | 25hrs| 20hrs | 27hrs |

## Code Snippet 

```
async function getFox() {
  let response = await axios.get(randomFox)

  let foxpix = response.data.image
  let helloFren = `Hello fren! My name is ${inputFruit.value}y ${inputSmoosh.value}z. I hail from a far away land called San ${inputVaca.value}. I am your Spirit Fox. Floof Furrever.`
  console.log(helloFren)

  fox.innerHTML += `
  <img src= ${foxpix}>
  <p>${helloFren}<p>`
}
```

## Change Log
 Not many changes other than an attempt to try to reset the picture. 

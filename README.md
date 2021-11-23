# Project Name
Gamer Shelf

# Live Site
Live site: https://gamer-shelf.herokuapp.com/

# Summary
This project aims to help gamers organize their games. Whether gamers desire to make a wishlist of games or games they're playing. This website future scope is to have profiles and a social media aspect to show off progress and completion simliar to my anime list. As of 11/22/2021 the website allows gamers to make shelves and add games to them as well as the ability to review it for others.

# Screenshots
![Capture2](https://user-images.githubusercontent.com/83061284/143091859-55cb9bb4-1302-4c6b-9230-7b46a0106906.JPG)
![Capture3](https://user-images.githubusercontent.com/83061284/143091862-8d57d804-fdd3-4f42-a600-0a2f321766c4.JPG)
![Capture](https://user-images.githubusercontent.com/83061284/143091863-36bad400-9817-40aa-9352-9e4e1b7a08aa.JPG)

# Instructions on running the build
1. Pull everything onto local
2. Run npm install on both backend and frontend
3. On the backend, setup a .env matching the example and create your db user in postgresql.
4. Run in your backend CLI: npx dotenv sequelize db:create, npx dotenv sequelize db:migrate, npx dotenv sequelize db:seed:all
5. Run npm start in both frontend and backend

# Technology
This project runs on
* ReactJs
* NodeJs
* Express
* Sequelize
* FakerNPM
* PostgreSQL
* Redux

# Future Features
* User Profile Page
* Search
* Steam API integration

# Planning and Execution
## Implementation
Many inner dependent data requires a lot of planning. Some non essential data are individually fetched from the backend while essential user relevant data is loaded into Redux for use from page to page. From previous projects, loading everything into redux makes the redux store a huge mess with much unused data. This time around I looked into many small fetches vs one big fetch. After researching and experimenting, I believe that many small fetches are incredibly versatile with the downside of not everything will load together. The speed is just as fast as a batch fetch. After the data was organized it was merely hooking pages and modals together to display the data in a pleasing manner.

## Planning
A schema and wireframe of is included in the project Wiki and can be largely attributed to the ease of developing this project. Because knowing ahead of time of the data being worked with, I was able to deduct what to add to redux store and what could be individually fetched. The rest I planned around knowing my abilities as a developer and what I hope to experiment out. Components such as the login page sliding pictures and sign up carousel was not planned and was something I wanted to explore. I had to stop and think about layout twice to make sure the functions are intuitive.

## Challenges
I spent a lot of time on CSS for this project to make it as presentable as possible. Ive had to stop and really think about if this layout is ok and would users understand the function. Or if there would be any buttons somewhere they shouldnt be. I believe there are still much work to be done on the CSS such as adding different screen support.

# Code Highlights


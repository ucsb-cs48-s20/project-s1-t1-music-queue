# project-s1-t1-music-queue

## MusicQ

Tech-stack: next.js

Description: This app will allow multiple people to queue songs to a group queue instead of having only one person play the music. It wouldn't be first in first out though, there will be a voting/ranking system that allows people to up/agree with other suggestions. The user who creates the room has the ability to share a code or link that allows other users to join. 
Goal: Listen to the most liked songs between your friends. 
Accomplish goal: using upvotes and downvotes 

  User Roles: 
  * admin: user who creates the room and controls what music is played 
  * users: others who can upvote and downvote

Things to look into: 
* spotify API vs embedding youtube music links 
* upvote downvote system for ranking songs 

Members: 
* Lily Ou - oulily
* Samhita Honnavalli - samhita-h
* Jennifer Lo - jenny353
* Gautam Mundewadi- gmundewadi
* Ori Mizrahi- omizrahi99
* David Farias-Llerena - dfariasllerenas

To deploy MusicQ yourself click the link below:
* [Deployment Instructions](./docs/DEPLOY.md)


| Command                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `npm install`             | Install Dependencies                                  |
| `npm run dev`             | Runs locally in development mode                      |
| `npm run start`           | Runs in production mode (requires `PORT` env var)     |
| `npm run test`            | Runs entire test suite                                |
| `npm run test:cypress`    | Runs Cypress integration tests                        |
| `npm run test:cypress`    | Runs `prettier` format tests                          |
| `npm run fix:format`      | Reformats all project files using `prettier`          |
| `npm run storybook`       | Run React Storybook (made available at localhost:6006 |
| `npm run build-storybook` | Create static react storybook for GitHub Pages        |

Note that while no environment variables are required to run `npm run dev`, running `npm run start` requires that the `PORT` environment


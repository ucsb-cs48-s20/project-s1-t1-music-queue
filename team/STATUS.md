# Sprint Planning, 05/12/2020
  
* Leader: Ori
* Present: all
* Absent: none
  
## Sprint Goal for 05/12-05/21
  
Which of the 10 powerful questions did you ask?

3. If we were paying for this Sprint with our own money, what work would give us the highest chance to get that money back?
 - Sharing a "MusicQ" ature would make people use the app
 - The upvote/downvote feature 

8. What would need to happen while working on this Sprint Goal that would be cause for celebration?
 - Have other students test our app and be able to use it correctly. Without us telling them what to do
 - Getting two people synced into the same room
 - Various parties at the same time

6. If we suddenly have half the team available and we can do only half the work required for the Sprint Goal, what should absolutely be in there in order for us to still be okay with the outcome? What can we let go of for now and return to later?
- Room sharing feature. Create, join, and delete a room
- Playing a song automatically
- CSS / Bootstrap can be cut ... not too much :(

Describe your sprint goal here.
- Generate and share a MusicQ key. People can join the queue using this key
- Top song autoplays
- Once a song starts playing don't sort that song and keep it at the top.
- One vote per song per person

- (thoughts for next sprint): Distinguish between admin and user to only play song on admin's device. The admin can choose if they want to make music play simultaneously for everyone
  
Describe briefly how you came up with that goal.
- We discussed what was necessary and what was not. Also disscussed what we can leave out for the next sprint. These questions were helpful!
  
## Discussion of previous Sprint Goal
  
Briefly: was the sprint goal acheived?  Was it too ambitious?  Too modest?
- The sprint goal was good. We acheived most of it!

# Status, Monday 04/27/2020

## Sprint Goal for Monday 04/27 through Monday 05/04

* Query songs and incorporate auth0
* See a dynamic list populated
* Connect users to a virtual room

## Brief description of MVP

Being able to query songs from the spotify api and see a dynamic list of these songs. The first song that is queued will begin to 
play. A shared room key allows multiple users to connect to a single virtual room. 

## Production App placeholder

(Enter a link here to your production app, e.g. <https://cs48-s20-s1-t1-prod.herokuapp.com/>)

(Then Enter only one of these)

* Team is on track to complete production app placeholder by noon Thursday (04/30/2020)

(If help is needed, specify here where the team is stuck.)

## MVP Status

(Enter only one of these)

* Team is on track to complete all stories for MVP by noon a week from Thursday (05/07/2020)

(If applicable, include items below.)

What obstacles remain to completing MVP:
* Dynamically re-render queue of songs
* Real-time connection to a virtual room
* Figure out the redirect urls
* Query for songs using the spotify api

Support that would be helpful from course staff to completing MVP
* Look over PRs and repos 
* MongoDB vs Socket.io. Could we meet to discuss this on Tuesday 3:30

## (Include anything else your team thinks is important to document)

(Choose an appropriate heading or headings.  These might include:)

(Unresolved application design issues)
* How to "connect" users to a virtual room

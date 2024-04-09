# EventHive (meetup-app)

## Description

**Meetup** is a serverless, progressive web application (PWA) built with React using a **test-driven development** (**TDD**) technique. The application uses the Google Calendar API to fetch upcoming events.

## Application Features

1. Filter events by city
2. Show/Hide Event Details
3. Specify Number of Events
4. Use the App When Offline
5. Add an App Shortcut to the Home Screen
6. Display Charts Visualizing Event Details

## User Stories and Scenarios (Gherkin)

**User Story**: As a user, I want to filter events based on the city I select so that I can easily find local events in my city.

- **Scenario 1**: User filters events by city by choosing/clicking from dropdown
  - Given the user is on the events app
  - When the user selects/clicks a city from the dropdown menu or search bar
  - Then the user should see a list of events happening in that city
- **Scenario 2**: User filters events by city using search bar filter
  - Given the user is on the events app
  - When the user types into the search bar
  - Then the user should see a list of all cities matching what they’ve typed in the search, and once clicked, should display events happening in that city

**User Story**: As a user, I want to show/hide additional event details based on a button click so that I can control the amounts of details shown on the screen.

- **Scenario 1**: Event details are shown when user clicks the “Show Event Details” button
  - Given the user is on the events app
  - When the user clicks the “Show Event Details” button
  - Then a modal pops up with all details about the event they clicked on
- **Scenario 2**: Event details are hidden when user clicks the “Hide Event Details” button
  - Given the user is on the events app
  - When the user clicks the “Hide Event Details” button
  - Then the modal displaying event details goes away and reverts to default state, displaying “Show Event Details” button

**User Story**: As a user, I want to see only the amount of events displayed that I specify so that I am not overwhelmed by all events at once.

- **Scenario 1**: When a user specifies a number, that number of events are shown
  - Given the user is on the events app
  - When the user specifies a number of events by choosing a number in the dropdown or typing in the search bar
  - Then the number of events chosen should be displayed
- **Scenario 2**: When a user hasn’t specified a number, all events are shown by default
  - Given the user is on the events app
  - When the user doesn’t specify a number of events
  - Then all events should be displayed by default

**User Story**: As a user, I want to be able to use the Meetup app while I am offline so that I can use the app even when I don’t have access to the internet.

- **Scenario 1**: User is able to use the Meetup while offline
  - Given the user has previously used the Meetup app and data has been cached/saved
  - When the user launches the app while offline/without an internet connection
  - Then the user should still be able to (only) view previously accessed/saved event details and profiles
- **Scenario 2**: When user launches the app while offline, a notification should appear notifying the user that they are in offline mode
  - Given the user is on the app while offline
  - When the user launches the app while offline/without an internet connection
  - Then the user should receive a notification stating that they are in offline mode and have view-only access

**User Story**: As a user, I should be able to add an app shortcut to the home screen so that I can quickly access the Meetup app without having to navigate through menus.

- **Scenario 1**: User adds app shortcut to home screen
  - Given the user is on the events app
  - When the user clicks the “Add Shortcut to Home Screen” button
  - Then the user should be able to access the Meetup app via the shortcut on the home screen
- **Scenario 2**: User removes app shortcut from home screen
  - Given the user is on the home screen
  - When the user long-presses the Meetup app icon on the home screen and clicks “Remove Shortcut from Home Screen” button
  - Then the shortcut should be removed and the user should no longer see a Meetup app shortcut on the home screen

**User Story**: As a user, I want to see a chart visualizing event details so that I can efficiently view trends and compare with other events.

- **Scenario 1**: User views attendance chart for an event
  - Given the user is viewing the chart details of an event
  - When the user clicks on the chart icon
  - Then the user should see a graph/chart that visualizes attendance trends, prices, popularity, etc.

## Access the Hosted Site

Click [here](https://evandanowitz.github.io/meetup/) to visit the application online.

## Technologies

- [React](https://react.dev/)

## Dependencies

- @testing-library/jest-dom: ^5.17.0
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-scripts: 5.0.1
- web-vitals: ^2.1.4
- workbox-background-sync: ^6.6.0
- workbox-broadcast-update: ^6.6.0
- workbox-cacheable-response: ^6.6.0
- workbox-core: ^6.6.0
- workbox-expiration: ^6.6.0
- workbox-google-analytics: ^6.6.1
- workbox-navigation-preload: ^6.6.0
- workbox-precaching: ^6.6.0
- workbox-range-requests: ^6.6.0
- workbox-routing: ^6.6.0
- workbox-strategies: ^6.6.0
- workbox-streams: ^6.6.0

## Developer Dependencies

- gh-pages: ^6.1.1

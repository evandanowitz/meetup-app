Feature: Specify Number of Events
  Scenario: When user has not specified a number, 32 events are shown by default.
    Given the user has not typed a specific number of events to be displayed
    When the user is viewing the list of events
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed.
    Given the user typed a specific number of events to be displayed
    When the user is viewing the list of events
    Then the exact number of events that the user specified should be displayed
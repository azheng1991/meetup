Feature: Specify the number of events to be shown

    Scenario: When user hasn’t specified a number, 32 is the default number
        Given user hasn't specified an event number
        When the user opens the app
        Then the user should see 32 upcoming events

    Scenario: User can change the number of events they want to see
        Given user opens the app
        When user changes the number of events
        Then the user should see the number of events specified

## Documentation

## Installation:

1. You need to install npm install
2. You need to install pod install in ios folder
3. yarn start or npm start

### Atomic Design for react native architecture

Atomic design further solidifies the idea of seperating screens into components and scenes (containers). The design primarily focuses on reusablity of code, which brings us to the differentiation of components into atoms, molecules and organisms. Analogous to the Atomic design of chemicals, components are seperated by their composition. The components require increasing context as their complexity increases, since each component is tested, this promotes a more granular test coverage.

- **Atoms**
  Atoms are the smallest components that can be reused. Button, Text, and Icons are good example of Atoms. Atoms can be used without context and cannot be further divided.

- **Molecules**
  Molecules are built from one or more atoms that are slightly complex presentational components.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

### Description

#We are making a mobile friendly UI as per instruction and given xd link.
#We are making 2 pages design from xd and another pages as per needs.

#What is in the application?: This is a demo application. That will help to manage users weekly expenses and list the all last 7 days expenses. User can also manage his weekly limit on spending limit page.

1. Debit Card page: there is only one functionality dynamic which is progress bar. Progress bar show a weekly total limit and expense in green color so use know how much limit is remain and how much is used.

2. Weekly spend limit page:
   => User can set the limit for one week and after a week expense and limit automatically reset and user can set new limit from next week. When ever user can add a new limit expense and old limit will be reset and count next 7 days as new coming week.
   => Below of input box there is some recommendation for adding amount so user don't need to type and easily can add limit only using one click.

3. Home (Expense) page: User can see last 7 days expanse in the list with date, title, description, and amount. as of now we are not providing delete and edit functionality but we can do it as well.

4. Add expense: User can add expense from this page. There is title, description and amount.

5. We write a some test case of application.
6. shoping: to show api integation with fake Data Api heare, you can see list of multiproduct. this page is create to only showing the Api Intigation.

Capability: In the application we used reduxt thunk but we also know the redux saga and in past we work on redux saga.

<b>Feedbacks will be appreciated</b>

# Roll20 Clone
#### (Proper Clone Name TBD)

[Development Site @ Heroku](https://google.com)

[Project Tracker @ Trello](https://trello.com/b/GbL9K7Bt/roll20-clone-project)

## Minimum Viable Product

This project will produce a WebApp inspired by [roll20](roll20.net) that will provide as a core functionality a virtual tabletop for playing tabletop games online. It will be built with Ruby on Rails, React/Redux, and a heavy canvas component. By the end of Week 9, it will provide the following with crisp styling and bug-free navigation:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and demo login
- [ ] Game display and listing
- [ ] Chat with roll commands
- [ ] Persistable and Jointly manipulable tabletop representation
- [ ] Asset library from which users can import images and tokens to the tabletop and to which they can upload their own images.

## Design Docs
* [View Wireframes](./wireframes)
* [React Components](./component-hierarchy.md)
* [API endpoints](./api-endpoints.md)
* [DB schema](./schema.md)
* [Sample State](./sample-state.md)

## Implementation Timeline

### Phase 1: Backend Setup and Front-End User Authentication (1 Day)
**Objective:** Functioning Rails project with front-end authentication and user bootstrapping. Set up demo login. 

### Phase 2: Games Model, API, components (minus play) (2 Days)
**Obective** Games can be created, read, and edited through the API. They appear indexed by player on player show pages. Players can sign up for games if there's enough room. GMs can sign up players or remove players from games. 

### Phase 3: PlayTable Model, API, and PlayTable component. (4 Days)
**Objective** Players/GMs can manipulate map and tokens in PlayTable component. Concurrent changes are either prevented or reconciled. Table state can be saved and loaded and is pushed to other players on change.

### Phase 4: Chat/Messages Model, API, and component (2 Days)
**Objective** Players/GMs can write and view messages to the chat component. Chat will support at least a roller command.

### Phase 5: Assets Model, API, and component (2 Days)
**Objective** Players/GMs can upload assets to external service and import them into the PlayTable. Such tokens can be marked with labeled and colored dots.

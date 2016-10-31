## Component Hierarchy

**Root**
 - HeaderContainer
   - Header
 - Footer

**Splash**

**AuthFormContainer**
- AuthForm
 - Need to allow for truncated container for header dropdown.

**UserPageContainer**
- UserPage
 - UserGameSearchIndex // One for each of played and run games
   - UserGameSearchForm
   - UserGameIndexItem

**GameSearchContainer**
- GameSearch
  - GameSearchIndex
    - GameSearchForm
    - GameSearchIndexItem

**GameFormContainer**
- GameForm

**GameListingContainer**
 - GameListing
   - GamePlayerList

**PayTableContainer**
- PlayTable
  - Messages

  ## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "Root" |
| "/ (IndexRoute)" | "Splash" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "UserPageContainer" |
| "/users/:id" | "UserPageContainer" |
| "/games" | "GameSearchContainer" |
| "/games/:id" | "GameListingContainer" |
| "/games/:id/play" | "PlayTableContainer" |
| "/games/:id/edit" | "GameFormContainer" |
| "/games/new" | "GameFormContainer" |

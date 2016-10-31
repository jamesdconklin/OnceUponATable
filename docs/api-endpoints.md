# API endpoints

## HTML API

### Root
- `GET /` - loads React web app.

## JSON API

### Users
- `POST /api/users`
  - User signup
- `GET /api/users/:id/games`
  - Load list of games player is running or playing.

### Session
- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Games
- `GET /api/games`
  - Search for games via provided gm=, tag=, and system= query params.
- `GET /api/games/:id`
- `POST /api/games`
- `PATCH /api/games/:id`
- `GET /api/games/:id/table`
  - Loads playable table component for game.
- `PATCH /api/games/:id/table`
  - Saves table component for game.

### Signups
- `POST /api/games/:id/signups`
  - Try to sign up for a game.
- `PATCH /api/games/:id/signups`
  -  Approve or disapprove a pending sign-up.

### Tags
- `GET /api/tags`
  - Load a list of tags matching given query string.  
- `POST /api/games/:gameID/tags/`
  - Add tag to a game.
- `DELETE /api/games/:gameID/tags/:tagID`
  - Remove tag from game.

### Assets
- `GET /api/assets`
  - Load a list of assets matching given query.
- `POST /api/assets`
  - Upload new asset.
- `DELETE /api/assets/:id`
  - Delete reference to asset and delete it from external store.

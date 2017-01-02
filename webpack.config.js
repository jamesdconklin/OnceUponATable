var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    root: __dirname,
    alias: {
      // Actions
      AssetActions: "frontend/actions/asset_actions.js",
      CanvasActions: "frontend/actions/canvas_actions.js",
      GameListingActions: "frontend/actions/game_listing_actions.js",
      GameIndexActions: "frontend/actions/game_index_actions.js",
      MessageActions: "frontend/actions/message_actions.js",
      SessionActions: "frontend/actions/session_actions.js",

      // Components
      Footer: "frontend/components/footer/footer.jsx",
      Header: "frontend/components/header/header.jsx",
      GameFormContainer: "frontend/components/game/forms/game_form_container.js",
      GameForm: "frontend/components/game/forms/game_form.jsx",
      GameIndexItem: "frontend/components/game/game_index/game_index_item.jsx",
      GameIndex: "frontend/components/game/game_index/game_index.jsx",
      GameListingContainer: "frontend/components/game/game_listing/game_listing_container.js",
      GameListing: "frontend/components/game/game_listing/game_listing.jsx",
      PlayerLink: "frontend/components/game/game_listing/player_link.jsx",
      UserSignupContainer: "frontend/components/game/game_listing/user_signup_container.js",
      UserSignup: "frontend/components/game/game_listing/user_signup.jsx",
      AssetsContainer: "frontend/components/playmat/assets/assets_container.js",
      Assets: "frontend/components/playmat/assets/assets.jsx",
      CanvasObject: "frontend/components/playmat/assets/canvas_object.js",
      ImageAsset: "frontend/components/playmat/assets/image_asset.js",
      Square: "frontend/components/playmat/assets/square.js",
      CanvasState: "frontend/components/playmat/canvas/canvas_state.js",
      CanvasView: "frontend/components/playmat/canvas/canvas_view.js",
      Canvas: "frontend/components/playmat/canvas/canvas.jsx",
      MessagesContainer: "frontend/components/playmat/messages/messages_container.js",
      Messages: "frontend/components/playmat/messages/messages.jsx",
      Sidebar: "frontend/components/playmat/sidebar/sidebar.jsx",
      SidebarContainer: "frontend/components/playmat/sidebar/sidebar_container.js",
      ToolboxContainer: "frontend/components/playmat/toolbox/toolbox_container.js",
      Toolbox: "frontend/components/playmat/toolbox/toolbox.jsx",
      SessionFormContainer: "frontend/components/session/session_form_container.js",
      SessionForm: "frontend/components/session/session_form.jsx",
      SplashContainer: "frontend/components/splash/splash_container.js",
      Splash: "frontend/components/splash/splash.jsx",
      UserContainer: "frontend/components/user/user_container.js",
      User: "frontend/components/user/user.jsx",
      GamesTab: "frontend/components/header/games_tab.jsx",
      UserTab: "frontend/components/header/user_tab.jsx",
      HeaderContainer: "frontend/components/header/header_container.jsx",
      CanvasContainer: "frontend/components/playmat/canvas/canvas_container.js",

      // Roots/Routes/Entries
      App: "frontend/components/app.jsx",
      Root: "frontend/components/root.jsx",
      Entry: "frontend/entry.jsx",

      //Middleware
      AssetMiddleware: "frontend/middleware/asset_middleware.js",
      CanvasMiddleware: "frontend/middleware/canvas_middleware.js",
      GameListingMiddleware: "frontend/middleware/game_listing_middleware.js",
      GameIndexMiddleware: "frontend/middleware/game_index_middleware.js",
      MessageMiddleware: "frontend/middleware/message_middleware.js",
      RootMiddleware: "frontend/middleware/root_middleware.js",
      SessionMiddleware: "frontend/middleware/session_middleware.js",

      //Reducers
      AssetReducer: "frontend/reducers/asset_reducer.js",
      CanvasReducer: "frontend/reducers/canvas_reducer.js",
      GameListingReducer: "frontend/reducers/game_listing_reducer.js",
      GameIndexReducer: "frontend/reducers/game_index_reducer.js",
      MessageReducer: "frontend/reducers/message_reducer.js",
      RootReducer: "frontend/reducers/root_reducer.js",
      SessionReducer: "frontend/reducers/session_reducer.js",

      // Store
      Store: "frontend/store/store.js",

      //Util
      AssetUtil: "frontend/util/asset_api_util.js",
      CanvasUtil: "frontend/util/canvas_api_util.js",
      GameUtil: "frontend/util/game_api_util.js",
      MessageUtil: "frontend/util/message_api_util.js",
      SessionUtil: "frontend/util/session_api_util.js",
      UserUtil: "frontend/util/user_api_util.js",
      CanvasElementUtil: "frontend/util/canvas_element_util.js",
      DemoLogin: "frontend/util/demo_login.js"
    },
    extensions: ["", ".js", ".jsx" ]
  }
};

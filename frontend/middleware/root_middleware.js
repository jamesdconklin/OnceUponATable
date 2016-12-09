import { applyMiddleware } from 'redux';
import SessionMiddleware from 'SessionMiddleware';
import GameIndexMiddleware from 'GameIndexMiddleware';
import GameListingMiddleware from 'GameListingMiddleware';
import CanvasMiddleware from 'CanvasMiddleware';
import AssetMiddleware from 'AssetMiddleware';
import MessageMiddleware from 'MessageMiddleware';

export default applyMiddleware(
  SessionMiddleware,
  GameIndexMiddleware,
  GameListingMiddleware,
  CanvasMiddleware,
  AssetMiddleware,
  MessageMiddleware
);

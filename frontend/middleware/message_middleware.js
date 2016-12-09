import { REQUEST_MESSAGES, receiveMessages,
         POST_MESSAGE, receiveMessage }
  from 'MessageActions';

import { fetchMessages, postMessage } from '../util/message_api_util';

export default ({dispatch}) => next => action => {
  console.log("MessageMiddleware caught", action);
  switch (action.type) {
    case REQUEST_MESSAGES:
      fetchMessages(action.game_id)(
        messages => dispatch(receiveMessages(messages))
      );
      break;
    case POST_MESSAGE:
      postMessage(action.game_id, action.message)(()=>{});
      //   message => {
      //     dispatch(receiveMessage(message));
      //     let $messages = $(".messages");
      //     $messages.scrollTop = $messages.scrollHeight;
      // }
      // );
      break;

  }
  return next(action);
};

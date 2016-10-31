# Schema Information

## users
column name     | data type | details
----------------|-----------|---------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## games

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
title           | string      | not null, indexed
description     | text        | not null
system          | integer     | not null, foreign key (references systems), indexed
user_id         | integer     | not null, foreign key (references users), indexed
canvas_state    | text/binary | not null,
active         | boolean     |
num_players     | integer     |
current_player  | integer     | not null, foreign key (references users), indexed

## systems

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
system          | string      | not null, indexed, unique

## tags

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
tag             | string      | not null, indexed, unique

## signups

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
user_id         | integer     | not null, foreign key (references users), indexed
game_id         | integer     | not null, foreign key (references messages), indexed
status          | string      | not null

## messages

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
user_id         | integer     | not null, foreign key (references users), indexed
game_id         | integer     | not null, foreign key (references games), indexed
body            | text        | not null
result          | string      |
whisper         | boolean     |

## whispers

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
user_id         | integer     | not null, foreign key (references users), indexed
message_id      | integer     | not null, foreign key (references messages), indexed

## assets

column name     | data type   | details
----------------|-------------|---------
id              | integer     | not null, primary key
user_id         | integer     | foreign key (references users), indexed
image_url       | string      | not_null
title           | string      | not null, indexed

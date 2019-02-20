# Server
|      column      |      data_type      |      details      |
--------------------------------------------------------------
1. id                       int              not null, PK
2. owner_id                 int              not null, FK
3. server_name           varchar(40)       not null, unique
4. is_direct?               bool             not null

index on server_name, unique: true

# Channel
|      column      |      data_type      |      details      |
--------------------------------------------------------------
1. id                       int              not null, PK
2. server_id                int              not null, FK
3. channel_name          varchar(40)       not null, unique
4. is_text?                 bool             not null

index on channel_name, unique: true
index on server_id

# User
|      column      |      data_type      |      details      |
--------------------------------------------------------------
1. id                       int              not null, PK
2. alias                 varchar(40)         not null, unique
3. username              varchar(40)         not null, unique
4. pw_digest             varchar(40)         not null
5. server_id                int              FK
6. curr_channel_id          int              FK
7. curr_voice_id            int              FK
8. session_token         varchar(255)        not null

index on username, alias, unique: true
index on alias, unique: true
index on server_id
index on session_token

# Message
|      column      |      data_type      |      details      |
--------------------------------------------------------------
1. id                       int              not null, PK
2. channel_id               int              not null, FK
3. author_id                int              not null, FK
4. body                     text             not null
5. type                  varchar(40)         not null

index on channel_id

# Reactions
|      column      |      data_type      |      details      |
--------------------------------------------------------------
1. id                       int              not null, PK
2. message_id               int              not null, FK
3. reactor_id               int              not null, FK
4. body                  varchar(30)

index on message_id
index on reactor_id
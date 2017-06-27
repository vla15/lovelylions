CREATE TABLE artist(
   id      NUMERIC PRIMARY KEY,
   username    VARCHAR(20) NOT NULL,
   email    VARCHAR(20) NOT NULL
);

CREATE TABLE head (
    id      NUMERIC PRIMARY KEY,
    _path    VARCHAR(50) NOT NULL,
    user_id  NUMERIC references artist(id)
);

CREATE TABLE torso (
    id      NUMERIC PRIMARY KEY,
    _path    VARCHAR(50) NOT NULL,
    user_id  NUMERIC references artist(id)
);

CREATE TABLE legs (
    id      NUMERIC PRIMARY KEY,
    _path    VARCHAR(50) NOT NULL,
    user_id  NUMERIC references artist(id)
);

CREATE TABLE final_image (
    id      NUMERIC PRIMARY KEY,
    head_id     NUMERIC references head(id),
    torso_id     NUMERIC references torso(id),
    legs_id     NUMERIC references legs(id),
    user_id     NUMERIC references artist(id)
);
/* Replace with your SQL commands */
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    -- name varchar(100),
    firstname varchar(150),
    lastname varchar(150),
    username varchar (150) UNIQUE,
    -- password varchar(60),
    -- role_id INT,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)

CREATE TABLE users (
    
    -- name varchar(100),
    -- email varchar(100) UNIQUE,
    -- password varchar(60),
    -- role role_type,
    id SERIAL PRIMARY KEY,
    firstName varchar (100),
    lastName varchar (100),
    username varchar(100) UNIQUE,
    password varchar (60),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)
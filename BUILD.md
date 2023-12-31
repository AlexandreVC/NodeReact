##BUILD

install nodeJS
run nmp init to intiate the directory
run npm install -g typescript
run npm install -s express
run ng new in the same file, accept angular rooting and use CSS as stylesheetformat




You can then run you server using the ng serve command in the same file, ctrl+c to stop, and localhost http://localhost:4200/#/Accueil to access it

Install PostgreSQL
Set the password to "root" and create the NodeReact DataBase or you will need to change in config.json:
"development": {
    "username": "postgres", //put your username if you use another user
    "password": "root",//put your password
    "database": "NodeReact",// put your DB's name
    "host": "127.0.0.1",
    "port": 5432,//this is the base port when you install ProgreSQL but if you change it, please change this port
    "dialect": "postgres"
  }

To create the tables, please write in your terminal :
npx sequelize-cli db:migrate
It will create the tables!
Or just create your tables with this:
CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id),
    CONSTRAINT "Users_email_key" UNIQUE (email),
    CONSTRAINT "Users_username_key" UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."Decks"
(
    id integer NOT NULL DEFAULT nextval('"Decks_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "lastDate" timestamp with time zone,
    "userId" integer,
    CONSTRAINT "Decks_pkey" PRIMARY KEY (id),
    CONSTRAINT "Decks_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Decks"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."Cards"
(
    id integer NOT NULL DEFAULT nextval('"Cards_id_seq"'::regclass),
    question text COLLATE pg_catalog."default" NOT NULL,
    answer text COLLATE pg_catalog."default" NOT NULL,
    "deckId" integer NOT NULL,
    "lastDate" timestamp with time zone,
    "userId" integer,
    CONSTRAINT "Cards_pkey" PRIMARY KEY (id),
    CONSTRAINT "Cards_deckId_fkey" FOREIGN KEY ("deckId")
        REFERENCES public."Decks" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Cards"
    OWNER to postgres;
Notice that id is auto-increment so don't have to set it and lastDate and userId in Cards and Decks can be NULL because it shows when the user last saw that deck or card.
So to create standard decks and cards, don't set those 2 keys.
Here's an example to load some data in your tables 
INSERT INTO public."Users" (username, email, password)
VALUES 
  ('user1', 'user1@example.com', 'password1'),
  ('user2', 'user2@example.com', 'password2'),
  ('user3', 'user3@example.com', 'password3');  
INSERT INTO public."Decks" (name, "lastDate", "userId")
VALUES 
  ('Sample Deck 1', CURRENT_TIMESTAMP, 1),
  ('Sample Deck 2', CURRENT_TIMESTAMP, 1),
  ('Sample Deck 3', CURRENT_TIMESTAMP, 2); 
INSERT INTO public."Cards" (question, answer, "deckId", "lastDate", "userId")
VALUES 
  ('Sample Question 5', 'Sample Answer 1', 4, CURRENT_TIMESTAMP, 1),
  ('Sample Question 6', 'Sample Answer 2', 5, CURRENT_TIMESTAMP, 1);
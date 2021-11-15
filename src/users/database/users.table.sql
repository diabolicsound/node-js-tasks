-- Table: public.users

-- DROP TABLE IF EXISTS public."users";

CREATE TABLE IF NOT EXISTS public.users
(
    id text COLLATE pg_catalog."default" NOT NULL,
    login text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    age numeric NOT NULL,
    "isDeleted" boolean NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id, login, password, age, "isDeleted")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

    ALTER TABLE IF EXISTS public.users
        ADD CONSTRAINT users_pkey PRIMARY KEY (id, login, password, age, "isDeleted");

  INSERT INTO public.users  (
        id,
        login,
        password,
        age,
        isDeleted,
    )
    VALUES
        (
            'userID1',
            'login1',
            'password123',
             24,
             false,
        ),
        (
                    'userID2',
                    'login2',
                    'password123',
                     25,
                     false,
                ),
        (
                    'userID3',
                    'login3',
                    'password123',
                     26,
                     false,
                ),
        (
                    'userID4',
                    'login4',
                    'password123',
                     27,
                     false,
                ),
                (
                            'userID5',
                            'login5',
                            'password123',
                             28,
                             false,
                        );

---
layout: post
title: "Starting To Script"
date: 2025-07-29 16:20:00 -0400
categories: apprenticeship update
---

Today I worked on something I've been wanting to do for a while, making it easy
for someone to clone my Tic Tac Toe repo and set up the database with a simple
command.

The goal was to let users run something like this:

```clojure

$ clj -M:test:create-db

```

That command runs a Clojure function that sets up the database table needed to
save game moves. It was fun to mix command-line work, Clojure, and PostgreSQL.

Here’s what the user setup flow looks like now:

Install PostgreSQL

```clojure

$ brew install postgresql @14

```

Create the tic_tac_toe database

```clojure

$ psql postgres
#Enter password if asked
postgres=# CREATE DATABASE tic_tac_toe ;
postgres=# \q

```

Run the Database setup script

```clojure

$ clj -M:test:create-db

```

That command will run this SQL:

```clojure

(def create-db-sql
  "CREATE TABLE IF NOT EXISTS moves (
    move_id SERIAL Primary Key,
    game_id VARCHAR,
    database TEXT NOT NULL,
    player_x TEXT NOT NULL,
    player_o TEXT NOT NULL,
    current_token CHAR(1) NOT NULL,
    board TEXT NOT NULL\n);")

```

I’m learning more and more how valuable it is to make things approachable for
future users. Especially when it comes to setting things up locally.
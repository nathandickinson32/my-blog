---
layout: post
title: "Tic Tac Toe Schema"
date: 2025-08-01 16:35:00 -0400
categories: apprenticeship update
---

Today I wrapped up the database setup for my Tic-Tac-Toe game by adding a full
schema and connecting it to a Babashka script. I wanted to make sure that
anyone cloning the repo can run one command and get the full PostgreSQL
environment set up with no manual steps required.

Using pod.babashka.postgresql, I created a create-db script that:

1. Checks if the tic_tac_toe database already exists.
2. If not, creates it.
3. Then creates a games table with all the fields I need to track game state.

Here's the SQL:

```clojure

(def db-exists-sql
  "SELECT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'tic_tac_toe')")

(def create-db-sql
  "CREATE DATABASE tic_tac_toe")

(def create-tables-sql
  "CREATE TABLE IF NOT EXISTS games (
     move_id SERIAL Primary Key,
     game_id VARCHAR,
     database TEXT NOT NULL,
     player_x TEXT NOT NULL,
     player_o TEXT NOT NULL,
     current_token CHAR(1) NOT NULL,
     board TEXT NOT NULL
   )")

```

Once this runs, you’ve got a clean environment for saving moves and replays.

I also wrote tests using speclj to verify:

1. It skips creation if the DB already exists
2. It logs the expected output
3. The games table gets created properly

```clojure

(it "does not create database when exists"
    (with-redefs [db/execute! (stub :execute! {:return [{:exists true}]})]
                 (let [output (with-out-str (sut/-main))]
                      (should-contain "Database Already Exists: tic_tac_toe\n" output))))

```

This opens up a lot of opportunities to start playing around in a side projects.
(when I have some spare time!)
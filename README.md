# movieLens
A movie discovery app built with React and Node.js, powered by the TMDB API.

## Preview
![movieLens screenshot 1](./public/movieLens1.png)
![movieLens screenshot 2](./public/Screenshot-2026-06-25-172303.png)

## Features
- Search movies with live autocomplete
- Browse popular and trending titles
- View details: synopsis, director, cast, rating
- Read user reviews with expand/collapse
- Check streaming availability by country
- Blurred backdrop ambiance on the featured banner

## Built with
- React + Vite (frontend)
- Node.js + Express (backend proxy)
- TMDB API
- CSS (no framework)

## Architecture note
API requests are proxied through a Node/Express backend so the TMDB API key 
is never exposed in the client. The key is loaded from an environment 
variable server-side and kept out of version control.

## Data
Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

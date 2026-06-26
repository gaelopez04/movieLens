import 'dotenv/config';                     
import express from 'express';
import cors from 'cors';

const API_KEY = process.env.TMDB_API_KEY;


const app = express();
const port = 3000;

app.use(cors());

app.get('/api/movies/search/:query', async (req, res) => {
    const query = req.params.query;
    const link = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`);
    const data = await link.json();
    res.json(data.results.slice(0,5));
});

app.get('/api/movie/:id', async (req, res) => {
    const id = req.params.id;
    const link = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,reviews,watch/providers`);
    const data = await link.json();
    res.json(data);
});

app.get('/api/movies/popular', async (req, res) => {
    const link = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await link.json();
    res.json(data.results);
});

app.get('/api/movies/genres', async (req, res) => {
    const link = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await link.json();
    res.json(data);
});

app.get('/api/movies/genres/:id', async (req, res) => {
    const id = req.params.id;
    const link = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
    const data = await link.json();
    res.json(data);
})

app.listen(port, () => {
    console.log(`listening at the por: ${port}`);
});
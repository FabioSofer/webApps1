'use strict';

const dayjs = require('dayjs');
const sqlite = require('sqlite3');

function Film(id, title, fav, rating, watchDate="") {
  this.id = id;
  this.title = title;
  this.fav = fav;
  if(watchDate!=="" && watchDate!==null)
    this.watchDate = dayjs(watchDate);
  this.rating = rating;

  this.toString = () =>  `${this.id} - ${this.title}: ${fav ? "one of my favourites " : " "} score: ${rating}, watchdate : ${dayjs(watchDate).format("YYYY-MM-DD")}`;
}

function filmList(){
    const db = new sqlite.Database('films.db', err => { if (err) throw err;});

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films';
            db.all(sql, [], (err, rows) => {
              if(err)
                reject(err);
              else {
                const exams = rows.map(row => new Film(row.id, row.title, row.fav, row.rating,row.watchdate));
                resolve(exams);
              }
            });
          });
    }

    this.getFavs=()=>{
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films where favorite=1';
            db.all(sql, [], (err, rows) => {
              if(err)
                reject(err);
              else {
                const exams = rows.map(row => new Film(row.id, row.title, row.fav, row.rating, dayjs(row.watchDate).format("YYYY-MM-DD")));
                resolve(exams);
              }
            });
          });
    }
    this.watchedToday=()=>{
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM films where watchdate=?`;
            db.all(sql, [dayjs().format("YYYY-MM-DD")], (err, rows) => {
              if(err)
                reject(err);
              else {
                const exams = rows.map(row => new Film(row.id, row.title, row.fav, row.rating, dayjs(row.watchDate).format("YYYY-MM-DD")));
                resolve(exams);
              }
            });
          });
    }
    this.watchedBefore=(date)=>{
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM films where watchdate < ?`;
            db.all(sql, [date], (err, rows) => {
              if(err)
                reject(err);
              else {
                const exams = rows.map(row => new Film(row.id, row.title, row.fav, row.rating, dayjs(row.watchDate).format("YYYY-MM-DD")));
                resolve(exams);
              }
            });
          });
    }
    this.ratedHigher=(rating)=>{
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM films where rating>= ?`;
            db.all(sql, [rating], (err, rows) => {
              if(err)
                reject(err);
              else {
                const exams = rows.map(row => new Film(row.id, row.title, row.fav, row.rating, dayjs(row.watchDate).format("YYYY-MM-DD")));
                resolve(exams);
              }
            });
          });
    }
    this.filmName=(filmName)=>{
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM films where title=?`;
            db.all(sql, [filmName], (err, rows) => {
              if(err)
                reject(err);
              else {
                const exams = rows.map(row => new Film(row.id, row.title, row.fav, row.rating, dayjs(row.watchDate).format("YYYY-MM-DD")));
                resolve(exams);
              }
            });
          });
    }

    this.add = (film) => {
        return new Promise((resolve, reject) => {
          const sql = 'INSERT INTO films (id, title, favorite, rating,watchdate) VALUES(?,?,?,?, DATE(?))';
          db.run(sql, [film.id, film.title, film.fav, film.rating,film.date], function(err) {
            if(err) reject(err);
            else resolve("record inserito con successo");
          });
        });
      };

    this.remove = (filmID) => {
        return new Promise((resolve, reject) => {
          const sql = 'DELETE FROM films WHERE ID=?';
          db.run(sql, [filmID], function(err) {
            if(err) reject(err);
            else resolve("record cancellato con successo");
          });
        });
      };

      this.resetWatchDate = () => {
        return new Promise((resolve, reject) => {
          const sql = 'UPDATE films SET watchdate=NULL';
          db.run(sql, [], function(err) {
            if(err) reject(err);
            else resolve("watchtime has been reset");
          });
        });
      };
}

async function main () {
    let myFilms=new filmList();
   /* const films=await myFilms.filmName("Matrix");
    films.forEach(film => {
        console.log(film.toString());
    });*/
    const total=await myFilms.getAll();
    //const res=await myFilms.resetWatchDate()
    console.log(total);
        
}

main();
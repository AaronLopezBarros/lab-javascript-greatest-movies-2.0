// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = []
  arr.map((movie) => {
    if(!directors.includes(movie.director)) directors.push(movie.director)
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const filteredArray = arr.filter((movie) => {
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  })

  return filteredArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0) return 0

  const scoreAvg = arr.reduce((acc, movie) => {
      if(!movie.score){
        return acc
      } else {
        return acc + movie.score
      }
  }, 0)

  return Number((scoreAvg / arr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((movie) => movie.genre.includes('Drama'))

  if(dramaMovies.length === 0) return 0

  const scoreAvg = dramaMovies.reduce((acc, movie) => acc + movie.score , 0)

  return Number((scoreAvg / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  arr.sort((a, b) => {
    if(a.year > b.year) return 1
    if(b.year > a.year) return -1
    if(a.title > b.title) return 1
    if(b.title > a.title) return -1
  })
  const sorteredArray = [...arr]

    return sorteredArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const copyOfArray = arr.map((movie) => movie.title)

  copyOfArray.sort()

  return copyOfArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  let changedArray = []
  arr.map((movie) => {
    let hours = Number(movie.duration.split('h')[0]) * 60
    let mins;
    if(movie.duration.includes('min')){
      mins  = movie.duration.split('min').join('').split(' ')
      mins = Number(mins[mins.length - 1])

    }
    let totalDuration;
    if(mins){
      totalDuration = hours + mins
    }else {
      totalDuration = hours 
    }
    
    movie.duration = totalDuration
    changedArray.push(movie)
})
console.log(changedArray)
return changedArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if(arr.length === 0) return null

  arr.sort((a, b) => {
    if(a.score > b.score) return -1
    if(b.score > a.score) return 1

  })

  return `The best year was ${arr[0].year} with an average score of ${arr[0].score}`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

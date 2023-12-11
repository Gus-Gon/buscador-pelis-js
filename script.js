document.getElementById('searchButton').addEventListener('click', searchMovies)
let api_key = 'f5a0796d3f66581e64e73abfecbdc218'
let urlBase =  'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'


function searchMovies(){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ''

    if(movies.length ===0 ){
        resultContainer.innerHTML = '<p>No se encontro resultado para tu busqueda</p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let tittle = document.createElement('h2')
        tittle.textContent = movie.tittle

        let releaseData = document.createElement('p')
        releaseData.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(tittle)
        movieDiv.appendChild(releaseData)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)


    })
}
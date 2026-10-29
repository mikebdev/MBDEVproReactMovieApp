import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext) // Custom hook to use the MovieContext in other components

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    // Load favorites from localStorage on initial render
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // Update localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // Add a movie to favorites
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    // Remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    // Check if a movie is in favorites
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // Value to be provided by the context
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    // Provide the context value to children components
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'

const GenresPage = () => {

    const [genres, setGenres] = useState([])

    const endpoint = 'http://localhost:8080/api/genres'

    // fetch all genres via axios
    const fetchGenres = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setGenres(response.data)
            })
            .catch((error) => {
                console.error('Error fetching genres:', error)
            })
    }

    useEffect(() => {
        fetchGenres()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron mt-4">
                            <h1 className="display-4">Genres</h1>
                            <p className="lead">Discover the world of manga genres.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 my-3">
                        <h2>All Genres</h2>
                    </div>

                    <div className="col-12">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>

                            <tbody>
                                {genres.map((genre, index) => (
                                    <tr key={genre.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{genre.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenresPage
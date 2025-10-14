import React from 'react'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Homepage = () => {

    const [manga, setManga] = useState([])

    const endpoint = 'http://localhost:8080/api/manga'

    // fetch all manga via axios
    const fetchManga = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setManga(response.data)
            })
            .catch((error) => {
                console.error('Error fetching manga:', error)
            })
    }

    useEffect(() => {
        fetchManga()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron mt-4">
                            <h1 className="display-4">Welcome to the Manga Homepage!</h1>
                            <p className="lead">Discover a world of manga at your fingertips.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 my-3">
                        <h2>Explore our collection of manga series, authors, genres, and more.</h2>
                    </div>

                    <div className="col-12">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manga.map((mangaItem) => (
                                    <tr key={mangaItem.id}>
                                        <th scope="row">{mangaItem.id}</th>
                                        <td>{mangaItem.title}</td>
                                        <td>
                                            {mangaItem.authors.map((author) => (
                                                <span key={author.id} className='badge text-bg-dark mx-1'>
                                                    {author.name}
                                                </span>
                                            ))}
                                        </td>
                                        <td>{mangaItem.genres.map((genre) => (
                                            <span key={genre.id} className='badge text-bg-secondary mx-1'>
                                                {genre.name}
                                            </span>
                                        ))}</td>
                                        <td>
                                            {/* green if Ongoing, blue if Completed, red if Cancelled, yellow if Hiatus */}
                                            {mangaItem.status.name === 'Ongoing' && <span className='badge text-bg-success'>{mangaItem.status.name}</span>}
                                            {mangaItem.status.name === 'Completed' && <span className='badge text-bg-info'>{mangaItem.status.name}</span>}
                                            {mangaItem.status.name === 'Cancelled' && <span className='badge text-bg-danger'>{mangaItem.status.name}</span>}
                                            {mangaItem.status.name === 'Hiatus' && <span className='badge text-bg-warning'>{mangaItem.status.name}</span>}
                                        </td>
                                        <td>
                                            <Link to={`/manga/${mangaItem.id}`}>
                                                <button type="button" className="btn btn-primary">Details</button>
                                            </Link>
                                        </td>
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

export default Homepage
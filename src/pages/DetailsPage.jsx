import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DetailsPage = () => {

    const { id } = useParams()

    const [mangaDetails, setMangaDetails] = useState(null)

    const endpoint = `http://localhost:8080/api/manga/${id}`

    // fetch manga details via axios
    const fetchMangaDetails = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setMangaDetails(response.data)
            })
            .catch((error) => {
                console.error('Error fetching manga details:', error)
            })
    }

    useEffect(() => {
        fetchMangaDetails()
    }, [id])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {mangaDetails ? (
                            <div className="card my-4">

                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={mangaDetails.coverImage} className="img-fluid rounded-start" alt="Image" />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title mb-3">{mangaDetails.title}</h2>
                                            <h5 className="card-subtitle mb-3 text-muted">
                                                Authors: {mangaDetails.authors.map((author) => author.name).join(', ')}
                                            </h5>
                                            <h5 className="card-subtitle mb-3 text-muted">
                                                Genres: {mangaDetails.genres.map((genre) => genre.name).join(', ')}
                                            </h5>

                                            <h6 className="card-subtitle mb-3 text-muted">
                                                Published: {new Date(mangaDetails.releaseDate).toLocaleDateString()}
                                            </h6>
                                            <p className="card-text">{mangaDetails.description}</p>
                                            <p className="card-text">
                                                Status:
                                                {/* green if Ongoing, blue if Completed, red if Cancelled, yellow if Hiatus */}
                                                {mangaDetails.status.name === 'Ongoing' && <span className='badge text-bg-success mx-2'>{mangaDetails.status.name}</span>}
                                                {mangaDetails.status.name === 'Completed' && <span className='badge text-bg-info mx-2'>{mangaDetails.status.name}</span>}
                                                {mangaDetails.status.name === 'Cancelled' && <span className='badge text-bg-danger mx-2'>{mangaDetails.status.name}</span>}
                                                {mangaDetails.status.name === 'Hiatus' && <span className='badge text-bg-warning mx-2'>{mangaDetails.status.name}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <p>Loading manga details...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsPage
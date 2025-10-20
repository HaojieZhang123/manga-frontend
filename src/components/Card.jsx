import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({ manga }) => {
    return (
        <>
            <div className="card">
                <img src={manga.coverImage} className="card-img-top" alt={manga.title} style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{manga.title}</h5>
                    <p className="card-text">
                        {manga.authors.map((author) => (
                            <span key={author.id} className='badge text-bg-dark mx-1'>
                                {author.name}
                            </span>
                        ))}
                    </p>
                    <p>
                        {manga.genres.map((genre) => (
                            <span key={genre.id} className='badge text-bg-secondary mx-1'>
                                {genre.name}
                            </span>
                        ))}
                    </p>
                    <p>
                        {/* green if Ongoing, blue if Completed, red if Cancelled, yellow if Hiatus */}
                        {manga.status.name === 'Ongoing' && <span className='badge text-bg-success'>{manga.status.name}</span>}
                        {manga.status.name === 'Completed' && <span className='badge text-bg-info'>{manga.status.name}</span>}
                        {manga.status.name === 'Cancelled' && <span className='badge text-bg-danger'>{manga.status.name}</span>}
                        {manga.status.name === 'Hiatus' && <span className='badge text-bg-warning'>{manga.status.name}</span>}
                    </p>
                    <Link to={`/manga/${manga.id}`}>
                        <button type="button" className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card
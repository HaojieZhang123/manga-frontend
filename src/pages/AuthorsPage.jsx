import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'

const AuthorsPage = () => {

    const [authors, setAuthors] = useState([])

    const endpoint = 'http://localhost:8080/api/authors'

    // fetch all authors via axios
    const fetchAuthors = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setAuthors(response.data)
            })
            .catch((error) => {
                console.error('Error fetching authors:', error)
            })
    }

    useEffect(() => {
        fetchAuthors()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron mt-4">
                            <h1 className="display-4">Authors</h1>
                            <p className="lead">Discover the talented authors behind your favorite manga series.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 my-3">
                        <h2>Explore our collection of manga authors.</h2>
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
                                {authors.map((author, index) => (
                                    <tr key={author.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{author.name}</td>
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

export default AuthorsPage
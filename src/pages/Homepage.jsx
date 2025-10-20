import React from 'react'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

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

                    <div className="row mb-4">

                        <div className="col-12 my-3">
                            <h2>Explore our collection of manga series.</h2>
                        </div>


                        {manga.map((mangaItem) => (
                            <div className="col-md-4 my-3">
                                <Card key={mangaItem.id} manga={mangaItem} />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Homepage
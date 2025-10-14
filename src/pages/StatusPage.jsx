import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'

const StatusPage = () => {

    const [status, setStatus] = useState([])

    const endpoint = 'http://localhost:8080/api/status'

    // fetch all status via axios
    const fetchStatus = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setStatus(response.data)
            })
            .catch((error) => {
                console.error('Error fetching status:', error)
            })
    }

    useEffect(() => {
        fetchStatus()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron mt-4">
                            <h1 className="display-4">Status</h1>
                            <p className="lead">Discover the status of your favorite manga series.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 my-3">
                        <h2>Status</h2>
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
                                {status.map((item, index) => (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
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

export default StatusPage
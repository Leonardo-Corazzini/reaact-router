import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URI } from '../../config'
export default function Index() {

    const [posts, setPosts] = useState([])
    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => fetchPosts(), [])
    return (
        <>
            <div className="coontainer">
                <div className="row">
                    {posts.map(post =>
                        <div className="col">
                            <Card />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
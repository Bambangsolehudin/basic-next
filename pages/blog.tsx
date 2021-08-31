import React from 'react'
import Layout from '../components/layout'

interface Post {
    id:number;
    title:string;
    body:string;
}

interface BlogProps {
    dataBlog: Post[]
}

export default function blog(props:BlogProps) {
    const {dataBlog} = props;
    
    return (
        <div>
            <Layout pageTitle="Blog Page">
               {dataBlog.map((blog) => (
                       <div key={blog.id}>
                           <p>{blog.title}</p>
                           <p>{blog.body}</p>
                       </div>
               ))}
            </Layout>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataBlog = await res.json();
    return{
        props:{
        dataBlog,
        }
    }
}

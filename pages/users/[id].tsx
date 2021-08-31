import { useRouter } from 'next/router';
import Layout from '../../components/layout';

interface User {
    id:number;
    name:string;
    email:string;
    phone:string;
    website:string;
}

interface userDetailProps{
    user:User;
}


export default function detail(props:userDetailProps) {
    const {user} = props
    return (
        <div>
            <Layout pageTitle="User Detail">
               <p> {user.name} </p>
               <p>{user.email}</p>
               <p>{user.phone}</p>
               <p>{user.website}</p>
            </Layout>
        </div>
    )
}



export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    const paths = dataUsers.map((user:User)=> ({
        params:{
            id: `${user.id}`
        }
    }))
    return{
        paths,
        fallback: false,
    }
}

interface GetStaticProps{
    params: {
        id: string;
    }
}

export async function getStaticProps(context:GetStaticProps) {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props:{
            user,
        }
    }
}



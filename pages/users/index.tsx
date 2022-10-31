import Layout from '../../components/layout';
import styles from './cars.module.css';

const link = "https://dummyapi.io/data/v1/"

export default function Users(props: any) {
    const {dataCars} = props;
    const dataUser = dataCars.data;
   return (
       <Layout pageTitle="Users">
            <h1>Users</h1>
            <table className={styles.users}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>url</th>
    
                </tr>
                </thead>
                
                {dataUser.map((user: { id: any; firstName: any; lastName: any; picture: any; }) => {
                    console.log(">>>>>", user.id);
                    return (
                        <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.picture}</td>
                        </tr>
                        </tbody>
                        
                    )
                    
                    })
                }
            </table>
       </Layout>
   ); 
}

export async function getStaticProps() {
    const res = await fetch(link + 'user?page=1&limit=10', {
        headers: new Headers({
            'app-id': '635ecce85143704bb40e3e21',
        }),
    })
    const dataCars = await res.json();
    return {
        props: {
            dataCars,
        }
    }
}

import Layout from '../../components/layout';
import useRouter from 'next/router';

export default function Detail() {
    const router = useRouter();
    const { id } = router.query; 
   return (
       <Layout pageTitle={`Detail ${id}`}>
            <h1>Cars</h1>
            {' '}
            {id}
            {' '}
       </Layout>
   );
}

import User from '../../component/user';
import { Table } from 'reactstrap';

export default function Crud({ utilisateurs }) {
  return (
    <>
      {' '}
      <h1>List of users</h1>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>E-mail</th>
            <th>Lastname</th>
            <th>Firstname</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.map((utilisateur) => {
            return <User utilisateur={utilisateur} />;
          })}
        </tbody>
      </Table>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3001/user');
  const data = await response.json();
  return {
    props: { utilisateurs: data },
  };
}

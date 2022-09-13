import { useQuery, gql } from "@apollo/client";

type Locations = {
  locations: {
    results: [{ name: string }];
  };
};

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery<Locations>(GET_LOCATIONS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error ;-;</p>;

  return (
    <div>
      {data?.locations.results.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
}

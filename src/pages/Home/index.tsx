import { useQuery, gql } from "@apollo/client";
import React, { useCallback } from "react";

type Characters = {
  characters: {
    results: [{ name: string; image: string }];
  };
};

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        image
        name
      }
    }
  }
`;

export default function Home() {
  const [];

  const { loading, error, data } = useQuery<Characters>(GET_CHARACTERS);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, currentTarget } = e;

    console.log(target, type, currentTarget.value);
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error ;-;</p>;

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Pesquise por um personagem aqui..."
      />
      {data?.characters.results.map((item) => (
        <p key={item.name} className="text-3xl font-bold underline">
          <img src={item.image} alt="" />
          {item.name}
        </p>
      ))}
    </div>
  );
}

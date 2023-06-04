import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacters } from "../api";
const Header = styled.header`
  margin: 0 auto;
  padding: 50px;
`;
const Title = styled.h1`
  text-align: center;
  font-family: "Rubik Puddles", cursive;
  font-size: 50px;
`;
const Characters = styled.div`
  width: 100%;
  padding: 30px;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  place-items: center;
`;
const Chatacter = styled.li`
  font-size: 20px;

  a {
    padding: 5px;
    width: 350px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &:hover {
      background-color: ${(props) => props.theme.accentColor};
      color: #2d3436;
      transition: 0.5s background-color ease-in-out;
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Loader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 30px;
`;
interface ICharacters {
  id: number;
  name: string;
  imageUrl: string;
}
export default function Home() {
  const { isLoading, data } = useQuery<ICharacters[]>(
    ["allCharacters"],
    fetchCharacters
  );
  return (
    <>
      <Header>
        <Title>Disney Characters</Title>
      </Header>
      <Characters>
        <List>
          {isLoading ? (
            <Loader>Loading..</Loader>
          ) : (
            data?.slice(0, 100).map((d) => (
              <Chatacter key={d.id}>
                <Link to={`/character/${d.id}`}>
                  <Img src={d.imageUrl} alt={d.name} />
                  {d.name}
                </Link>
              </Chatacter>
            ))
          )}
        </List>
      </Characters>
    </>
  );
}

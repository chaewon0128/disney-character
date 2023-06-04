import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchInfo } from "../api";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  padding: 50px;
  margin: 0 auto;
  text-align: center;
  a {
    display: block;
    padding: 50px;
  }
`;
const Title = styled.h2`
  font-size: 50px;
  padding: 20px 0;
`;
const Profile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
const FilmList = styled.ul`
  display: inline-block;
  width: 500px;
`;
const Film = styled.li`
  display: inline-block;
  border-radius: 5px;
  margin: 5px;
  padding: 2px;
  font-size: 30px;
  background-color: #f5f6fa;
  color: #2f3640;
`;

const Loader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 30px;
`;

interface IInfo {
  id: number;
  name: string;
  imageUrl: string;
  films: [];
}
export default function Detail() {
  const { id } = useParams();
  const { isLoading, data } = useQuery<IInfo>(["id"], () => fetchInfo(id));
  return (
    <Container>
      <Link to="/">👈🏻</Link>
      <Profile src={data?.imageUrl} alt={data?.name} />
      <Title>{`${data?.name}'s Films`}</Title>
      <FilmList>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          data?.films.map((film) => <Film>{film}</Film>)
        )}
      </FilmList>
    </Container>
  );
}

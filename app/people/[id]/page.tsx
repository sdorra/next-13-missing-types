import { use } from "react";
import { fetchPeople, fetchPeoples } from "../../../lib/people";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

const People = ({ params }: Props) => {
  const people = use(fetchPeople(params.id));
  return (
    <>
      <h1>{people.name}</h1>
    </>
  );
};

export const generateStaticParams = async (): Promise<Params[]> => {
  const peoples = await fetchPeoples();

  const result = peoples.map((people) => ({
    id: people.id,
  }));

  return result;
}

export default People;
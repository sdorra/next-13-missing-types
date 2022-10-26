export type People = {
  id: string;
  name: string;
}; 

const mapPeople = (people: any): People => {
  const parts = people.url.split("/").filter((p: string) => p.length > 0);
  const id = parts[parts.length - 1];
  return {...people, id}
}

export const fetchPeoples = (delay = 500): Promise<People[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => data.results.map(mapPeople))
        .then(resolve);
    }, delay);
  });
};

export const fetchPeople = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  const data = await response.json();
  return mapPeople(data);
};

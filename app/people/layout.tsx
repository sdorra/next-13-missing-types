import { FC, PropsWithChildren, Suspense, use } from "react";
import { fetchPeoples } from "../../lib/people";
import NavLink from "../NavLink";

const CharacterNavigation = () => {
  const characters = use(fetchPeoples());
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <NavLink href={`/people/${character.id}`}>{character.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

const CharactersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex p-10 gap-10">
      <nav>
        <h2 className="font-bold">Navigation</h2>
        <Suspense fallback={<p>Loading ...</p>}>
          <CharacterNavigation />
        </Suspense>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default CharactersLayout;

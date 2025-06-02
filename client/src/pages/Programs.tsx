import { useEffect, useState } from "react";
import ProgramCard from "../components/ProgramCard";

type infoType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Programs() {
  const [info, setInfo] = useState<infoType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(info);

  return (
    <main>
      {info.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </main>
  );
}

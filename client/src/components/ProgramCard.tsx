type ProgramType = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function ProgramCard({ program }: { program: ProgramType }) {
  return (
    <>
      <div>
        <span>{program.title}</span>
        <span>{program.synopsis}</span>
        <img src={program.poster} alt={program.title} />
        <span>{program.country}</span>
        <span>{program.year}</span>
      </div>
    </>
  );
}

import Avatar from "../../components/Avatar/avatar";

export default function Main() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-6xl font-extrabold">Christian Martins</h1>
      <h2 className="text-2xl">Desenvolvedor Front-end</h2>
      <Avatar />
    </div>
  );
}

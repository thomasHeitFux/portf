import Image from "next/image";

export default function Header() {
  return (
    <div className="sm:hidden block  top-0 left-0 w-full bg-purple-600/20 p-8 flex justify-between items-center z-50">
      <Image
        className="rounded-full"
        src="/images/profile-pic.jpg"
        alt="Icono de perfil"
        width={50}
        height={50}
      />
      <h1 className="text-xl text-gray-200 font-bold">Thomas Dominguez</h1>
    </div>
  );
}
import Image from "next/image";

import myAvatar from "../../assets/images/meuavatar.png";

export default function Avatar() {
  return (
    <div className="rounded-full pt-2 px-2 bg-gradient-to-r  from-[#ffcb3a] to-[#ff4f61]">
      <Image
        className="rounded-full"
        src={myAvatar}
        alt="Meu avatar"
        width={150}
        height={150}
      />
    </div>
  );
}

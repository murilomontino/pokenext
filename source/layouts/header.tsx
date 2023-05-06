import Image from "next/image";
import Link from "next/link";
import pokeball from "../asserts/imgs/pokeball-hd.png";


const Header = () => {


  return (

    <div className="navbar bg-base-100 flex justify-around">
      <Link href='/' className="btn btn-ghost normal-case text-xl"> POKE API </Link>
      <Link href='/'> <Image
        src={pokeball}
        width={50}
        height={50}
        alt="Logo Pokeball"
        className="ml-8 hover:rotate-[360deg] ease-linear hover:duration-500"
      />
      </Link>

    </div>
  );
};

export default Header;

import Image from "next/image";
import headerItem from './headerItem'
import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
  BadgeCheckIcon
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <headerItem title='HOME' Icon={HomeIcon} />
        <headerItem title='TRENDING' Icon={LightningBoltIcon} />
        <headerItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <headerItem title='COLLECTIONS' Icon={CollectionIcon} />
        <headerItem title='SEARCH' Icon={SearchIcon} />
        <headerItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image 
        className='object-contain'
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

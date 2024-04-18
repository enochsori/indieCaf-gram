import { Menu } from './Navbar';

export default function HoverMessage({ menu }: Menu) {
  return (
    <>
      <div className='w-20 text-sm text-center opacity-50'>{menu}</div>
    </>
  );
}

import Map from '../components/Map';
import CafeList from '../components/CafeList';

export default function Home() {
  return (
    <section className='w-full px-4'>
      <div>
        {/* banner */}
        <div className='w-full'>
          <img
            src='images/banner-img.jpg'
            alt='Banner image'
            className='w-full h-60 object-cover rounded-md shadow-md'
          />
          <h1 className='text-center text-3xl font-bold mt-2 mb-6'>
            How are your Café doing today?
          </h1>
        </div>

        <main className='h-80 w-full flex gap-4'>
          {/* map */}
          <div className='basis-2/3 border border-red-400'>
            <Map />
          </div>
          {/* cafe list */}
          <aside className='basis-1/3 h-full border border-red-500'>
            <CafeList />
          </aside>
        </main>
      </div>
    </section>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Merry-Match',
};

export default function Home() {
  return (
    <main className="py-4">
      <h1 className="text-center text-6xl font-semibold py-8">Merry Match</h1>
      <section className="flex flex-col justify-center items-center relative">
        <div className="w-4/5 h-[500px] md:w-full bg-slate-100 mb-10  flex justify-center items-center">
          <code>image/ilustration</code>
        </div>
        <Link
          href="/new-match"
          className="bg-primary md:absolute md:bottom-16 right-28 text-white py-4 px-12 text-xl rounded-md"
        >
          New Match
        </Link>
      </section>
      <section className="sm:px-10 md:px-28 mt-8 flex flex-col justify-center">
        <h2 className="text-3xl text-center font-semibold mb-8">Features</h2>
        <article className="flex flex-col items-center sm:flex-row justify-between gap-8 mb-8">
          <div className="w-2/3 h-[300px] bg-slate-100  flex justify-center items-center">
            <code>image/ilustration</code>
          </div>
          <div className="sm:w-1/3 text-center sm:text-left">
            <h3 className="text-xl mb-4">Feature #1</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique molestiae ratione neque, minus velit odit est
              consequatur quisquam sit enim veritatis corrupti nam voluptatibus
              totam optio quidem nihil. Qui, recusandae.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center sm:flex-row justify-between gap-8 mb-8">
          <div className="w-2/3 sm:order-2 h-[300px] bg-slate-100  flex justify-center items-center">
            <code>image/ilustration</code>
          </div>
          <div className="sm:w-1/3 text-center sm:text-left">
            <h3 className="text-xl mb-4">Feature #2</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique molestiae ratione neque, minus velit odit est
              consequatur quisquam sit enim veritatis corrupti nam voluptatibus
              totam optio quidem nihil. Qui, recusandae.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center sm:flex-row justify-between gap-8 mb-8">
          <div className="w-2/3 h-[300px] bg-slate-100  flex justify-center items-center">
            <code>image/ilustration</code>
          </div>
          <div className="sm:w-1/3 text-center sm:text-left">
            <h3 className="text-xl mb-4">Feature #3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique molestiae ratione neque, minus velit odit est
              consequatur quisquam sit enim veritatis corrupti nam voluptatibus
              totam optio quidem nihil. Qui, recusandae.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

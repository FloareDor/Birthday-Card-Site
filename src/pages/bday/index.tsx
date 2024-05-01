import Head from 'next/head';
import "@/styles/birthday-card.module.css";

export default function BirthdayCard() {
  return (
    <div className="container">
      <Head>
        <title>Birthday Card</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="card">
        <div className="outside">
          <div className="front">
            <p>Happy Birthday Lorem!</p>
            <div className="cake">
              <div className="top-layer"></div>
              <div className="middle-layer"></div>
              <div className="bottom-layer"></div>
              <div className="candle"></div>
            </div>
          </div>
          <div className="back"></div>
        </div>
        <div className="inside">
        <p>Happy birthday, Lorem!</p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <br />
        <p>Happy birthday, Lorem.</p>
          <h1>🎂</h1>
        </div>
      </div>
    </div>
  );
}
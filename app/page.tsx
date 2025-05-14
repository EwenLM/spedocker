import Image from "next/image";
import styles from "./page.module.css";
import "@/app/component/client/Header";
import Header from "./component/client/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="presentation">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quo voluptatem dolores molestiae a? Unde hic perferendis alias? Fuga
            ab cumque at architecto obcaecati quia? Obcaecati expedita omnis
            eaque laboriosam ullam cupiditate magnam dignissimos, fugiat sequi
            ut illo! Enim labore at dolor, quibusdam eos tempora maxime
            provident, cum similique deleniti temporibus aliquid officiis
            voluptatum atque quae debitis iure? Similique, ullam illum! Hic
            nostrum magni enim veritatis repudiandae autem maxime sunt
            temporibus odio deleniti asperiores, cupiditate et, sapiente
            numquam, modi quia blanditiis eveniet architecto! Labore obcaecati
            enim nemo ut nobis id adipisci vero sunt quos maiores. Molestias
            laborum quae voluptate dignissimos.
          </p>
        </section>
      </main>
    </>
  );
}

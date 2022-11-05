import Link from 'next/link';
import Image from 'next/image';

  export default function FirstPost() {
    return (
      <>
        <Head>
          <title>Mind Bubble: CodeQuest</title>
        </Head>
        <h1>Codequest</h1>
        <Image src="" alt="Your Name" />
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }
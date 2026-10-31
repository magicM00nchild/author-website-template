import { useParams } from "react-router-dom";
import { fanfictions } from "../functions/fanfictions";
import FanfictionMetadata from "../components/FanfictionMetaData";
import ChapterNavigation from "../components/ChapterNavigation";

export default function FanfictionDetail() {
  const { workId, chapterNumber } = useParams();

  const fic = fanfictions.find(
    (item) => item.slug === workId
  );

  if (!fic) {
    return <h1>Fanfiction not found</h1>;
  }

  const currentChapter = Number(chapterNumber ?? 1);

  if (
    !Number.isInteger(currentChapter) ||
    currentChapter < 1 ||
    currentChapter > fic.chapters.length
  ) {
    return <h1>Chapter not found</h1>;
  }

  const chapter = fic.chapters[currentChapter - 1];

  return (
    <main>
        <FanfictionMetadata fic={fic} />
      <h1>{fic.title}</h1>

      <ChapterNavigation workId={fic.slug} chapters={fic.chapters} currentChapter={currentChapter} />

      <article className="chapter-content">
        <h2>{chapter.title}</h2>

        {chapter.content.split(/\r?\n/).map((line, index) => {
          if (line.startsWith("# ")) return null;
          if (!line.trim()) return null;

          return <p key={index}>{line}</p>;
        })}
      </article>

    
    </main>
  );
}
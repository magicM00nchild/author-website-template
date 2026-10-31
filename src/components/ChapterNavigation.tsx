import { Link, useNavigate } from "react-router-dom";
import type { Chapter } from "../functions/fanfictions";

interface ChapterNavigationProps {
  workId: string;
  chapters: Chapter[];
  currentChapter: number;
}

export default function ChapterNavigation({
  workId,
  chapters,
  currentChapter,
}: ChapterNavigationProps) {
  const navigate = useNavigate();

  const handleChapterChange = (chapterNumber: string) => {
    navigate(`/work/${workId}/${chapterNumber}`);
  };

  return (
    <nav className="chapter-navigation">

  {/* Previous Chapter */}
  <div className="chapter-nav-left">
    {currentChapter > 1 && (
      <Link to={`/work/${workId}/${currentChapter - 1}`}>
        ← Previous Chapter
      </Link>
    )}
  </div>

  {/* Chapter Dropdown */}
  <select
    value={currentChapter}
    onChange={(e) => handleChapterChange(e.target.value)}
    aria-label="Select chapter"
  >
    {chapters.map((chapter, index) => (
      <option key={index} value={index + 1}>
        {chapter.title}
      </option>
    ))}
  </select>

  {/* Next Chapter */}
  <div className="chapter-nav-right">
    {currentChapter < chapters.length && (
      <Link to={`/work/${workId}/${currentChapter + 1}`}>
        Next Chapter →
      </Link>
    )}
  </div>

</nav>
  );
}
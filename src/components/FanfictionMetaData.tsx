import type { Fanfiction } from "../functions/fanfictions";

interface Props {
  fic: Fanfiction;
}

export default function FanfictionMetadata({ fic }: Props) {
  return (
    <section className="fanfiction-metadata">

      <div className="metadata-row">
        <span className="metadata-label">Rating:</span>
        <span>{fic.rating}</span>
      </div>

      <div className="metadata-row">
        <span className="metadata-label">Archive Warnings:</span>
        <span>{fic.warnings}</span>
      </div>

      <div className="metadata-row">
        <span className="metadata-label">Category:</span>
        <span>{fic.category}</span>
      </div>

      <div className="metadata-row">
        <span className="metadata-label">Fandom:</span>
        <span>{fic.fandom}</span>
      </div>

      <div className="metadata-row">
        <span className="metadata-label">Language:</span>
        <span>{fic.language}</span>
      </div>

       <div className="metadata-row">
        <span className="metadata-label">Tags:</span>
        <span>
            <div className="fanfiction-tags">
            {fic.tags.map((tag) => (
                <span key={tag} className="fanfiction-tag">
                    {tag}
                </span>
            ))}
            </div>
        </span>
        
      </div>
      
    </section>
  );
}
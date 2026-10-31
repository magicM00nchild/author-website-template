import { Link } from "react-router-dom";
import { fanfictions } from "../functions/fanfictions";
import FanfictionMetadata from "../components/FanfictionMetaData";

export default function FanfictionOverview() {
  return (
    <main>
      <h1>My Works</h1>

      <div className="fanfiction-grid">
        {fanfictions.map((fic) => (
          <article key={fic.slug}>
            <h2>{fic.title}</h2>
            <FanfictionMetadata fic={fic}/>
            <p>{fic.description}</p>

            <Link to={`/work/${fic.slug}`}>
              Start reading
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
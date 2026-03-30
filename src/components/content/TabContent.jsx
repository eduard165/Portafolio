import AboutContent from "../about/AboutContent";
import Projects from "../projects/Projects";

export default function Content() {
  return (
    <div className="space-y-12 mt-8">

      {/* About Section */}
      <section>
        <AboutContent />
      </section>

      {/* Projects Section */}
      <section>
        <Projects />
      </section>

    </div>
  );
}
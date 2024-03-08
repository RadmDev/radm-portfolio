import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const WorkPage = () => {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world."
      />
      <Portfolio />
    </div>
  );
};

export default WorkPage;

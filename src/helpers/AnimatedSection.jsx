// AnimatedSection.js
import React from "react";
import useInView from "./useInView";

function AnimatedSection({
  children,
  animationClass,
  threshold = 0.1,
  rootMargin = "0px 0px -15% 0px",
}) {
  const [isInView, sectionRef] = useInView(threshold, rootMargin);

  return (
    <div
      ref={sectionRef}
      className={`${isInView ? animationClass : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;

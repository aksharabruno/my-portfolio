import { useEffect, useRef, useState } from "react";

//custom hook for fade up animation on scroll
const useFadeUpOnScroll = (
  threshold = 0.1,
  rootMargin = "0px"
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
};

export const FadeUpElement = ({
  children,
  delay = 0,
  duration = 600,
  distance = 50,
  threshold = 0.1,
  once = true,
}: any) => {
  const [elementRef, isVisible] = useFadeUpOnScroll(threshold);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const shouldAnimate = once ? hasAnimated : isVisible;

  return (
    <div
      ref={elementRef}
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate
          ? "translateY(0)"
          : `translateY(${distance}px)`,
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

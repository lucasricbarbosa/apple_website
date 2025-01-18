import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RefObject } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

interface ScrollProps {
  trigger?: string | Element;
  toggleActions?: string;
  start?: string;
  [key: string]: unknown;
}

interface AnimationProps {
  [key: string]: unknown;
}

export const animateWithGsap = (
  target: string | Element,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps,
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

interface TimelineAnimationProps {
  transform?: string;
  duration?: number;
  [key: string]: unknown;
}

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: RefObject<THREE.Group>,
  rotationState: number,
  firstTarget: string | Element,
  secondTarget: string | Element,
  animationProps: TimelineAnimationProps,
) => {
  timeline.to(rotationRef.current && rotationRef.current?.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );
};

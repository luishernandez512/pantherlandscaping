"use client";
import React, { createContext, useContext } from "react";
import { motion, MotionProps, useReducedMotion } from "framer-motion";

/**
 * 1) Omit `children` from both MotionProps and HTMLAttributes<HTMLDivElement>,
 *    then define your own optional `children?: React.ReactNode;`.
 */
type MergedMotionDivProps = Omit<MotionProps, "children" | "ref"> &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
  };

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

/**
 * 2) Use this merged type for your FadeIn component.
 */
const FadeIn: React.FC<MergedMotionDivProps> = (props) => {
  const { children, ...rest } = props;

  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ type: "tween", duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

/**
 * 3) Same pattern for FadeInStagger. We define a separate merged type if needed,
 *    or reuse the same if you want identical props. 
 */
type FadeInStaggerProps = Omit<MotionProps, "children" | "ref"> &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
    faster?: boolean;
  };

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  children,
  faster = false,
  ...rest
}) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...rest}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};

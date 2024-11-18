import * as React from "react";
import { JSX } from "react/jsx-runtime";
const Leaf = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={23}
    height={24}
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.2188 4.81252C8.68789 4.81252 5.70059 7.126 4.68535 10.3155C6.19473 9.55178 7.89727 9.12502 9.70312 9.12502H13.6562C14.0516 9.12502 14.375 9.44846 14.375 9.84377C14.375 10.2391 14.0516 10.5625 13.6562 10.5625H9.70312C8.95742 10.5625 8.23418 10.6479 7.5334 10.8051C6.36992 11.0701 5.2918 11.5418 4.32598 12.1842C1.72051 13.9227 0 16.892 0 20.2656V20.9844C0 21.5819 0.480664 22.0625 1.07812 22.0625C1.67559 22.0625 2.15625 21.5819 2.15625 20.9844V20.2656C2.15625 18.078 3.08613 16.1104 4.57305 14.7313C5.4625 18.1229 8.54863 20.625 12.2188 20.625H12.2637C18.1979 20.5936 23 14.7448 23 7.53479C23 5.62112 22.6631 3.80178 22.0521 2.16213C21.9354 1.85217 21.4816 1.86565 21.3244 2.15764C20.4799 3.73889 18.8088 4.81252 16.8906 4.81252H12.2188Z"
      fill="#15853B"
    />
  </svg>
);
export default Leaf;
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const getRandomNumberBetween = (min:any,max:any) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}



const Icon: React.FC<SvgProps> = (props) => {
  const lastNumber = getRandomNumberBetween(1,100000);
  return (
    <Svg viewBox="0 0 200 200" {...props}>
      <defs>
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_8_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_8_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_7_G"+lastNumber} fill="freeze" keyTimes="0;0.440678;0.559322;0.6610169;1" path="M62.43 -61.69 C62.43,-61.69 62.43,-61.69 62.43,-61.69 C63.06,-59.86 66.18,-50.69 66.18,-50.69 C66.18,-50.69 63.06,-59.86 62.43,-61.69 C62.43,-61.69 62.43,-61.69 62.43,-61.69 " keyPoints="0;0;0.5;1;1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_7_G"+lastNumber} fill="freeze" attributeName="transform" from="-26.101 -12.93" to="-26.101 -12.93" type="translate" additive="sum" keyTimes="0;1" values="-26.101 -12.93;-26.101 -12.93" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_7_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_7_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_6_G"+lastNumber} fill="freeze" keyTimes="0;0.440678;0.559322;0.6610169;1" path="M-21.07 -45.19 C-21.07,-45.19 -21.07,-45.19 -21.07,-45.19 C-20.44,-43.36 -17.32,-34.19 -17.32,-34.19 C-17.32,-34.19 -20.44,-43.36 -21.07,-45.19 C-21.07,-45.19 -21.07,-45.19 -21.07,-45.19 " keyPoints="0;0;0.5;1;1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_6_G"+lastNumber} fill="freeze" attributeName="transform" from="-34.282" to="-34.282" type="rotate" additive="sum" keyTimes="0;1" values="-34.282;-34.282" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_6_G"+lastNumber} fill="freeze" attributeName="transform" from="-26.101 -12.93" to="-26.101 -12.93" type="translate" additive="sum" keyTimes="0;1" values="-26.101 -12.93;-26.101 -12.93" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_6_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_6_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_5_G"+lastNumber} fill="freeze" attributeName="transform" from="1 1" to="1 1" type="scale" additive="sum" keyTimes="0;0.4745763;0.5763051;0.6744074;1" values="1 1;1 1;1 0.06511;1 1;1 1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_5_G"+lastNumber} fill="freeze" attributeName="transform" from="-10.16 -13.715" to="-10.16 -13.715" type="translate" additive="sum" keyTimes="0;1" values="-10.16 -13.715;-10.16 -13.715" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_5_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_5_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_4_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_4_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_3_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_3_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_3_G_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.7118644;0.7118661;1" values="0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_2_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_2_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_2_G_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.7118644;0.7118661;1" values="0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_1_G"+lastNumber} fill="freeze" attributeName="transform" from="0" to="-4.87" type="rotate" additive="sum" keyTimes="0;0.6101695;0.7118644;1" values="0;0;-4.87;-4.87" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_1_G"+lastNumber} fill="freeze" attributeName="transform" from="1 1" to="0 0" type="scale" additive="sum" keyTimes="0;0.6018305;0.6595085;0.705674;1" values="1 1;1 1;1 0.048209999999999996;0 0;0 0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_1_G"+lastNumber} fill="freeze" attributeName="transform" from="-62.947 -42.886" to="-62.947 -42.886" type="translate" additive="sum" keyTimes="0;1" values="-62.947 -42.886;-62.947 -42.886" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_1_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="0" to="0" type="rotate" additive="sum" keyTimes="0;0.4237288;0.5112373;0.6072398;1" values="0;0;27;0;0" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;1 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_1_G_N_2_T_0"+lastNumber} fill="freeze" attributeName="transform" from="-51.5 -52.5" to="-51.5 -52.5" type="translate" additive="sum" keyTimes="0;1" values="-51.5 -52.5;-51.5 -52.5" keySplines="0 0 1 1" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_12_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_12_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.5428819;1" path="M0 0 C0,0 0,0 0,0 C-31.67,9.33 -158.33,46.67 -190,56 C-190,56 -190,56 -190,56 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_12_G"+lastNumber} fill="freeze" attributeName="transform" from="0" to="100" type="rotate" additive="sum" keyTimes="0;0.0338983;0.5994407;0.6701278;1" values="0;0;100;100;100" keySplines="0.127 0.545 0.373 1;0.127 0.545 0.373 1;0.167 0 0.833 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_12_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5994356;1" values="0 0;0 0;0.5 0.5;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_12_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_12_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_11_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_11_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.514605;1" path="M0 0 C0,0 0,0 0,0 C1,-51.67 5,-258.33 6,-310 C6,-310 6,-310 6,-310 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_11_G"+lastNumber} fill="freeze" attributeName="transform" from="0" to="168.462" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="0;0;168.462;168.462" keySplines="0.144 0.414 0.406 0.875;0.144 0.414 0.406 0.875;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_11_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.514605;1" values="0 0;0 0;0.5 0.5;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_11_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_11_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_10_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_10_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.6701278;1" path="M0 0 C0,0 0,0 0,0 C23,-41 115,-205 138,-246 C138,-246 138,-246 138,-246 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_10_G"+lastNumber} fill="freeze" attributeName="transform" from="0" to="86.444" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="0;0;86.444;86.444" keySplines="0.144 0.807 0.406 0.97;0.144 0.807 0.406 0.97;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_10_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5852972;1" values="0 0;0 0;0.75 0.75;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_10_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_10_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_9_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_9_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.6277125;1" path="M0 0 C0,0 0,0 0,0 C-48.67,-1.67 -243.33,-8.33 -292,-10 C-292,-10 -292,-10 -292,-10 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_9_G"+lastNumber} fill="freeze" attributeName="transform" from="0" to="205.228" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="0;0;205.228;205.228" keySplines="0.144 0.34 0.406 0.857;0.144 0.34 0.406 0.857;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_9_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5428819;1" values="0 0;0 0;0.75 0.75;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_9_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_9_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_8_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_8_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.5570203;1" path="M0 0 C0,0 0,0 0,0 C0.67,40.33 3.33,201.67 4,242 C4,242 4,242 4,242 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_8_G"+lastNumber} fill="freeze" attributeName="transform" from="-75" to="47.268" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="-75;-75;47.268;47.268" keySplines="0.144 0.571 0.406 0.913;0.144 0.571 0.406 0.913;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_8_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5711587;1" values="0 0;0 0;0.75 0.75;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_8_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_8_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_7_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_7_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.5994356;1" path="M0 0 C0,0 0,0 0,0 C39.67,16.33 198.33,81.67 238,98 C238,98 238,98 238,98 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_7_G"+lastNumber} fill="freeze" attributeName="transform" from="-106" to="113.369" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="-106;-106;113.369;113.369" keySplines="0.144 0.318 0.406 0.852;0.144 0.318 0.406 0.852;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_7_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5994356;1" values="0 0;0 0;0.5 0.5;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_7_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_7_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_6_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_6_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.5994356;1" path="M-2.5 -1 C-2.5,-1 -2.5,-1 -2.5,-1 C-2.5,-1.7 -98.84,161.95 -107.14,232.21 C-107.14,232.21 -107.14,232.21 -107.14,232.21 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_6_G"+lastNumber} fill="freeze" attributeName="transform" from="162" to="-15.236" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="162;162;-15.236;-15.236" keySplines="0.006 0.482 0.369 0.893;0.006 0.482 0.369 0.893;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_6_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.514605;1" values="0 0;0 0;1 1;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_6_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_6_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_5_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_5_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.6277125;1" path="M5 -7 C5,-7 5,-7 5,-7 C5,-7.42 255.97,-178.86 256.5,-179.13 C256.5,-179.13 256.5,-179.13 256.5,-179.13 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_5_G"+lastNumber} fill="freeze" attributeName="transform" from="115" to="-43.191" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="115;115;-43.191;-43.191" keySplines="0.052 0.239 0.381 0.835;0.052 0.239 0.381 0.835;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_5_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5994356;1" values="0 0;0 0;1 1;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_5_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_5_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_4_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_4_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.5852972;1" path="M-2.5 -10.5 C-2.5,-10.5 -2.5,-10.5 -2.5,-10.5 C-2.5,-11.31 -158.67,-262.55 -159,-263.88 C-159,-263.88 -159,-263.88 -159,-263.88 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_4_G"+lastNumber} fill="freeze" attributeName="transform" from="29" to="-73.102" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="29;29;-73.102;-73.102" keySplines="0.144 0 0.406 0.61;0.144 0 0.406 0.61;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_4_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5994356;1" values="0 0;0 0;1.2 1.2;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_4_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_4_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_3_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_3_G"+lastNumber} fill="freeze" keyTimes="0;0.0338983;0.6418509;1" path="M-2.5 -8.5 C-2.5,-8.5 -2.5,-8.5 -2.5,-8.5 C-2.5,-9.15 137.88,202.92 137.88,202.92 C137.88,202.92 137.88,202.92 137.88,202.92 " keyPoints="0;0;1;1" keySplines="0.067 0 0.207 1;0.067 0 0.207 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_3_G"+lastNumber} fill="freeze" attributeName="transform" from="80" to="-38.129" type="rotate" additive="sum" keyTimes="0;0.0338983;0.6701278;1" values="80;80;-38.129;-38.129" keySplines="0.144 0 0.406 0.632;0.144 0 0.406 0.632;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_3_G"+lastNumber} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0338983;0.147;0.5852972;1" values="0 0;0 0;1.1 1.1;0 0;0 0" keySplines="0.398 0 0.38 1;0.398 0 0.38 1;0.45 0 0.642 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_3_G"+lastNumber} fill="freeze" attributeName="transform" from="-100 -100" to="-100 -100" type="translate" additive="sum" keyTimes="0;0.0338983;1" values="-100 -100;-100 -100;-100 -100" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_3_G_N_3_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_2_G_N_2_T_0_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_1_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.0338983;0.0338983;0.0339;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate repeatCount="indefinite" dur="2.36s" begin="0s" href={"#_R_G_L_0_G_L_0_G_M"+lastNumber} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.0338983;0.0339;0.7408199;0.7408199;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
        <animate attributeType="XML" attributeName="opacity" dur="2s" from="0" to="1" href={"#time_group"+lastNumber} />
      </defs>
      <g id={"_R_G"+lastNumber}>
        <g id={"_R_G_L_0_G"+lastNumber} transform=" translate(338.434, 99.003) scale(0.47, 0.47) translate(-960, -540)">
          <g id={"_R_G_L_0_G_L_8_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
            <g id={"_R_G_L_0_G_L_8_G"+lastNumber} transform=" translate(52.462, 75.101) translate(-123.586, -121.064)">
              <path id={"_R_G_L_0_G_L_8_G_D_0_P_0"+lastNumber} fill="#a8651e" fillOpacity="1" fillRule="nonzero" d=" M11.31 92.6 C6.45,56.43 49.92,20.71 108.41,12.82 C164.09,5.32 213.32,25.72 222.15,58.92 C222.6,60.59 222.94,62.31 223.18,64.06 C223.31,64.75 223.43,65.45 223.53,66.16 C246.92,204.17 31.44,241.88 11.31,92.6z " />
              <path id={"_R_G_L_0_G_L_8_G_D_1_P_0"+lastNumber} fill="#944715" fillOpacity="1" fillRule="nonzero" d=" M11.31 92.99 C9.59,80.56 13.58,68.2 21.94,56.96 C46.88,167.88 188.46,160.47 225.06,79.76 C232.63,206.16 31.25,237.04 11.31,92.99z " />
              <path id={"_R_G_L_0_G_L_8_G_D_2_P_0"+lastNumber} fill="#dcc1a5" fillOpacity="1" fillRule="nonzero" d=" M222.02 58.57 C222.02,58.57 220.92,58.7 220.92,58.7 C213.33,59.6 205.89,56.86 200.23,51.71 C179.72,33.07 142.17,23.57 101.18,29.25 C60.27,34.92 26.75,54.19 12.04,77.64 C18.96,47.17 57.98,19.81 108.12,12.87 C163.78,5.18 213.07,25.4 222.02,58.57z " />
              <path id={"_R_G_L_0_G_L_8_G_D_3_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M2.4 89.91 C0.25,50.02 45.03,12.95 106.95,4.38 C136.79,0.25 165.97,3.62 189.12,13.85 C213.56,24.66 228.62,41.87 231.53,62.32 C239.56,105.12 226.84,142.94 195.7,168.85 C162.39,196.57 113.02,204.73 72.85,189.17 C34.08,174.15 9.21,140.41 2.81,94.17 C2.81,94.17 2.81,94.17 2.81,94.17 C2.61,92.75 2.48,91.33 2.4,89.91z  M11.3 93 C11.3,93 11.31,93.02 11.31,93.02 C11.31,93.02 11.3,93 11.3,93z  M216.54 80.77 C216.27,75.72 215.64,70.56 214.65,65.31 C214.62,65.17 214.6,65.03 214.58,64.89 C212.58,50.45 201.08,37.89 182.18,29.54 C161.91,20.57 136.03,17.67 109.3,21.37 C56.53,28.67 15.54,60.85 19.8,91.83 C25.31,131.62 46.35,160.51 79.04,173.18 C113.59,186.56 156.06,179.53 184.73,155.67 C207.15,137.01 218.16,110.81 216.54,80.77z " />
              <path id={"_R_G_L_0_G_L_8_G_D_4_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M2.75 93.44 C2.51,89.04 5.69,85.12 10.14,84.5 C14.83,83.85 19.16,87.13 19.81,91.82 C24.08,122.7 72.29,142.63 125.07,135.33 C177.86,128.02 218.86,95.67 214.58,64.88 C213.93,60.21 217.2,55.86 221.89,55.21 C226.58,54.56 230.91,57.84 231.56,62.53 C237.32,103.97 191.56,143.44 127.42,152.31 C63.29,161.19 8.56,135.65 2.82,94.17 C2.79,93.93 2.76,93.69 2.75,93.44z " />
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_7_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
            <g id={"_R_G_L_0_G_L_7_G"+lastNumber}>
              <path id={"_R_G_L_0_G_L_7_G_D_0_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M44.28 25.61 C43,25.61 41.71,25.25 40.56,24.48 C26.81,15.32 13.26,20.49 10.69,21.62 C10.64,21.64 10.51,21.7 10.46,21.72 C7.04,23.14 3.09,21.52 1.67,18.08 C0.25,14.67 1.85,10.75 5.25,9.31 C9.02,7.66 28.46,0.25 48.02,13.28 C51.11,15.34 51.95,19.52 49.89,22.61 C48.6,24.56 46.46,25.61 44.28,25.61z " />
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_6_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
            <g id={"_R_G_L_0_G_L_6_G"+lastNumber}>
              <path id={"_R_G_L_0_G_L_6_G_D_0_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M44.28 25.61 C43,25.61 41.71,25.25 40.56,24.48 C26.81,15.32 13.26,20.49 10.69,21.62 C10.64,21.64 10.51,21.7 10.46,21.72 C7.04,23.14 3.09,21.52 1.67,18.08 C0.25,14.67 1.85,10.75 5.25,9.31 C9.02,7.66 28.46,0.25 48.02,13.28 C51.11,15.34 51.95,19.52 49.89,22.61 C48.6,24.56 46.46,25.61 44.28,25.61z " />
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_5_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
            <g id={"_R_G_L_0_G_L_5_G"+lastNumber} transform=" translate(16.307, 10.847)">
              <path id={"_R_G_L_0_G_L_5_G_D_0_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M19.08 12.46 C20.07,19.52 16.88,25.8 11.95,26.49 C7.03,27.18 2.23,22.02 1.24,14.97 C0.25,7.91 3.44,1.63 8.37,0.94 C13.29,0.25 18.09,5.41 19.08,12.46z " />
              <path id={"_R_G_L_0_G_L_5_G_D_1_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M17.09 9.22 C17.09,11.87 15.54,14.01 13.63,14.01 C11.71,14.01 10.16,11.87 10.16,9.22 C10.16,6.57 11.71,4.42 13.63,4.42 C15.54,4.42 17.09,6.57 17.09,9.22z " />
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_4_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
            <g id={"_R_G_L_0_G_L_4_G"+lastNumber} transform=" translate(68.557, 3.847) translate(-10.16, -13.715)">
              <path id={"_R_G_L_0_G_L_4_G_D_0_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M19.08 12.46 C20.07,19.52 16.88,25.8 11.95,26.49 C7.03,27.18 2.23,22.02 1.24,14.97 C0.25,7.91 3.44,1.63 8.37,0.94 C13.29,0.25 18.09,5.41 19.08,12.46z " />
              <path id={"_R_G_L_0_G_L_4_G_D_1_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M17.09 9.22 C17.09,11.87 15.54,14.01 13.63,14.01 C11.71,14.01 10.16,11.87 10.16,9.22 C10.16,6.57 11.71,4.42 13.63,4.42 C15.54,4.42 17.09,6.57 17.09,9.22z " />
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_3_G_N_2_T_0_M"+lastNumber}>
            <g id={"_R_G_L_0_G_L_3_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
              <g id={"_R_G_L_0_G_L_3_G"+lastNumber} transform=" translate(46, 41.091) translate(-94, -52.909)">
                <path id={"_R_G_L_0_G_L_3_G_D_0_P_0"+lastNumber} stroke="#650000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="14" strokeOpacity="1" d=" M35 53.82 C35,53.82 57,70.82 97,64.82 C137,58.82 153,35 153,35 " />
              </g>
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_2_G_N_2_T_0_M"+lastNumber}>
            <g id={"_R_G_L_0_G_L_2_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
              <g id={"_R_G_L_0_G_L_2_G"+lastNumber} transform=" translate(-12.061, 44.668) translate(-40.061, -45.703)">
                <path id={"_R_G_L_0_G_L_2_G_D_0_P_0"+lastNumber} stroke="#650000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="14" strokeOpacity="1" d=" M45.12 35 C45.12,35 36.46,41.44 35,56.41 " />
              </g>
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_1_G_N_2_T_0"+lastNumber} transform=" translate(455.5, 548.5)">
            <g id={"_R_G_L_0_G_L_1_G"+lastNumber} transform=" translate(48.544, 48.174)">
              <path id={"_R_G_L_0_G_L_1_G_D_0_P_0"+lastNumber} fill="#650000" fillOpacity="1" fillRule="nonzero" d=" M113.11 4.51 C113.11,4.51 90.11,33.52 30.21,30.79 C0.25,29.43 2.97,48.17 19.85,62.26 C47.73,85.52 90.22,75.86 106.34,43.31 C115.84,24.14 125.64,0.25 113.11,4.51z " />
              <path id={"_R_G_L_0_G_L_1_G_D_1_P_0"+lastNumber} fill="#b41c43" fillOpacity="1" fillRule="nonzero" d=" M87.96 45.27 C82.59,43.89 71.73,41.66 61.85,52.33 C61.7,52.02 47.57,42.59 30.55,49.28 C24.43,54.94 35.65,70.22 59.7,67.69 C77.45,65.82 86.21,54.8 89.57,49.16 C90.48,47.65 89.67,45.71 87.96,45.27z " />
            </g>
          </g>
          <g id={"_R_G_L_0_G_L_0_G_M"+lastNumber}>
            <g id={"_R_G_L_0_G_L_0_G"+lastNumber} transform=" translate(440, 532) translate(-960, -540)">
              <g id={"_R_G_L_0_G_L_0_G_L_12_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_12_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_12_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_12_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_12_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_12_G_L_0_G"+lastNumber} transform=" translate(100.062, 99.875) scale(0.65, 0.65) translate(-156, 27.5)">
                          <path id={"_R_G_L_0_G_L_0_G_L_12_G_L_0_G_D_0_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10" strokeOpacity="1" d=" M181 -52.5 C181,-52.5 181,-2.5 181,-2.5 C181,-2.5 131,-2.5 131,-2.5 C131,-2.5 131,-52.5 131,-52.5 C131,-52.5 181,-52.5 181,-52.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_11_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_11_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_11_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_11_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_11_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_11_G_L_0_G"+lastNumber} transform=" translate(100.028, 99.92) scale(0.75, 0.75) translate(-148.5, 27.5)">
                          <path id={"_R_G_L_0_G_L_0_G_L_11_G_L_0_G_D_0_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M178.5 -21.5 C178.5,-21.5 118.5,-21.5 118.5,-21.5 C118.5,-21.5 118.5,-33.5 118.5,-33.5 C118.5,-33.5 178.5,-33.5 178.5,-33.5 C178.5,-33.5 178.5,-21.5 178.5,-21.5z " />
                          <path id={"_R_G_L_0_G_L_0_G_L_11_G_L_0_G_D_1_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M154.5 -57.5 C154.5,-57.5 154.5,2.5 154.5,2.5 C154.5,2.5 142.5,2.5 142.5,2.5 C142.5,2.5 142.5,-57.5 142.5,-57.5 C142.5,-57.5 154.5,-57.5 154.5,-57.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_10_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_10_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_10_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_10_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_10_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_10_G_L_0_G"+lastNumber} transform=" translate(100.028, 99.92) scale(0.75, 0.75) translate(-148.5, 27.5)">
                          <path id={"_R_G_L_0_G_L_0_G_L_10_G_L_0_G_D_0_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M178.5 -21.5 C178.5,-21.5 118.5,-21.5 118.5,-21.5 C118.5,-21.5 118.5,-33.5 118.5,-33.5 C118.5,-33.5 178.5,-33.5 178.5,-33.5 C178.5,-33.5 178.5,-21.5 178.5,-21.5z " />
                          <path id={"_R_G_L_0_G_L_0_G_L_10_G_L_0_G_D_1_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M154.5 -57.5 C154.5,-57.5 154.5,2.5 154.5,2.5 C154.5,2.5 142.5,2.5 142.5,2.5 C142.5,2.5 142.5,-57.5 142.5,-57.5 C142.5,-57.5 154.5,-57.5 154.5,-57.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_9_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_9_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_9_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_9_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_9_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_9_G_L_0_G"+lastNumber} transform=" translate(100.028, 99.92) scale(0.75, 0.75) translate(-148.5, 27.5)">
                          <path id={"_R_G_L_0_G_L_0_G_L_9_G_L_0_G_D_0_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M178.5 -21.5 C178.5,-21.5 118.5,-21.5 118.5,-21.5 C118.5,-21.5 118.5,-33.5 118.5,-33.5 C118.5,-33.5 178.5,-33.5 178.5,-33.5 C178.5,-33.5 178.5,-21.5 178.5,-21.5z " />
                          <path id={"_R_G_L_0_G_L_0_G_L_9_G_L_0_G_D_1_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M154.5 -57.5 C154.5,-57.5 154.5,2.5 154.5,2.5 C154.5,2.5 142.5,2.5 142.5,2.5 C142.5,2.5 142.5,-57.5 142.5,-57.5 C142.5,-57.5 154.5,-57.5 154.5,-57.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_8_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_8_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_8_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_8_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_8_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_8_G_L_0_G"+lastNumber} transform=" translate(99.938, 99.937) scale(0.65, 0.65) translate(-91.25, 27.75)">
                          <path id={"_R_G_L_0_G_L_0_G_L_8_G_L_0_G_D_0_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10" strokeOpacity="1" d=" M91.25 -53.6 C105.52,-53.6 117.1,-42.02 117.1,-27.75 C117.1,-13.48 105.52,-1.9 91.25,-1.9 C76.98,-1.9 65.4,-13.48 65.4,-27.75 C65.4,-42.02 76.98,-53.6 91.25,-53.6z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_7_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_7_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_7_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_7_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_7_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_7_G_L_0_G"+lastNumber} transform=" translate(100.011, 99.792) scale(0.65, 0.65) translate(9.739, 21.058)">
                          <path id={"_R_G_L_0_G_L_0_G_L_7_G_L_0_G_D_0_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10" strokeOpacity="1" d=" M-9.74 -52.5 C-9.74,-52.5 18.02,-4.42 18.02,-4.42 C18.02,-4.42 -37.5,-4.42 -37.5,-4.42 C-37.5,-4.42 -9.74,-52.5 -9.74,-52.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_6_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_6_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_6_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_6_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_6_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_6_G_L_0_G"+lastNumber} transform=" translate(100.028, 99.92) scale(0.75, 0.75) translate(-148.5, 27.5)">
                          <path id={"_R_G_L_0_G_L_0_G_L_6_G_L_0_G_D_0_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M178.5 -21.5 C178.5,-21.5 118.5,-21.5 118.5,-21.5 C118.5,-21.5 118.5,-33.5 118.5,-33.5 C118.5,-33.5 178.5,-33.5 178.5,-33.5 C178.5,-33.5 178.5,-21.5 178.5,-21.5z " />
                          <path id={"_R_G_L_0_G_L_0_G_L_6_G_L_0_G_D_1_P_0"+lastNumber} fill="#ffffff" fillOpacity="1" fillRule="nonzero" d=" M154.5 -57.5 C154.5,-57.5 154.5,2.5 154.5,2.5 C154.5,2.5 142.5,2.5 142.5,2.5 C142.5,2.5 142.5,-57.5 142.5,-57.5 C142.5,-57.5 154.5,-57.5 154.5,-57.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_5_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_5_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_5_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_5_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_5_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_5_G_L_0_G"+lastNumber} transform=" translate(100.062, 99.875) scale(0.65, 0.65) translate(-156, 27.5)">
                          <path id={"_R_G_L_0_G_L_0_G_L_5_G_L_0_G_D_0_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10" strokeOpacity="1" d=" M181 -52.5 C181,-52.5 181,-2.5 181,-2.5 C181,-2.5 131,-2.5 131,-2.5 C131,-2.5 131,-52.5 131,-52.5 C131,-52.5 181,-52.5 181,-52.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_4_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_4_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_4_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_4_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_4_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_4_G_L_0_G"+lastNumber} transform=" translate(99.938, 99.937) scale(0.65, 0.65) translate(-91.25, 27.75)">
                          <path id={"_R_G_L_0_G_L_0_G_L_4_G_L_0_G_D_0_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10" strokeOpacity="1" d=" M91.25 -53.6 C105.52,-53.6 117.1,-42.02 117.1,-27.75 C117.1,-13.48 105.52,-1.9 91.25,-1.9 C76.98,-1.9 65.4,-13.48 65.4,-27.75 C65.4,-42.02 76.98,-53.6 91.25,-53.6z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_3_G_N_3_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_3_G_N_3_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_3_G_N_3_T_0"+lastNumber}>
                    <g id={"_R_G_L_0_G_L_0_G_L_3_G"+lastNumber}>
                      <g id={"_R_G_L_0_G_L_0_G_L_3_G_L_0_G_M"+lastNumber}>
                        <g id={"_R_G_L_0_G_L_0_G_L_3_G_L_0_G"+lastNumber} transform=" translate(100.011, 99.792) scale(0.65, 0.65) translate(9.739, 21.058)">
                          <path id={"_R_G_L_0_G_L_0_G_L_3_G_L_0_G_D_0_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="10" strokeOpacity="1" d=" M-9.74 -52.5 C-9.74,-52.5 18.02,-4.42 18.02,-4.42 C18.02,-4.42 -37.5,-4.42 -37.5,-4.42 C-37.5,-4.42 -9.74,-52.5 -9.74,-52.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_2_G_N_2_T_0_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_2_G_N_2_T_0"+lastNumber} transform=" translate(960, 540) translate(0, 0)">
                  <g id={"_R_G_L_0_G_L_0_G_L_2_G"+lastNumber} />
                </g>
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_1_G_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_1_G"+lastNumber} transform=" translate(960, 540) translate(0, 0)" />
              </g>
              <g id={"_R_G_L_0_G_L_0_G_L_0_G_M"+lastNumber}>
                <g id={"_R_G_L_0_G_L_0_G_L_0_G"+lastNumber} transform=" translate(964, 540) translate(0, 0)">
                  <path id={"_R_G_L_0_G_L_0_G_L_0_G_D_0_P_0"+lastNumber} fill="#e4d84c" fillOpacity="1" fillRule="nonzero" d="  " />
                  <path id={"_R_G_L_0_G_L_0_G_L_0_G_D_1_P_0"+lastNumber} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="19" strokeOpacity="1" d="  " />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id={"time_group"+lastNumber}/>
    </Svg>
  );
};

export default Icon;

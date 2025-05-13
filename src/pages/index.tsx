import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import {
  Check,
  ArrowRight,
  SquarePen,
  SquareChartGantt,
  Blocks,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    name: "Intuitive Chat Interface:",
    description:
      " LLMind Chat employs a user-friendly chat interface, enabling mental health professionals to interact with the system and receive diagnostic suggestions in a familiar and accessible manner. ",
    icon: SquareChartGantt,
  },
  {
    name: "Real-Time Diagnostic Support:",
    description:
      "The chat-based system provides real-time responses, offering immediate diagnostic and differential diagnostic suggestions to clinicians as they input patient information.",
    icon: SquarePen,
  },
  {
    name: "Flexible and Efficient:",
    description:
      "LLMind Chat’s conversational approach allows for dynamic adaptation to specific cases and reduces the time required for information gathering and analysis.",
    icon: Blocks,
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Decoding the Mind: A RAG-LLM on ICD-KG for Decision Support in Psychology"
      description="Research Paper Summary"
    >
      <main>
        <img
          src="/llmind-docs/img/bblurry_1.svg"
          className="absolute opacity-15 -top-[45rem]"
        />
        <section className="relative z-10">
          <div className="place-content-center mx-4 lg:gap-12 xl:gap-12 lg:pt-10 lg:grid-cols-12 pb-12">
            <h1 className="md:text-center pt-12 mb-4 leading-none text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white font-bold tracking-widest">
              LLMind-KG
            </h1>
            <div className="justify-center flex flex-col md:flex-row max-w-6xl gap-20 pb-2 mx-auto">
              <img
                alt="Logo"
                src="/llmind-docs/img/logo.svg"
                className="lg:mt-0 lg:col-span-4 lg:flex w-[20rem] object-fit-cover h-auto max-w-full"
              />
              <div className="place-content-center max-w-lg pl-2">
                <p className=" text-dgBackground dark:text-white sm:text-xl lg:mb-8 md:text-2xl lg:text-3xl">
                  {" "}
                  Decoding the Mind: A RAG-LLM on ICD-KG for Decision Support in
                  Psychology{" "}
                </p>
                <div className="flex flex-row">
                  <a
                    href="/llmind-docs/docs/intro"
                    className="text-center inline-flex items-center border-none dark:bg-dgBackground dark:text-lightBackground  hover:text-dgBackground text-lightBackground bg-dgBackground font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-secondaryGreen font-semibold"
                  >
                    Learn more <ArrowRight className="ml-2 h-5 w-5" />{" "}
                  </a>
                  <a
                    href="https://forms.gle/UpYbTKVpTjq2XyJj6"
                    className="text-center inline-flex items-center border-none dark:bg-dgBackground dark:text-lightBackground  hover:text-dgBackground text-lightBackground bg-dgBackground font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-secondaryGreen font-semibold"
                  >
                    Feedback and Features request{" "}
                    <ExternalLink className="ml-2 h-5 w-5" />{" "}
                  </a>
                  <a
                    href="https://llmind.datai.disco.unimib.it/"
                    className="text-center inline-flex items-center border-2 border-solid dark:border-primaryGreen border-secondaryGreen hover:text-dgBackground dark:text-lightBackground text-dgBackground font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-semibold"
                  >
                    Try it out <ExternalLink className="ml-2 h-5 w-5" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="overflow-hidden dark:bg-darkBackground bg-lightBackground py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col justify-center lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    A RAG-LLM on ICD-KG for Decision Support in Psychology
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
                    This paper investigates the potential of Large Language
                    Models (LLMs) in assisting psychologists and psychiatrists
                    with diagnostic decision-making using the ICD-KG.
                  </p>
                  <div className="mt-6 max-w-xl space-y-4 text-base leading-5 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-8">
                        <div className="inline font-bold text-gray-900 dark:text-gray-300">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-5 w-5 text-primaryGreen dark:text-secondaryGreen"
                          />
                          {feature.name}
                        </div>
                        <span className="inline pl-3 text-gray-600 dark:text-gray-200">
                          {feature.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src="/llmind-docs/img/llmindUI.png"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

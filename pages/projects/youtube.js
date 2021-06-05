import Image from "next/image";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";
import { styled } from "stitches.config";
import Carousel from "components/molecules/Carousel";
import Grid from "components/atoms/Grid.js";
import Project from "components/templates/Project";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import LinkTo from "components/utilities/LinkTo";
import React from "react";
import TextCard from "components/molecules/ListCard";
import Text from "components/atoms/Text";
import Section from "components/atoms/Section";
import Content from "components/atoms/Content";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "components/organisms/List";

export default function Carefull() {
  return (
    <Project>
      <ProjectIntro
        client="YouTube"
        role="Interaction Designer"
        year="2016-2018"
        title="Elevating the experience of premium content across YouTube."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src="/projects/youtube/Youtube_UI_1@2x.png"
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            width={2256}
            height={1188}
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight label="About The Project">
        <List>
          <List.Item title="The problem" text={<>YouTube was created for</>} />
          <List.Item
            title="My Role"
            text={
              <>
                As a User Experience Designer at Google, I led Interaction
                Design for all of the SVOD surfaces across YouTube. I was
                responsible for taking product features from problem
                identification to high fidelity specifications. I worked closely
                with our researchers to identify user needs and validate
                prototypes, while also aiding our development team to implement
                our designs.
              </>
            }
          />
        </List>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            I guided interaction design for the evolution of our Premium
            offering
          </>
        }
      >
        <Content>
          <Grid columns={2}>
            <TextCard
              text={
                <>
                  Worked with our research team to define critical user journeys
                  for our product area. Product decisions were then measured by
                  their impact against these journeys — giving design & research
                  quantifiable measurements by which to inact change.
                </>
              }
              iconName="Chat"
            />
            <TextCard
              text={
                <>
                  Lead a cross-functional sprint with stakeholders from across
                  the product area. Utilizing the existing knowledge and
                  organizational learnings of my peers to inform our new
                  projects.
                </>
              }
              iconName="Chat"
            />
            <TextCard
              text={
                <>
                  Built prototypes of conceptual features & quality of life
                  improvements to improve our offering and our customers
                  experience as a YouTube fan.
                </>
              }
              iconName="Chat"
            />
            <TextCard
              text={
                <>
                  Worked with our research team to conduct an ethnographic
                  research trip in Japan to uncover patterns specific to the
                  market and test our prototypes with users.
                </>
              }
              iconName="Chat"
            />
            <AssetCard caption="We spent 2 weeks in Tokyo, Japan. Visiting YouTube users in their home — learning about their lifestyle, desires, & video consumption behaviors.">
              <Image
                src="/projects/youtube/Youtube_Japan_1.jpg"
                alt=""
                width={2000}
                height={1333}
              />
            </AssetCard>
          </Grid>
        </Content>
      </ProjectHighlight>
      <ProjectHighlight
        heading={<>Helped to encourage success across the company.</>}
      >
        <Content>
          <Grid columns={2}>
            <TextCard
              text="I identified a gap in our asset creation workflow that created friction & excessive manual labor. So I built an
            internal tool to automate portions of the process. Giving autonomy to our counterparts."
            />
            <TextCard text="I worked with our growth team to reduce churn by implementing a post-cancelation recovery flow. The insights gathered went on to motivate retargeting and re-engagement initiatives" />
            <TextCard text="Helped to organize an internal conference that was attended by individuals from across Google products, offices, & countries." />
          </Grid>
        </Content>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Project>
  );
}
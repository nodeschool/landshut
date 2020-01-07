import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Community from "../components/community";
import Mentors from "../components/mentors";
import NodeSchoolChapterLogo from "../components/NodeschoolChapterSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NodeSchoolChapterLogo></NodeSchoolChapterLogo>
    <Community></Community>
    <Mentors></Mentors>
  </Layout>
);

export default IndexPage;

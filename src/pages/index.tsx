import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import Community from "../components/community";
import Mentors from "../components/mentors";
import NodeSchoolChapterLogo from "../components/NodeschoolChapterSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NodeSchoolChapterLogo></NodeSchoolChapterLogo>
    <Community></Community>
    <Mentors></Mentors>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

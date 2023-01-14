import React from "react";
import { Helmet } from "react-helmet";
export default function MetaDescriptions({ title, descriptions }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="descriptions" content={descriptions} />
    </Helmet>
  );
}

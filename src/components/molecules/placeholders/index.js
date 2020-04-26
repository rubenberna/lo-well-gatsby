import React from "react"
import ContentLoader from "react-content-loader"

const AboutPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="173" y="25" rx="3" ry="3" width="88" height="6" />
    <rect x="172" y="50" rx="3" ry="3" width="410" height="6" />
    <rect x="171" y="73" rx="3" ry="3" width="380" height="6" />
    <rect x="171" y="94" rx="3" ry="3" width="178" height="6" />
    <rect x="23" y="27" rx="0" ry="0" width="103" height="75" />
  </ContentLoader>
)

export default AboutPlaceholder
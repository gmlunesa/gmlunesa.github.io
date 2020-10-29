import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query footerTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <footer>
              <div className="container py-4">
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item mr-4">
                      &copy; {new Date().getFullYear()}.{" "}
                      {data.site.siteMetadata.title}.
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="mailto:gmlunesa@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://github.com/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://linkedin.com/in/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://twitter.com/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </>
        )}
      ></StaticQuery>
    )
  }
}

// export default function Footer() {
//   return (
//     <footer>
//       <div className="container">

//         {/* <p>&copy; {new Date().getFullYear()}. Lunvitech. All Rights Reserved.</p>
//         <ul className="list-inline">
//           <li className="list-inline-item">
//             <a href="/#">Privacy</a>
//           </li>
//           <li className="list-inline-item">
//             <a href="/#">Terms</a>
//           </li>
//           <li className="list-inline-item">
//             <a href="/#">FAQ</a>
//           </li>
//         </ul> */}
//       </div>
//     </footer>
//   );
// }

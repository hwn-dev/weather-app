import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-container">
                <ul>
                    <li>
                        <button>
                            <a href="https://facebook.com/harryjwneale" target="_blank">
                                <FontAwesomeIcon icon={["fab", "facebook"]} />
                            </a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="https://twitter.com/HWN_Dev" target="_blank">
                                <FontAwesomeIcon icon={["fab", "twitter"]}
                                />
                            </a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="https://linkedin.com/in/harry-neale-092976125/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            </a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="https://github.com/hwn-dev" target="_blank">
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
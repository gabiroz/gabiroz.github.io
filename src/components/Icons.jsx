import * as React from 'react';
import LinkedInIcon from '../svgs/linkedin.svg';
import CodeIcon from '../svgs/code.svg';
import MailIcon from '../svgs/mail.svg';
import '../styles/main.scss';

const Icons = () => (
  <>
    <div>
      <a href="https://www.linkedin.com/in/gabriella-r%C3%B3zsa-491b1a192/" target="_blank" rel="noreferrer">
        <LinkedInIcon className="icon" />
      </a>
    </div>
    <div className="px-3">
      <a href="https://github.com/gabiroz/gabiroz.github.io" target="_blank" rel="noreferrer">
        <CodeIcon className="icon" />
      </a>
    </div>
    <div>
      <a href="mailto:gabriella.rozsa@yahoo.com">
        <MailIcon className="icon" />
      </a>
    </div>
  </>
);

export default Icons;

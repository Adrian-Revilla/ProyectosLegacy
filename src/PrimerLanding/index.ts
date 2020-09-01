import * as $ from 'jquery';


import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faCheck, faGlobe, faComments,
  faUserCircle, faCheckDouble,
  faSortUp, faSortAmountUp, faDatabase,
  faServer,faPencilRuler,faStar
} from '@fortawesome/free-solid-svg-icons';

import {faPaperPlane,faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {faGithubSquare,faInstagram,faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';


library.add(faHome, faCheck, faCommentAlt, faComments,
  faUserCircle, faPaperPlane, faGlobe, faPaperPlane,
  faGithubSquare, faCheckDouble, faSortUp, faSortAmountUp,
  faDatabase,faServer,faPencilRuler,faStar,faFacebookF,faInstagram,faTwitter
  
);
dom.watch();

require('bootstrap/js/dist/util');
require('bootstrap/js/dist/tab.js');
require('bootstrap/js/dist/tooltip.js');
require('bootstrap/js/dist/modal.js');

require('./index.scss');
require('./img/ejemplo.png');
require('./img/github.png');
require('./img/home.png');

require('./ts/arrow.ts');
require('./ts/modal.ts');
require('./ts/nav.ts');

$(() => { $('[data-toggle="tooltip"]').tooltip()});

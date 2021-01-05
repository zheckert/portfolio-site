//components

import { Design } from "./Design"
import { Dev } from "./Dev"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Voiceover } from "./Voiceover"

//images

//dev

//use an image of the project, possibly link to codepen? https://blog.codepen.io/documentation/embedded-pens/

import randomizer from "./images/dev-images/randomizer.jpg"
import shortener from "./images/dev-images/shortener.jpg"

//design
import  a  from "./images/design-images/a.jpg"
import  b  from "./images/design-images/b.jpg"
import  c  from "./images/design-images/c.jpg"
import  d  from "./images/design-images/d.jpg"
import  e  from "./images/design-images/e.jpg"
import  f  from "./images/design-images/f.jpg"
import  g  from "./images/design-images/g.jpg"
import  h  from "./images/design-images/h.jpg"
import  i  from "./images/design-images/i.jpg"
import  j  from "./images/design-images/j.jpg"
import  k  from "./images/design-images/k.jpg"
import  l  from "./images/design-images/l.jpg"
import  m  from "./images/design-images/m.jpg"
import  n  from "./images/design-images/n.jpg"
import  o  from "./images/design-images/o.jpg"
import  p  from "./images/design-images/p.jpg"
import  q  from "./images/design-images/q.jpg"

//header images
import { logo } from "./images/header-images/logo.svg"
import { name } from "./images/header-images/name2.svg"
import { linkedIn } from "./images/header-images/linkedin.svg"
import { gitHub } from "./images/header-images/github.svg"
import { arrow } from "./images/header-images/arrow.svg"

export { Design, Dev, Footer, Header, Voiceover, logo, name, linkedIn, gitHub, arrow, }

//data to display:

export const devData = [
    {
        src: shortener,
        // alttext needed for display images
        // icons: stuff,
        title: "URL Shortener in React",
        // <UPDATE ME LATER!> https://url-shortener-zach.netlify.app/
        text: "This was an exercise in interacting with APIs. Built with React, JavaScript, CSS, and HTML.",
    },
    {
        src: randomizer,
        // alttext needed for display images
        // icons: stuff,
        title: "Weapon Randomizer",
        text: "This function will create a goofy fantasy weapon from a pool of attributes and deliver it as a string. Built in JavaScript.",
    },
    {
        src: shortener,
        // alttext needed for display images
        // icons: stuff,
        title: "URL Shortener in React",
        text: "This was an exercise in interacting with APIs. Built with React, JavaScript, CSS, and HTML.",
    },
    {
        src: randomizer,
        // alttext needed for display images
        // icons: stuff,
        title: "Weapon Randomizer",
        text: "This function will create a goofy fantasy weapon from a pool of attributes and deliver it as a string. Built in JavaScript.",
    },
]

//width needs to be fixed. and height. we need to take up more space. thank you
export const voiceoverData = [
    {
        src: "https://www.youtube.com/embed/yXdxRuzha6A",
        title: "Cabinet Room",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
    {
        src: "https://youtube.com/embed/YdAYxLzzy2c",
        title: "Vivint Solar",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
    {
        src: "https://www.youtube.com/embed/VYKzReGIbHE",
        title: "Buyer's Journey",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
    {
        src: "https://www.youtube.com/embed/nYDmeE4heE8",
        title: "Brand Building Rennaisance",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
    {
        src: "https://www.youtube.com/embed/4czS8WbCXdo",
        title: "Job of a Billboard",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
    {
        src: "https://www.youtube.com/embed/21rmOvNbwjo",
        title: "Brand Building Analysis",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
    {
        src: "https://www.youtube.com/embed/7kTx3lm6Qj0",
        title: "Name Shark",
        width: "100%",
        height: "100%",
        frameborder: 0,
        allow: "encrypted-media",
        allowfullscreen: "allowfullscreen"
    }, 
]


export const designData = [
    {
        name: "Ladybug, Ladybug",
        src: a
    },
    {
        name: "Punchman",
        src: b
    },
    {
        name: "Attack",
        src: c
    },
    {
        name: "Gothic",
        src: d
    },
    {
        name: "Underwater Expedition",
        src: e
    },
    {
        name: "Skull",
        src: f
    },
    {
        name: "New York City",
        src: g
    },
    {
        name: "Big Sword with Text",
        src: h
    },
    {
        name: "Punching Demon",
        src: i
    },
    {
        name: "Red Devil Branding",
        src: j
    },
    {
        name: "Spooky King",
        src: k
    },
    {
        name: "Rock",
        src: l
    },
    {
        name: "Skull Squat EP",
        src: m
    },
    {
        name: "Collection of Sketches 1",
        src: n
    },
    {
        name: "Nice Shoes",
        src: o
    },
    {
        name: "Hearts Cape",
        src: p
    },
    {
        name: "Collection of Sketches 2",
        src: q
    },

]


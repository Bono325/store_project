import React from 'react'

const items = [
    {
      src: 'https://picsum.photos/id/123/600/300',
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
  ];
  

const MiniPost = () => {

    const card = items.map((item) => {
        return (
        <article key={item.key} className="mini-post">
            <header>
                <h3><a href="single.html">{items.caption}</a></h3>
                <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                <a href="#" className="author"><img src={items.src} alt="" /></a>
            </header>
            <a href="single.html" className="image"><img src="images/pic04.jpg" alt="" /></a>
        </article>
        )
    })

  return (
    {card}
  )
}

export default MiniPost
